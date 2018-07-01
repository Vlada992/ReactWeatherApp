
import $ from 'jquery'; 
import React from 'react';
import { Component } from 'react';
import './App.css';
import Panel from './Panel.js';
/*import PanelBody from './PanelBody.js'*/
import axios from 'axios';


//
class App extends Component {
    constructor(props){
        super(props);   
        this.ChangeToF = this.ChangeToF.bind(this);
        this.ChangeToFT = this.ChangeToFT.bind(this);
        this.ChangeToInhg = this.ChangeToInhg.bind(this);
        this.KmToMi = this.KmToMi.bind(this);
        this.timeHover = this.timeHover.bind(this);
        this.outHover = this.outHover.bind(this);
        this.changeToF1 = this.changeToF1.bind(this);
        this.changeMaxToF2 = this.changeMaxToF2.bind(this);
        this.changeMinToF2 = this.changeMinToF2.bind(this);
        this.DepartF = this.departF.bind(this);
        this.timeHoverInn  = this.timeHoverInn.bind(this);
        this.timeHoverOut = this.timeHoverOut.bind(this);
        this.callonClick = this.callonClick.bind(this);
        this.togleR = false;
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
            minTempFor:'' 
        }
    };
    ChangeToF(event){
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
    changeToF1(event){
       let pointDew = {...this.state.pointDew, toF:this.state.pointDewF, toFor:this.state.pointDewFor}
        if (this.togleR === false) {
            this.setState({pointDew:pointDew.toF})
            this.togleR = true
            document.getElementById('devTogle').innerHTML = '&#8451;'
            document.getElementById('CtoF').innerHTML = '&#8457;'
        } else {
            this.setState({pointDew:pointDew.toFor})
            this.togleR = false;
            document.getElementById('devTogle').innerHTML = '&#8457;'
            document.getElementById('CtoF').innerHTML = '&#8451;'
        }
    }
     changeMaxToF2(event){
       let maxTemp = {...this.state.maxTemp, toF:this.state.maxTempF, toFor:this.state.maxTempFor}
        if (this.togleR === false) {
            this.setState({maxTemp:maxTemp.toF})
            this.togleR = true
            document.getElementById('maxMinToF').innerHTML = '&#8451;'
            document.getElementById('maxminToC').innerHTML = '&#8457;'
        } else {
            this.setState({maxTemp:maxTemp.toFor})
            this.togleR = false;
            document.getElementById('maxMinToF').innerHTML = '&#8457;'
            document.getElementById('maxminToC').innerHTML = '&#8451;'
        }
    }
    changeMinToF2(event){
       let minTemp = {...this.state.minTemp, toF:this.state.minTempF, toFor:this.state.minTempFor}
        if (this.togleR === false) {
            this.setState({minTemp:minTemp.toF})
            this.togleR = true
            document.getElementById('minMaxToF').innerHTML = '&#8451;'
            document.getElementById('minmaxToC').innerHTML = '&#8457;'
        } else {
            this.setState({minTemp:minTemp.toFor})
            this.togleR = false;
            document.getElementById('minMaxToF').innerHTML = '&#8457;'
            document.getElementById('minmaxToC').innerHTML = '&#8451;'
        }
    }
    ChangeToFT(event){
       let ceeling1 = {...this.state.ceeling1, toFT:this.state.ceelFit, toForFT:this.state.ceelFitFor}
        if (this.togleR === false) {
            this.setState({ceeling1:ceeling1.toFT})
            this.togleR = true
            document.getElementById('cellInner').innerHTML = 'ft'
            document.getElementById('cilFitId1').innerHTML = 'm'
        }else {
            this.setState({ceeling1:ceeling1.toForFT})
            this.togleR = false;
            document.getElementById('cellInner').innerHTML = 'm'
            document.getElementById('cilFitId1').innerHTML = 'ft'
        }
    }

    ChangeToInhg(event){
       let currPress = {...this.state.currPress, toIng:this.state.pressInhg, toIngFor:this.state.pressInhgFor}
        if (this.togleR === false) {
            this.setState({currPress:currPress.toIng})
            this.togleR = true
            document.getElementById('toInhg').innerHTML = 'mb'
            document.getElementById('unitToI').innerHTML = 'inHg'
        }else {
            this.setState({currPress:currPress.toIngFor})
            this.togleR = false;
            document.getElementById('toInhg').innerHTML = 'inHg'
            document.getElementById('unitToI').innerHTML = 'mb'
        }
    }
    KmToMi(event){
        let visible = { ...this.state.visible, to1: this.state.visibleMi, to2: this.state.visibleFor }
        if(this.togleR === false) {
            this.setState({visible: visible.to1})
            this.togleR = true
                document.getElementById('mikm').innerHTML = 'km'
        } else {
            this.setState({ visible: visible.to2 })
            this.togleR = false;
            document.getElementById('mikm').innerHTML = 'mi'
        }
    }
    departF(event){
       let departTemp = {...this.state.departTemp, toDepF:this.state.departTempF, toDepFor:this.state.departFor}
        if (this.togleR === false) {
            this.setState({departTemp:departTemp.toDepF})
            this.togleR = true
            document.getElementById('deparToF').innerHTML = '&#8451;'
            document.getElementById('departCf').innerHTML = '&#8457;'
        } else {
            this.setState({departTemp:departTemp.toDepFor})
            this.togleR = false;
            document.getElementById('deparToF').innerHTML = '&#8457;'
            document.getElementById('departCf').innerHTML = '&#8451;'
        }
    }
    timeHover(){
        document.getElementById('huvTime').style.opacity = '0.9';
        document.getElementById('huvTime').style.visibility  = 'visible'
        $('#huvTime').on('mouseover',()=> {
        }); //krckanje.
    }
    outHover(){
        document.getElementById('huvTime').style.opacity = '0';
        document.getElementById('huvTime').style.visibility  = 'hidden';
    }
    timeHoverInn(){
         document.getElementById('huvTime').style.visibility  = 'visible'
    }
    timeHoverOut(){
        document.getElementById('huvTime').style.visibility  = 'hidden'
    }

    

     callonClick(e){
     e.preventDefault()
     this.clickArr.push('clicked');
     let holdGrad =  document.getElementById('siteName').value
     let holdCountry = document.getElementById('siteName1').value
     localStorage.setItem('gradovi', holdGrad)
     localStorage.setItem('drzava', holdCountry)
     axios.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&q="+String(localStorage.getItem('gradovi'))+"%20"+String(localStorage.getItem('drzava'))+"&details=true&offset=7")
     .then(locInfo =>{
        console.log('info o location:', locInfo); 
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
            console.log('da vidim e', this.clickArr)
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
                /*
                setInterval(() => {
                    this.setState({
                        currTime: new Date().toLocaleString(),
                        currTime1: String(new Date().toLocaleString()).slice(0, 1),
                        currDay: String(localStorage.getItem('myDays')).split(',')[new Date().getDay()],
                        currMont: String(localStorage.getItem('myMonths')).split(',')[new Date().getMonth()]
                    })
                }, 1000)*/

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
                    departTemp:v.Past24HourTemperatureDeparture.Metric.Value,
                    departTempF:v.Past24HourTemperatureDeparture.Imperial.Value,
                    departFor:v.Past24HourTemperatureDeparture.Metric.Value,
                    maxTemp:v.TemperatureSummary.Past24HourRange.Maximum.Metric.Value,
                    minTemp:v.TemperatureSummary.Past24HourRange.Minimum.Metric.Value,
                    maxTempF: v.TemperatureSummary.Past24HourRange.Maximum.Imperial.Value,
                    minTempF:v.TemperatureSummary.Past24HourRange.Minimum.Imperial.Value,
                    maxTempFor:v.TemperatureSummary.Past24HourRange.Maximum.Metric.Value,
                    minTempFor:v.TemperatureSummary.Past24HourRange.Minimum.Metric.Value,
                }) //

     })
        return pickKey;
    })
    .then((passKeyHere)=>{
        axios.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/" + passKeyHere + "?apikey=u77BxK7btrmFq5ipbObhc868Ly8wkySl&details=true&metric=true")
        .then(response5Days => {
        console.log('5days res:', response5Days);
    }) 
    })//then

    };


    /*componentWillUnmount: function(){
    clearInterval(this.state.intervalId);
  },*/


  render(){
    return (
      <div className = {['weather__container', 'container'].join(' ')}>

        
            


      <form id='hitForm' onSubmit={this.callonClick}>
        <input type="text" className='form-control' id='siteName' placeholder='Type city...' ref='usernameItem'/> 
         <input type="text" className='form-control' id='siteName1' placeholder='Type country...' ref='usernameItem1'/> 
         <input type='submit' className='form-control' id='submitName'/>
        </form>

        <div id='stajlClear'>{this.state.clearW}</div>
      <div id ='cloudCover'> Cloudiness:  <span className='allRed'>{this.state.cloudCov}&#37;</span>  </div>         
      <div id='pressTitl'>Pressure: &nbsp;<div id ='stajlPress'> &nbsp; {this.state.currPress}&nbsp; <span id='unitToI'>{this.state.pressUnit}</span> &nbsp; (<span className='inBrack'>{this.state.pressTend}</span>) &nbsp; &nbsp; 
      <span   onClick={this.ChangeToInhg} id='toInhg'>inHg</span>  </div></div>
      <div id='uvindex'>UV index: <span id='redUv'>{this.state.uvInd}&nbsp;(<span className='inBrack'>{this.state.UvText}</span>)</span></div>
      <div id ='visibleId'>Visibility:&nbsp;<span id='redVisb'>{this.state.visible}&nbsp;&nbsp;&nbsp; <span id='miId' onClick={this.KmToMi}> <span id='mikm'>&nbsp;mi</span></span> </span></div>
      <div id ='windId'>Wind direction:&nbsp; <span id='redWindDir'>{this.state.windWay}</span></div>
      <div id ='windSpid'>Wind speed: <span className='dividerId'>&#8739;</span> gust: &nbsp; <span className='spidWind'>{this.state.windSpd}</span> <span className='dividerId'> &#8739;</span>
       &nbsp; <span className='spidWind'>{this.state.windGust}</span></div>         
      <div id='devPoint'>Dew Point: &nbsp;<span className='spidWind1'>{this.state.pointDew} <span id='CtoF'>&#8451;</span></span>&nbsp;&nbsp;  <span onClick={this.changeToF1} id='devId1'> <span id='devTogle'>&#8457;</span></span> </div>
      <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.state.relHumid}&#37;</span></div>
      <div id='cellId'>Ceeling: &nbsp;<span id='cellInner1'>{this.state.ceeling1} <span id='cellInner'>m</span> </span> &nbsp;&nbsp; <span onClick={this.ChangeToFT}  id='cilFitId1'> <span id = 'cilFitId2'>ft </span> </span></div>
      <div id='departId'>24h temp departure:&nbsp; <span id='deppTemp'>{this.state.departTemp} <span id='departCf'>&#8451;</span> </span>&nbsp;   <span onClick={this.DepartF} id='deparToF'> &#8457;</span></div>    
      
    


        <Panel data ={this.state}/>
        {/*
        <div id='titleCity'> {this.state.cityCountN}  <span className='populId'>{this.state.latLon} &nbsp; &#8739;  &nbsp;
        
         <span className='populId'>Pop: &nbsp;{this.state.popuL}</span> &nbsp;&nbsp;  &#8739;  El: &nbsp; {this.state.elevaT}  </span></div>
            <div id='huvTime'>{this.state.currDay},  {this.state.currMont} {this.state.currTime1} &nbsp;  Timezone:&nbsp; <a href={this.state.tmZonUrl} target='_blank'>{this.state.timeZn}</a> </div>
           <div  onMouseEnter={this.timeHover}  onMouseLeave={this.outHover}  id='time1'><span id='timeId1'>{this.state.currTime}</span> </div> 
        <div id='stajlTempNow' className='container'> {this.state.tempNow} <div id='celzId'> &#8451;</div>&nbsp;<div onClick={this.ChangeToF} id='fahrId'>&#8457;</div> 
        <div id='stajlTempNowA' className='container'><div className='spanId1'>(Feels like: &nbsp;</div> <span className='tempInner'>{this.state.tempNowA} <span className='all3'> &#8451;</span></span>)
               <div id ='windTemp'>(Wind chill: <span className='tempInner'>{this.state.windChillT}  <span className='all3'> &#8451;</span></span>)</div>
          <div id ='apparTempId'>(Apparent:&nbsp;<span className='tempInner'>{this.state.apparTemp}  <span className='all3'> &#8451;</span></span>)</div>
      </div>
  </div>
      <div id='minmaxCont'>
       <div className='minmax'>Max  (past 24h): &nbsp;<span className ='maxMinT'>{this.state.maxTemp} <span id='maxminToC'>&#8451;</span> </span>&nbsp;  <span id='maxMinToF' onClick={this.changeMaxToF2}  className='maxminClick'>&#8457;</span></div>
       <div className='minmax'>Min  &nbsp;(past 24h): &nbsp;<span className ='maxMinT'>{this.state.minTemp} <span id='minmaxToC'>&#8451;</span> </span>&nbsp;  <span id='minMaxToF' onClick={this.changeMinToF2}  className='maxminClick'>&#8457;</span></div>
      </div>
    */}
   
      

      {/*<div id='stajlClear'>{this.state.clearW}</div>
      <div id ='cloudCover'> Cloudiness:  <span className='allRed'>{this.state.cloudCov}&#37;</span>  </div>         
      <div id='pressTitl'>Pressure: &nbsp;<div id ='stajlPress'> &nbsp; {this.state.currPress}&nbsp; <span id='unitToI'>{this.state.pressUnit}</span> &nbsp; (<span className='inBrack'>{this.state.pressTend}</span>) &nbsp; &nbsp; 
      <span   onClick={this.ChangeToInhg} id='toInhg'>inHg</span>  </div></div>
      <div id='uvindex'>UV index: <span id='redUv'>{this.state.uvInd}&nbsp;(<span className='inBrack'>{this.state.UvText}</span>)</span></div>
      <div id ='visibleId'>Visibility:&nbsp;<span id='redVisb'>{this.state.visible}&nbsp;&nbsp;&nbsp; <span id='miId' onClick={this.KmToMi}> <span id='mikm'>&nbsp;mi</span></span> </span></div>
      <div id ='windId'>Wind direction:&nbsp; <span id='redWindDir'>{this.state.windWay}</span></div>
      <div id ='windSpid'>Wind speed: <span className='dividerId'>&#8739;</span> gust: &nbsp; <span className='spidWind'>{this.state.windSpd}</span> <span className='dividerId'> &#8739;</span>
       &nbsp; <span className='spidWind'>{this.state.windGust}</span></div>         
      <div id='devPoint'>Dew Point: &nbsp;<span className='spidWind1'>{this.state.pointDew} <span id='CtoF'>&#8451;</span></span>&nbsp;&nbsp;  <span onClick={this.changeToF1} id='devId1'> <span id='devTogle'>&#8457;</span></span> </div>
      <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.state.relHumid}&#37;</span></div>
      <div id='cellId'>Ceeling: &nbsp;<span id='cellInner1'>{this.state.ceeling1} <span id='cellInner'>m</span> </span> &nbsp;&nbsp; <span onClick={this.ChangeToFT}  id='cilFitId1'> <span id = 'cilFitId2'>ft </span> </span></div>
      <div id='departId'>24h temp departure:&nbsp; <span id='deppTemp'>{this.state.departTemp} <span id='departCf'>&#8451;</span> </span>&nbsp;   <span onClick={this.DepartF} id='deparToF'> &#8457;</span></div>    
        */}
    
      </div>
    )      
  }

};
export default App;
















