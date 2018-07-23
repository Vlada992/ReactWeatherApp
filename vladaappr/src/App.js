
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
            visibleMi: '',
            visibleFor: '',
            timeZn: '',
            currTime1: '',
            tmZonUrl: '',
            pressTend: '',
            uvText: '',
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
            weathIcn:''
        }
    };


    /*
     loadF(){
        localStorage.setItem('tempNowA', JSON.stringify(this.state.tempNowA) )
        let takeA = localStorage.getItem('tempNowA');
        this.setState({tempNowA: JSON.parse(takeA)})
        }*/

     callonClick(e){
     e.preventDefault();
     this.clickArr.push('clicked');
     let holdGrad =  document.getElementById('siteName').value
     let holdCountry = document.getElementById('siteName1').value
     localStorage.setItem('gradovi', holdGrad)
     localStorage.setItem('drzava', holdCountry)
     axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG&q="+String(localStorage.getItem('gradovi'))+"%20"+String(localStorage.getItem('drzava'))+"&details=true&offset=7")
     .then(locInfo =>{
        var lat   = locInfo.data["0"].GeoPosition.Latitude;
        var long  = locInfo.data["0"].GeoPosition.Longitude;
        var targetDate = new Date()
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
        var myInt;
        setInterval(()=>{
        myInt =  localdate.setSeconds(localdate.getSeconds()+1)
                    this.setState({
                        currTime:localdate.toLocaleString(),
                        currTime1:toLocStr.slice(11),
                        currDay: String(localdate).slice(0,4),
                        currMont: String(localStorage.getItem('myMonths')).split(',')[new Date().getMonth()]
                    })
                }, 1000)
            if(this.clickArr.length > 1){
            }
        })
                        let cityCountN = locInfo.data["0"].EnglishName + `, ` + locInfo.data["0"].Country.EnglishName;
                        let latLon = locInfo.data["0"].GeoPosition.Latitude + ` / ` + locInfo.data["0"].GeoPosition.Longitude;
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
        axios.get("http://dataservice.accuweather.com/currentconditions/v1/" + pickKey + "?apikey=HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG&details=true")
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
                    uvInd:v.UVIndex,
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
                    UvText: v.UVIndexText,
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
                    weathIcn: String(v.WeatherIcon).length == 1 ? '0' + v.WeatherIcon : v.WeatherIcon
                }) 


     })
        return pickKey;
    })
    .then((passKeyHere)=>{
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + passKeyHere + "?apikey=HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG&details=true&metric=true")
        .then(response5Days => {
        console.log('5days res:', response5Days);
    }) 
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