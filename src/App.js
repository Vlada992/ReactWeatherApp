import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.ChangeToF = this.ChangeToF.bind(this);
        this.KmToMi = this.KmToMi.bind(this);
        this.timeHover = this.timeHover.bind(this);
        this.outHover = this.outHover.bind(this);
        this.togleR = false;
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
            currMont: '',
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
            elevaT: '',
            ceeling1: '',
            pointDew: '',
            tempNowF: '',
            tempNowFor: '',
            tempNowAF: '',
            tempNowAFor: '',
            apparTempF: '',
            apparTempFor: '',
            windChillTF: '',
            windChillFor: '',
            visbUntMi: '',
            visibleMi: '',
            visibleFor: '',
            timeZn: '',
            currTime1: '',
            tmZonUrl: '',
            pressTend: '',
            uvText: ''
        }
    };
    ChangeToF(event) {
        let tempNow = { ...this.state.tempNow, hit1: this.state.tempNowF, hit11: this.state.tempNowFor };
        let apparTemp = { ...this.state.apparTemp, hit2: this.state.apparTempF, hit22: this.state.apparTempFor };
        let tempNowA = { ...this.state.tempNowA, hit3: this.state.tempNowAF, hit33: this.state.tempNowAFor };
        let windChillT = { ...this.state.windChillT, hit4: this.state.windChillTF, hit44: this.state.windChillFor };
        if (this.togleR === false) {
            this.setState({ tempNow: tempNow.hit1 })
            this.setState({ apparTemp: apparTemp.hit2 })
            this.setState({ tempNowA: tempNowA.hit3 });
            this.setState({ windChillT: windChillT.hit4 })
            this.togleR = true
            document.getElementById('celzId').innerHTML = '&#8457;'
            document.getElementById('fahrId').innerHTML = '&#8451;'
            console.log(document.getElementsByClassName('all3'))
            document.getElementsByClassName('all3')[0].innerHTML = '&#8457;'
            document.getElementsByClassName('all3')[1].innerHTML = '&#8457;'
            document.getElementsByClassName('all3')[2].innerHTML = '&#8457;'
        } else {
            this.setState({ tempNow: tempNow.hit11 })
            this.setState({ tempNowA: tempNowA.hit33 })
            this.setState({ apparTemp: apparTemp.hit22 })
            this.setState({ windChillT: windChillT.hit44 })
            document.getElementById('celzId').innerHTML = '&#8451;'
            document.getElementById('fahrId').innerHTML = '&#8457;'
            document.getElementsByClassName('all3')[0].innerHTML = '&#8451;'
            document.getElementsByClassName('all3')[1].innerHTML = '&#8451;'
            document.getElementsByClassName('all3')[2].innerHTML = '&#8451;'
            this.togleR = false;
        }
    }
    KmToMi() {
        let visible = { ...this.state.visible, to1: this.state.visibleMi, to2: this.state.visibleFor }
        if (this.oneTwo === false) {
            this.setState({ visible: visible.to1 })
            this.oneTwo = true
            setTimeout(() => {
                document.getElementById('mikm').innerHTML = 'km'
            }, 700);
        } else {
            this.setState({ visible: visible.to2 })
            this.oneTwo = false;
            document.getElementById('mikm').innerHTML = 'mi'
        }
    }
    timeHover() {
        document.getElementById('huvTime').style.opacity = '0.9';
    }
    outHover() {
        document.getElementById('huvTime').style.opacity = '0';
    }
    componentDidMount() {
        axios.get("http://dataservice.accuweather.com/currentconditions/v1/298198?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&details=true")
            .then(response => {
                console.log("weather data:", response)
                let tempNowF = response.data["0"].Temperature.Imperial.Value
                let tempNowA = response.data["0"].RealFeelTemperature.Metric.Value
                let tempNowAF = response.data["0"].RealFeelTemperature.Imperial.Value
                let tempNowAFor = response.data["0"].RealFeelTemperature.Metric.Value
                let tempNowFor = response.data["0"].Temperature.Metric.Value;
                let tempNow = response.data["0"].Temperature.Metric.Value;
                let wetIcn = response.data["0"].WeatherIcon;
                let pressTend = response.data["0"].PressureTendency.LocalizedText;
                let pressVal = response.data["0"].Pressure.Metric.Value;
                let currPress = pressVal + ` ` + response.data["0"].Pressure.Metric.Unit;
                let clearW = response.data["0"].WeatherText;
                let dayS = String(localStorage.getItem('myDays')).split(',')
                let monthS = String(localStorage.getItem('myMonths')).split(',')
                let UvText = response.data["0"].UVIndexText;
                let uvInd = response.data["0"].UVIndex;
                let visbUnt = response.data["0"].Visibility.Metric.Unit;
                let visbUntMi = response.data["0"].Visibility.Imperial.Unit;
                let visible = response.data["0"].Visibility.Metric.Value + visbUnt;
                let visibleMi = response.data["0"].Visibility.Imperial.Value + visbUntMi;
                let visibleFor = response.data["0"].Visibility.Metric.Value + visbUnt;
                let windDeg = response.data["0"].Wind.Direction.Degrees;
                let windWay = windDirect(windDeg);
                let windVal = response.data["0"].Wind.Speed.Metric.Value;
                let windFast = response.data["0"].Wind.Speed.Metric.Unit
                let windGust = response.data["0"].WindGust.Speed.Metric.Value + windFast;
                let windSpd = windVal + windFast
                let windChillT = response.data["0"].WindChillTemperature.Metric.Value;
                let windChillTF = response.data["0"].WindChillTemperature.Imperial.Value;
                let windChillFor = response.data["0"].WindChillTemperature.Metric.Value;
                let apparTemp = response.data["0"].ApparentTemperature.Metric.Value;
                let apparTempF = response.data["0"].ApparentTemperature.Imperial.Value;
                let apparTempFor = response.data["0"].ApparentTemperature.Metric.Value;
                let relHumid = response.data["0"].RelativeHumidity;
                let cloudCov = response.data["0"].CloudCover;
                let ceeling1 = response.data["0"].Ceiling.Metric.Value;
                let pointDew = response.data["0"].DewPoint.Metric.Value;

                function windDirect(degree) {
                    if (degree > 337.5) return 'Northerly';
                    if (degree > 292.5) return 'North Westerly';
                    if (degree > 247.5) return 'Westerly';
                    if (degree > 202.5) return 'South Westerly';
                    if (degree > 157.5) return 'Southerly';
                    if (degree > 122.5) return 'South Easterly';
                    if (degree > 67.5) return 'Easterly';
                    if (degree > 22.5) { return 'North Easterly'; }
                    return 'Northerly';
                }
                setInterval(() => {
                    this.setState({
                        currTime: new Date().toLocaleString(),
                        currTime1: String(new Date().toLocaleString()).slice(0, 1),
                        currDay: dayS[new Date().getDay()],
                        currMont: monthS[new Date().getMonth()]
                    })
                }, 1000)
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
                    ceeling1,
                    pointDew,
                    tempNowF,
                    tempNowFor,
                    tempNowAF,
                    tempNowAFor,
                    apparTempF,
                    apparTempFor,
                    windChillTF,
                    windChillFor,
                    visbUntMi,
                    visibleMi,
                    visibleFor,
                    pressTend,
                    UvText
                })
            })
            .then(() => {
                axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&q=Belgrade%20Serbia&details=true&offset=20")
                    .then(locInfo => {
                        console.log('info o location:', locInfo);
                        let cityCountN = locInfo.data["0"].AdministrativeArea.EnglishName + `, ` + locInfo.data["0"].Country.EnglishName;
                        let latLon = locInfo.data["0"].GeoPosition.Latitude + ` / ` + locInfo.data["0"].GeoPosition.Longitude;
                        let elevaT = locInfo.data["0"].GeoPosition.Elevation.Metric.Value + locInfo.data["0"].GeoPosition.Elevation.Metric.Unit;
                        let popuL = locInfo.data["0"].Details.Population;
                        let timeZn = locInfo.data["0"].TimeZone.Code;
                        let tmZonUrl = "https://www.timeanddate.com/time/zones/" + timeZn.toLowerCase();
                        this.setState({
                            cityCountN,
                            latLon,
                            popuL,
                            elevaT,
                            timeZn,
                            tmZonUrl
                        })
                    })
            })
    };

  render(){
    return (
      <div className = {['weather__container', 'container'].join(' ')} >
        <div id='titleCity'>{this.state.cityCountN}   <span id='latLonId'>{this.state.latLon} &nbsp; &#8739;  &nbsp;
         <span id='populId'>Pop: &nbsp;{this.state.popuL}</span> &nbsp;&nbsp;  &#8739;  El: &nbsp; {this.state.elevaT}  </span></div>
            <div id='huvTime'>{this.state.currDay},  {this.state.currMont} {this.state.currTime1} &nbsp;  Timezone:&nbsp; <a href={this.state.tmZonUrl}>{this.state.timeZn}</a> </div>
           <div  onMouseEnter={this.timeHover}  onMouseLeave={this.outHover}  id='time1'><span id='timeId1'>{this.state.currTime}</span> </div> 
          <div id='stajlClear'>{this.state.clearW}</div>
          <div id ='cloudCover'> Cloudiness:  <span className='allRed'>{this.state.cloudCov}&#37;</span>  </div>         
        <div id='pressTitl'>Pressure: &nbsp;<div id ='stajlPress'> &nbsp; {this.state.currPress}&nbsp; (<span className='inBrack'>{this.state.pressTend}</span>)</div></div>
      <div id='stajlTempNow' className='container'> {this.state.tempNow} <div id='celzId'> &#8451;</div>&nbsp;<div onClick={this.ChangeToF} id='fahrId'>&#8457;</div> 
        <div id='stajlTempNowA' className='container'><div className='spanId1'>(Feels like: &nbsp;</div> <span className='tempInner'>{this.state.tempNowA} <span className='all3'> &#8451;</span></span>)
               <div id ='windTemp'>(Wind chill: <span className='tempInner'>{this.state.windChillT}  <span className='all3'> &#8451;</span></span>)</div>
          <div id ='apparTempId'>(Apparent temp:&nbsp;<span className='tempInner'>{this.state.apparTemp}  <span className='all3'> &#8451;</span></span>)</div>
  </div>
     </div>
      <div id='uvindex'>UV index: <span id='redUv'>{this.state.uvInd}&nbsp;(<span className='inBrack'>{this.state.UvText}</span>)</span></div>
      <div id ='visibleId'>Visibility:&nbsp;<span id='redVisb'>{this.state.visible}&nbsp;&nbsp;&nbsp; <span id='miId' onClick={this.KmToMi}> <span id='mikm'>&nbsp;mi</span></span> </span></div>
      <div id ='windId'>Wind direction:&nbsp; <span id='redWindDir'>{this.state.windWay}</span></div>
      <div id ='windSpid'>Wind speed: <span className='dividerId'>&#8739;</span> gust: &nbsp; <span className='spidWind'>{this.state.windSpd}</span> <span className='dividerId'> &#8739;</span>
        <span className='spidWind'>{this.state.windGust}</span></div>         
      <div id='devPoint'>Dew Point: &nbsp;<span className='spidWind'>{this.state.pointDew} &#8451;</span></div>
      <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.state.relHumid}&#37;</span></div>
      <div id='cellId'>Ceeling: &nbsp;<span id='cellInner'>{this.state.ceeling1}m</span></div>
      </div>
    )      
  }
};

export default App











