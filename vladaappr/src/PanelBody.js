import React from 'react';
import { Component } from 'react';
import './App.css';

class PanelBody extends Component {
  render(){
    return(
        <div id='bodyDiv'>
        <form id='hitForm' onSubmit={(e)=> this.props.mainF(e)}>
        <input type="text" className='form-control' id='siteName' placeholder='Type city...'/> 
         <input type="text" className='form-control' id='siteName1' placeholder='Type country...'/> 
         <input type='submit' className='form-control' id='submitName'/>
        </form>
        <div id='stajlClear'>{this.props.dataB.clearW}</div>
        <div id ='cloudCover'>Cloudiness:<span className='allRed'>&nbsp; {this.props.dataB.cloudCov}&#37;</span></div>         
        <div id='pressTitl'>Pressure:&nbsp;<div onClick={()=> this.props.Fing()} id ='stajlPress'> &nbsp;{this.props.dataB.currPress}&nbsp;<span id='unitToI'>{this.props.dataB.inhmb}</span> &nbsp; (<span className='inBrack'>{this.props.dataB.pressTend}</span>)</div></div>
        <div id='uvindex'>UV index: <span id='redUv'>{this.props.dataB.uvInd}&nbsp;(<span className='inBrack'>{this.props.dataB.UvText}</span>)</span></div>
        <div id ='visibleId'>Visibility:&nbsp;<span onClick={()=> this.props.Fmikm() } id='redVisb'>{this.props.dataB.visible}</span></div>
        <div id ='windId'>Wind direction:&nbsp; <span id='redWindDir'>{this.props.dataB.windWay}</span></div>
        <div id ='windSpid'>Wind speed: <span className='dividerId'>&#8739;</span>&nbsp;gust: &nbsp; <span className='spidWind'>{this.props.dataB.windSpd}</span>&nbsp; <span className='spidWind'> <span className='dividerId'>&#8739;</span>&nbsp;     {this.props.dataB.windGust}</span></div>         
        <div id='devPoint'>Dew Point: &nbsp;<span className='spidWind1'>{this.props.dataB.pointDew}<span onClick={()=> this.props.FdewP()} id='CtoF'>&nbsp;{this.props.dataB.depCorF}</span></span></div>
        <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.props.dataB.relHumid}&#37;</span></div>
        <div id='cellId'>Ceeling: &nbsp; <span id='cellInner1'>{this.props.dataB.ceeling1} <span  onClick={()=> this.props.Fceel() } id='cellInner'>{this.props.dataB.fitorM}</span></span></div>
        <div id='departId'>24h temp departure:&nbsp;<span id='deppTemp'>{this.props.dataB.departTemp} <span onClick={()=> this.props.Fdepar()} id='departCf'>{this.props.dataB.celsfahr}</span></span></div>
        </div>
    )
  }
};
export default PanelBody;
