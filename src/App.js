import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tempNowA: '',
            tempUnitA: '',
            tempNow: '',
            tempUnit: '',
            wetIcn: '',
            currPress: '',
            clearW: '',
            currTime: '',
            currDay: '',
            uvInd: '',
            visible: '',
            windWay: '',
            windSpd: '',
            windChillT: '',
            apparTemp: '',
            relHumid: '',
            cloudCov: '',
            windGust: '',
            cityCountN: '',
            latLon: '',
            popuL: '',
            elevaT: ''
        }
    };
    componentDidMount(){
        axios.get("http://dataservice.accuweather.com/currentconditions/v1/298198?apikey=HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG&details=true")
            .then(response => {
                console.log("weather data:", response)
                let tempNowA = response.data["0"].RealFeelTemperature.Metric.Value
                let tempNow = response.data["0"].Temperature.Metric.Value;
                let wetIcn = response.data["0"].WeatherIcon;
                let pressTend = response.data["0"].PressureTendency.LocalizedText;
                let pressVal = response.data["0"].Pressure.Metric.Value;
                let currPress = pressVal + ` ` + response.data["0"].Pressure.Metric.Unit + ` ` + `(` + pressTend + `)`;
                let clearW = response.data["0"].WeatherText;
                let dayS = String(localStorage.getItem('myDays')).split(',')
                let uvInd = response.data["0"].UVIndex + ` ` + `(` + response.data["0"].UVIndexText + `)`;
                let visbUnt = response.data["0"].Visibility.Metric.Unit;
                let visible = response.data["0"].Visibility.Metric.Value + visbUnt;
                let windDeg = response.data["0"].Wind.Direction.Degrees;
                let windWay = windDirect(windDeg);
                let windVal = response.data["0"].Wind.Speed.Metric.Value;
                let windFast = response.data["0"].Wind.Speed.Metric.Unit
                let windGust = response.data["0"].WindGust.Speed.Metric.Value + windFast;
                let windSpd = windVal + windFast
                let windChillT = `Wind chill:` + ` ` + response.data["0"].WindChillTemperature.Metric.Value;
                let apparTemp = `Apparent temp:` + ` ` + response.data["0"].ApparentTemperature.Metric.Value;
                let relHumid = response.data["0"].RelativeHumidity;
                let cloudCov = response.data["0"].CloudCover;
                function windDirect(degree){
                    if (degree > 337.5) return 'Northerly';
                    if (degree > 292.5) return 'North Westerly';
                    if (degree > 247.5) return 'Westerly';
                    if (degree > 202.5) return 'South Westerly';
                    if (degree > 157.5) return 'Southerly';
                    if (degree > 122.5) return 'South Easterly';
                    if (degree > 67.5) return 'Easterly';
                    if (degree > 22.5) { return 'North Easterly';}
                    return 'Northerly';
                }
                setInterval(()=>{
                    this.setState({
                        currTime: new Date().toLocaleString(),
                        currDay: dayS[new Date().getDay()]
                    })
                },1000)
                this.setState({
                    tempNowA,
                    tempNow,
                    wetIcn,
                    currPress,
                    clearW,
                    uvInd,
                    visible,
                    windWay,
                    windSpd,
                    windChillT,
                    apparTemp,
                    relHumid,
                    cloudCov,
                    windGust,
                })
            })
            .then(() =>{
                axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG&q=Belgrade%20Serbia&details=true&offset=20")
                    .then(locInfo => {
                        console.log('info o location:', locInfo);
                        let cityCountN = locInfo.data["0"].AdministrativeArea.EnglishName + `, ` + locInfo.data["0"].Country.EnglishName;
                        let latLon = locInfo.data["0"].GeoPosition.Latitude + ` / ` + locInfo.data["0"].GeoPosition.Longitude;
                        let elevaT = locInfo.data["0"].GeoPosition.Elevation.Metric.Value + locInfo.data["0"].GeoPosition.Elevation.Metric.Unit;
                        let popuL = locInfo.data["0"].Details.Population
                        this.setState({
                            cityCountN,
                            latLon,
                            popuL,
                            elevaT
                        })
                    })
            })
    };
  render(){
    return (
      <div className = {['weather__container', 'container'].join(' ')} >
        <div id='titleCity'>{this.state.cityCountN}   <span id='latLonId'>{this.state.latLon} &nbsp; &#8739;  &nbsp;
         <span id='populId'>Pop: &nbsp;{this.state.popuL}</span> &nbsp;&nbsp;  &#8739;  El: &nbsp; {this.state.elevaT}  </span></div>
           <div title={this.state.currDay} id='time1'><span id='timeId1'>{this.state.currTime}</span> </div>
          <div id='stajlClear'>{this.state.clearW}</div>
          <div id ='cloudCover'> Cloudiness:  <span className='allRed'>{this.state.cloudCov}&#37;</span>  </div>         

        <div id='pressTitl'>Pressure: &nbsp;<div id ='stajlPress'> &nbsp; {this.state.currPress}</div></div>
      <div id='stajlTempNow' className='container'> {this.state.tempNow} <div id='celzId'> &#8451;</div>   <div id='stajlTempNowA' className='container'><div className='spanId1'>(Feels like: &nbsp;</div> {this.state.tempNowA} &#8451;)       <div id ='windTemp'>({this.state.windChillT}  &#8451;)</div>
          <div id ='apparTempId'>({this.state.apparTemp}  &#8451;)</div>
  </div>
     </div>
      <div id='uvindex'>UV index: <span id='redUv'>{this.state.uvInd}</span></div>
      <div id ='visibleId'>Visibility:&nbsp;<span id='redVisb'>{this.state.visible}</span></div>
      <div id ='windId'>Wind direction:&nbsp; <span id='redWindDir'>{this.state.windWay}</span></div>
      <div id ='windSpid'>Wind speed: <span className='dividerId'>&#8739;</span> gust: &nbsp; <span className='spidWind'>{this.state.windSpd}</span> <span className='dividerId'> &#8739;</span>  <span className='spidWind'>{this.state.windGust}</span></div>         
      <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.state.relHumid}&#37;</span></div>         
      </div>
    )      
  }
};

export default App











