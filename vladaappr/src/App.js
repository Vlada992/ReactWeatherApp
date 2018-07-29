
import $ from 'jquery'; 
import React from 'react';
import { Component } from 'react';
import './App.css';
import PanelHead from './PanelHead.js';
import PanelBody from './PanelBody.js'
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);   
        this.callonClick = this.callonClick.bind(this);
        this.togleR = false;
        this.cels  = '℃';
        this.fahr = '℉';
        this.mlbr = 'mb'
        this.inhg = 'inHg'
        this.km = 'km';
        this.mi = 'mi';
        this.fit = 'ft';
        this.m = 'm';
        this.clickArr = [];
        this.gradArr=[];
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
            visibleMi: '',
            visibleFor: '',
            timeZn: '',
            currTime1: '',
            tmZonUrl: '',
            pressTend: '',
            pointDewF:'',
            pointDewFor:'',
            ceelFit:'',
            ceelFitFor:'',
            pressUnit:'',
            pressInhg:'',
            pressInhgFor:'',
            departTemp:'',
            departTempF:'',
            departFor:'',
            maxTemp:'',
            minTemp:'',
            maxTempF:'',
            minTempF:'',
            maxTempFor:'',
            minTempFor:'',
            stringCels:'℃',
            stringCels2: '℃',
            stringCels3:'℃',
            inhmb:'mb',
            depCorF:'℃',
            fitorM:'m',
            celsfahr:'℃',
            weathIcn:'',
            stlState:'hideCls',
            airPln:'',
            onlyTime:'',
            ampmPart:'',
            imgMoon:'images/moon1.png'

        }
    };

    componentDidMount(){
        if(localStorage.getItem('gradovi') !== undefined){
            window.onload = (e)=> {
            this.callonClick(e)
        }
        }
    }
    

     callonClick(e){
     e.preventDefault();
     console.log($)
     this.clickArr.push('clicked');
     let holdGrad =  document.getElementById('siteName').value
     this.gradArr.push(holdGrad);
     let holdCountry = document.getElementById('siteName1').value
     localStorage.setItem('gradovi', holdGrad) 
     localStorage.setItem('drzava', holdCountry)
     localStorage.setItem('gradovi2', this.gradArr[this.gradArr.length -1]   )
     console.log('bulian:', Boolean(localStorage.getItem('gradovi2')),'value', localStorage.getItem('gradovi'))

    if(localStorage.getItem('gradovi') || localStorage.getItem('gradovi2')){
        localStorage.removeItem('gradovi1')
        localStorage.setItem('gradovi1', holdGrad)
    }else {
        localStorage.setItem('gradovi1','Belgrade')
        localStorage.setItem('gradovi', this.gradArr[this.gradArr.length -1])
    }

     axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&q="+String(localStorage.getItem('gradovi1')) +"%20"+String(localStorage.getItem('drzava'))+"&details=true&offset=7")
     .then(locInfo =>{ 
         console.log(locInfo)
        this.setState({stlState:'showCls'})
    
        var lat   = locInfo.data["0"].GeoPosition.Latitude;
        var long  = locInfo.data["0"].GeoPosition.Longitude;
        var targetDate = new Date();
        var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;
        var apikey = 'AIzaSyDQYoYpB-CyL4Leg5IWW1pT0afaVD9z4J0';
        var apicall = 'https://maps.googleapis.com/maps/api/timezone/json?location=' + lat + "," + long + '&timestamp=' + timestamp + '&key=' + apikey
        axios.get(apicall)
        .then((timeResp)=>{
        var offsets = timeResp.data.dstOffset * 1000 + timeResp.data.rawOffset * 1000
        var localdate = new Date(timestamp * 1000 + offsets)
        var refreshDate = new Date() 
        var millisecondselapsed = refreshDate - targetDate
        localdate.setMilliseconds(localdate.getMilliseconds()+ millisecondselapsed)
        var toLocStr = localdate.toLocaleString();
        //var myInt;
        setInterval(()=>{
       /*let myInt =*/localdate.setSeconds(localdate.getSeconds()+1)
                    this.setState({
                        currTime:localdate.toLocaleString().slice(0, 10),
                        onlyTime:localdate.toLocaleString().slice(10, localdate.toLocaleString().length - 2),
                        ampmPart:localdate.toLocaleString().slice(localdate.toLocaleString().length - 2),
                        currTime1:toLocStr.slice(11),
                        currDay: String(localdate).slice(0,4),
                        currMont: String(localStorage.getItem('myMonths')).split(',')[new Date().getMonth()]
                    })
                }, 1000) 
        })
                        let cityCountN = locInfo.data["0"].EnglishName + `, ` + locInfo.data["0"].Country.EnglishName;
                        let latLon = locInfo.data["0"].GeoPosition.Latitude + `/` + locInfo.data["0"].GeoPosition.Longitude;
                        let elevaT = locInfo.data["0"].GeoPosition.Elevation.Metric.Value + locInfo.data["0"].GeoPosition.Elevation.Metric.Unit;
                        let popuL = locInfo.data["0"].Details.Population;
                        let timeZn = locInfo.data["0"].TimeZone.Code;
                        let tmZonUrl = "https://www.timeanddate.com/time/zones/" + timeZn.toLowerCase();
                        let takeKey = locInfo.data["0"].Details.Key;
                        this.setState({
                            cityCountN,
                            latLon,
                            popuL,
                            elevaT,
                            timeZn,
                            tmZonUrl,
                            keyState:`${takeKey}`         
                        })
                  return takeKey                 
     })
     .then((pickKey)=>{
        axios.get("http://dataservice.accuweather.com/currentconditions/v1/" + pickKey + "?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&details=true")
     .then(response => {
                console.log("weather data:", response);
                 let v = response.data['0'];
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

                this.setState({  
                    tempNowA:v.RealFeelTemperature.Metric.Value, 
                    tempNow:v.Temperature.Metric.Value,
                    wetIcn:v.WeatherIcon,
                    currPress:v.Pressure.Metric.Value,
                    clearW:v.WeatherText,
                    visible:v.Visibility.Metric.Value + v.Visibility.Metric.Unit,
                    windWay:windDirect(v.Wind.Direction.Degrees),
                    windSpd:v.Wind.Speed.Metric.Value + v.Wind.Speed.Metric.Unit,
                    windChillT:v.WindChillTemperature.Metric.Value,
                    apparTemp:v.ApparentTemperature.Metric.Value,
                    relHumid:v.RelativeHumidity,
                    cloudCov:v.CloudCover,
                    windGust:v.WindGust.Speed.Metric.Value + v.Wind.Speed.Metric.Unit,
                    ceeling1:v.Ceiling.Metric.Value,
                    pointDew:v.DewPoint.Metric.Value,
                    pointDew1: v.DewPoint.Metric.Value,
                    tempNowF:v.Temperature.Imperial.Value,
                    tempNowFor:v.Temperature.Metric.Value,
                    tempNowAF:v.RealFeelTemperature.Imperial.Value,
                    tempNowAFor:v.RealFeelTemperature.Metric.Value,
                    apparTempF:v.ApparentTemperature.Imperial.Value,
                    apparTempFor:v.ApparentTemperature.Metric.Value,
                    windChillTF:v.WindChillTemperature.Imperial.Value,
                    windChillFor:v.WindChillTemperature.Metric.Value,
                    visibleMi:v.Visibility.Imperial.Value + v.Visibility.Imperial.Unit,
                    visibleFor:v.Visibility.Metric.Value + v.Visibility.Metric.Unit,
                    pressTend:v.PressureTendency.LocalizedText,
                    pointDewF:v.DewPoint.Imperial.Value,
                    pointDewFor:v.DewPoint.Metric.Value,
                    ceelFit:v.Ceiling.Imperial.Value,
                    ceelFitFor:v.Ceiling.Metric.Value,
                    pressUnit:v.Pressure.Metric.Unit,
                    pressInhg:v.Pressure.Imperial.Value,
                    pressInhgFor:v.Pressure.Metric.Value,
                    departTemp: v.Past24HourTemperatureDeparture.Metric.Value,
                    departTempF:v.Past24HourTemperatureDeparture.Imperial.Value,
                    departFor:v.Past24HourTemperatureDeparture.Metric.Value,
                    maxTemp:v.TemperatureSummary.Past24HourRange.Maximum.Metric.Value,
                    minTemp:v.TemperatureSummary.Past24HourRange.Minimum.Metric.Value,
                    maxTempF: v.TemperatureSummary.Past24HourRange.Maximum.Imperial.Value,
                    minTempF:v.TemperatureSummary.Past24HourRange.Minimum.Imperial.Value,
                    maxTempFor:v.TemperatureSummary.Past24HourRange.Maximum.Metric.Value,
                    minTempFor:v.TemperatureSummary.Past24HourRange.Minimum.Metric.Value,
                    weathIcn: String(v.WeatherIcon).length === 1 ? '0' + v.WeatherIcon : v.WeatherIcon

                }) 


     })
        return pickKey;
    })
    .then((passKeyHere)=>{
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + passKeyHere + "?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&details=true&metric=true")
        .then(resp5Days => {
        console.log('5days res:', resp5Days);
        let allD  =  resp5Days.data.DailyForecasts[0];
        let allData = resp5Days.data.DailyForecasts[0].AirAndPollen
        this.setState({
         airPlnN : allData[0].Name,
         airPlnVT: allData[0].Value,
         airPlnC: allData[0].Category,
         airPlnT: allData[0].Type,
         grassPlnN: allData[1].Name,
         grassPlnV: allData[1].Value,
         grassPlnC:allData[1].Category,
         moldN:allData[2].Name,
         moldV:allData[2].Value,
         moldC:allData[2].Category,
         weedN:allData[3].Name,
         weedV:allData[3].Value,
         weedC:allData[3].Category,
         treeN:allData[4].Name,
         treeV:allData[4].Value,
         treeC:allData[4].Category,
         uvN:allData[5].Name,
         uvV:allData[5].Value,
         uvC:allData[5].Category,
         percitipH: allD.HoursOfSun + `h` + `/` +  allD.Day.HoursOfRain + `h` + `/` + String(allD.Day.HoursOfIce) + `h` + `/` + String(allD.Day.HoursOfSnow) + `h`  ,
         percitProb: allD.Day.RainProbability + '%' + ' / ' + String(allD.Day.SnowProbability) + '%' + ' / ' + String(allD.Day.IceProbability) + '%',
         percitVal:  allD.Day.Rain.Value +  allD.Day.Rain.Unit + ' / ' + allD.Day.Snow.Value +  allD.Day.Snow.Unit + ' / ' + allD.Day.Ice.Value + allD.Day.Ice.Unit,
         thunderProb: allD.Day.ThunderstormProbability + "%",
         phraseW: allD.Day.ShortPhrase,
         phraseTitl:allD.Day.LongPhrase,
         weathIcn1: String( allD.Day.Icon).length === 1 ? '0' +  allD.Day.Icon :  allD.Day.Icon,
         sunRise:  String(new Date(allD.Sun.Rise)),
         sunSet: String(new Date(allD.Sun.Set)),
         moonRise:  String(new Date(allD.Moon.Rise)),
         moonSet: String(new Date(allD.Moon.Set)),
         moonAge: allD.Moon.Age,
         moonPhase:allD.Moon.Phase,
         regDate: 'Weather info for daylight for: ' + allD.Date.apparTempF,
         nightCloud: allD.Night.CloudCover + "%",  //NIGHT START
         nightPerc:  allD.Night.HoursOfRain + "h" + '/' + String(allD.Night.HoursOfIce) + "h" +'/' + String(allD.Night.HoursOfSnow) + "h"  ,
         nightProb: allD.Night.RainProbability + '%' + ' / ' + String(allD.Night.SnowProbability) + '%' + ' / ' + String(allD.Night.IceProbability) + '%',
         nightVal:  allD.Night.Rain.Value +  allD.Night.Rain.Unit + ' / ' + allD.Night.Snow.Value +  allD.Night.Snow.Unit + ' / ' + allD.Night.Ice.Value + allD.Night.Ice.Unit,
         nightTund: allD.Night.ThunderstormProbability + "%",
         nightPhrase: allD.Night.ShortPhrase,
         nightIcn1: String( allD.Night.Icon).length === 1 ? '0' +  allD.Night.Icon :  allD.Night.Icon,
         nightDate: 'Weather info for night for: ' + new Date(this.sunSet),   //NIGHT END


        })
        
    })   //.data.DailyForecasts["0"].Day.Icon
    })//then
    };
    render(){
    return(
      <div className = {['weather__container', 'container'].join(' ')}>
        <PanelBody dataB={this.state} mainF={this.callonClick}/>
        <PanelHead data ={this.state} funccf ={this.ChangeToF}/>
      </div>
    )      
  }
};
export default App;


//API keys
//HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG
//u77BxK7btrmFq5ipbObhc868Ly8wkySl