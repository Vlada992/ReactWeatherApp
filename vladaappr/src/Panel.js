
import React from 'react';
import { Component } from 'react';
import './App.css';

class Panel extends Component{
  render(){
    return (
      <div id='headDiv'>
        <div><img id='weatherImg' src={`http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${this.props.data.weathIcn}-s.png`}/></div>

        <div id='titleCity'>{this.props.data.cityCountN}<span className='populId'>{this.props.data.latLon}&nbsp;&#8739;&nbsp;<span className='populId'>Pop:&nbsp;{this.props.data.popuL}</span> &nbsp;&nbsp;&#8739;  El:&nbsp;{this.props.data.elevaT}</span></div>
        <div id='time1'><span id='timeId1'>{this.props.data.currTime}</span></div> 
        <div id='stajlTempNow' className='container'>{this.props.data.tempNow} <div onClick={(e) => this.props.funccf()} id='celzId'>{this.props.data.stringCels}</div>&nbsp;
        <div id='stajlTempNowA' className='container'><div className='spanId1'>(Feels like: &nbsp;</div><span className='tempInner'>{this.props.data.tempNowA} <span>{this.props.data.stringCels}</span></span>)
        <div id ='windTemp'>(Wind chill: <span className='tempInner'>{this.props.data.windChillT}<span>{this.props.data.stringCels}</span></span>)</div>
        <div id ='apparTempId'>(Apparent:&nbsp;<span className='tempInner'>{this.props.data.apparTemp}<span>{this.props.data.stringCels}</span></span>)</div>
      </div>
      </div>
      <div id='minmaxCont'>
       <div className='minmax'>Max  (past 24h):&nbsp;<span className ='maxMinT'>{this.props.data.maxTemp} <span onClick={(e) => this.props.funcmax() } id='maxminToC'>{this.props.data.stringCels2}</span></span></div>
       <div className='minmax'>Min  &nbsp;(past 24h):&nbsp;<span className ='maxMinT'>{this.props.data.minTemp} <span onClick={(e) => this.props.funcmin() } id='minmaxToC'>{this.props.data.stringCels3}</span></span></div>
      </div>


      </div>
    )
  }
};
export default Panel;
