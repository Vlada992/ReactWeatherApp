import React from 'react';
import { Component } from 'react';
import './App.css';




class PanelBody extends Component {
  render(){
    return (
      
        <div>
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


        </div>




    )
  }
};
export default PanelBody;
