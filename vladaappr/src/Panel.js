
import React from 'react';
import { Component } from 'react';
import './App.css';




class Panel extends Component{
  render(){
    return (
      <div>
        {/*
      <form id='hitForm' onSubmit={this.props.data1()}>
        <input type="text" className='form-control' id='siteName' placeholder='Type city...' ref='usernameItem'/> 
         <input type="text" className='form-control' id='siteName1' placeholder='Type country...' ref='usernameItem1'/> 
         <input type='submit' className='form-control' id='submitName'/>
        </form>*/}
          
        <div id='titleCity'> {this.props.data.cityCountN}  <span className='populId'>{this.props.data.latLon} &nbsp; &#8739;  &nbsp;<span className='populId'>Pop: &nbsp;{this.props.data.popuL}</span> &nbsp;&nbsp;  &#8739;  El: &nbsp; {this.props.data.elevaT}  </span></div>

            <div id='huvTime'>{this.props.data.currDay},  {this.props.data.currMont} {this.props.data.currTime1} &nbsp;  Timezone:&nbsp; <a href={this.props.data.tmZonUrl} target='_blank'>{this.props.data.timeZn}</a> </div>
           <div  onMouseEnter={this.timeHover}  onMouseLeave={this.outHover}  id='time1'><span id='timeId1'>{this.props.data.currTime}</span> </div> 
        <div id='stajlTempNow' className='container'> {this.props.data.tempNow} <div id='celzId'> &#8451;</div>&nbsp;<div onClick={this.ChangeToF} id='fahrId'>&#8457;</div> 
        <div id='stajlTempNowA' className='container'><div className='spanId1'>(Feels like: &nbsp;</div> <span className='tempInner'>{this.props.data.tempNowA} <span className='all3'> &#8451;</span></span>)
               <div id ='windTemp'>(Wind chill: <span className='tempInner'>{this.props.data.windChillT}  <span className='all3'> &#8451;</span></span>)</div>
          <div id ='apparTempId'>(Apparent:&nbsp;<span className='tempInner'>{this.props.data.apparTemp}  <span className='all3'> &#8451;</span></span>)</div>
      </div>
  </div>
      <div id='minmaxCont'>
       <div className='minmax'>Max  (past 24h): &nbsp;<span className ='maxMinT'>{this.props.data.maxTemp} <span id='maxminToC'>&#8451;</span> </span>&nbsp;  <span id='maxMinToF' onClick={this.changeMaxToF2}  className='maxminClick'>&#8457;</span></div>
       <div className='minmax'>Min  &nbsp;(past 24h): &nbsp;<span className ='maxMinT'>{this.props.data.minTemp} <span id='minmaxToC'>&#8451;</span> </span>&nbsp;  <span id='minMaxToF' onClick={this.changeMinToF2}  className='maxminClick'>&#8457;</span></div>
      </div>
      
      </div>
    )
  }
};
export default Panel;
