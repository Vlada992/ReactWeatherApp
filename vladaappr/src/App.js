
import $ from 'jquery'; 
import React from 'react';
import { Component } from 'react';
import './App.css';
import Panel from './Panel.js';
import PanelBody from './PanelBody.js'
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);   
        this.ChangeToF = this.ChangeToF.bind(this);
        this.ChangeToFT = this.ChangeToFT.bind(this);
        this.ChangeToInhg = this.ChangeToInhg.bind(this);
        this.KmToMi = this.KmToMi.bind(this);
        this.changeToF1 = this.changeToF1.bind(this);
        this.changeMaxToF2 = this.changeMaxToF2.bind(this);
        this.changeMinToF2 = this.changeMinToF2.bind(this);
        this.departF = this.departF.bind(this);
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
    ChangeToF(event){
        let tempNow = { ...this.state.tempNow, hit1: this.state.tempNowF, hit11: this.state.tempNowFor };
        let apparTemp = { ...this.state.apparTemp, hit2: this.state.apparTempF, hit22: this.state.apparTempFor };
        let tempNowA = { ...this.state.tempNowA, hit3: this.state.tempNowAF, hit33: this.state.tempNowAFor };
        let windChillT = { ...this.state.windChillT, hit4: this.state.windChillTF, hit44: this.state.windChillFor };
        let stringCels = {...this.state.stringCels, hitF: this.fahr, hitF1: this.cels};
        if (this.togleR === false){
            this.setState({ tempNow: tempNow.hit1 })
            this.setState({ apparTemp: apparTemp.hit2 })
            this.setState({ tempNowA: tempNowA.hit3 });
            this.setState({ windChillT: windChillT.hit4 })
            this.setState({stringCels: stringCels.hitF});
            this.togleR = true 
        } else {
            this.setState({ tempNow: tempNow.hit11})
            this.setState({ tempNowA: tempNowA.hit33 })
            this.setState({ apparTemp: apparTemp.hit22 })
            this.setState({ windChillT: windChillT.hit44 })
            this.setState({stringCels: stringCels.hitF1});
            this.togleR = false;
        }
    }

    changeToF1(event){
       let pointDew = {...this.state.pointDew, toF:this.state.pointDewF, toFor:this.state.pointDewFor}
       let depCorF = {...this.state.depCorF, hit: this.fahr, hit1: this.cels}

        if (this.togleR === false) {
            this.setState({pointDew:pointDew.toF})
            this.setState({depCorF: depCorF.hit})
            this.togleR = true

        } else {
            this.setState({pointDew:pointDew.toFor})
            this.setState({depCorF: depCorF.hit1})
            this.togleR = false;
        }
    }

     changeMaxToF2(event){
       let maxTemp = {...this.state.maxTemp, toF:this.state.maxTempF, toFor:this.state.maxTempFor}
       let stringCels2 = {...this.state.stringCels1, hitF: this.fahr, hitF1: this.cels};
        if (this.togleR === false) {
            this.setState({maxTemp:maxTemp.toF})
            this.setState({stringCels2: stringCels2.hitF});
            this.togleR = true
        } else {
            this.setState({maxTemp:maxTemp.toFor})
            this.setState({stringCels2: stringCels2.hitF1}) 
            this.togleR = false;
        }
    }
    changeMinToF2(event){
       let minTemp = {...this.state.minTemp, toF:this.state.minTempF, toFor:this.state.minTempFor}
       let stringCels3 = {...this.state.stringCels2, hitF: this.fahr, hitF1: this.cels};
        if (this.togleR === false){
            this.setState({minTemp:minTemp.toF})
            this.setState({stringCels3: stringCels3.hitF});
            this.togleR = true
        } else {
            this.setState({minTemp:minTemp.toFor})
            this.setState({stringCels3: stringCels3.hitF});
            this.togleR = false;
        }
    }

    ChangeToFT(event){
       let ceeling1 = {...this.state.ceeling1, toFT:this.state.ceelFit, toForFT:this.state.ceelFitFor}
       let fitorM = {...this.state.fitorM, hit: this.fit, hit1: this.m}
        if (this.togleR === false){
            this.setState({ceeling1:ceeling1.toFT})
            this.setState({fitorM: fitorM.hit})
            this.togleR = true
        }else {
            this.setState({ceeling1:ceeling1.toForFT})
            this.setState({fitorM: fitorM.hit1})
            this.togleR = false;
        }
    }

    ChangeToInhg(event){
       let currPress = {...this.state.currPress, toIng:this.state.pressInhg, toIngFor:this.state.pressInhgFor}
       let inhmb  = {...this.state.inhnm, hit:this.mlbr, hit1: this.inhg}
        if (this.togleR === false){
            this.setState({currPress:currPress.toIng})
            this.setState({inhmb:inhmb.hit1})
            this.togleR = true
        }else {
            this.setState({currPress:currPress.toIngFor})
            this.togleR = false;
            this.setState({inhmb:inhmb.hit})
        }
    }
    KmToMi(event){
        let visible = { ...this.state.visible, to1: this.state.visibleMi, to2: this.state.visibleFor }
        let kmmi =  {...this.state.kmmi, hit1:this.mi, hit2:this.km}
        if(this.togleR === false){
            this.setState({visible: visible.to1})
            this.togleR = true
            this.setState({kmmi:kmmi.hit1})
        } else {
            this.setState({ visible: visible.to2 })
            this.togleR = false;
            this.setState({kmmi:kmmi.hit2})
        }
    }
    departF(event){
       let departTemp = {...this.state.departTemp, toDepF:this.state.departTempF, toDepFor:this.state.departFor};
       let celsfahr ={...this.state.celsfahr, hit:this.fahr, hit1: this.cels};
        if (this.togleR === false){
            this.setState({departTemp: departTemp.toDepF})
            this.setState({celsfahr:celsfahr.hit})
            this.togleR = true
        } else {
            this.setState({departTemp:departTemp.toDepFor})
            this.setState({celsfahr:celsfahr.hit1})
            this.togleR = false;
        }
    }

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
        var millisecondselapsed = refreshDate - targetDate // get amount of time elapsed between targetDate and now
        localdate.setMilliseconds(localdate.getMilliseconds()+ millisecondselapsed)
        var toLocStr = localdate.toLocaleString();
        var myInt = null;
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
                        })
                  return takeKey                 
     })
     .then((pickKey)=>{
        axios.get("http://dataservice.accuweather.com/currentconditions/v1/" + pickKey + "?apikey=HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG&details=true")
     .then(response => {
                console.log("weather data:", response);
                 let v = response.data['0'];
                 let  wicn = v.WeatherIcon.length == 1 ? 0 + v.WeatherIcon : v.WeatherIcon
                 console.log('st  ja vreme icn:', wicn, String(wicn).length)
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
        <PanelBody dataB={this.state} mainF={this.callonClick} Fing={this.ChangeToInhg} Fmikm={this.KmToMi} FdewP={this.changeToF1} Fceel={this.ChangeToFT} Fdepar={this.departF}/>
        <Panel data ={this.state} funccf ={this.ChangeToF} funcmax ={this.changeMaxToF2} funcmin={this.changeMinToF2}/>
      </div>
    )      
  }
};
export default App;


//API ketys
//HfaXex7wS5DWxahQDP2lr7Ees4DOTXiG
//u77BxK7btrmFq5ipbObhc868Ly8wkySl