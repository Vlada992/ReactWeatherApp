import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';


class PanelBody extends Component {
  constructor(props){
    super(props);   
    this.expandF = this.expandF.bind(this);
    //this.callonClick = this.callonClick.bind(this);
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
      pointDew:``,
      pountDew1: ``,
      depCorF:'℃'
    }
};

changeToF1(event){
  let pointDew = {...this.props.dataB.pointDew, toF:this.props.dataB.pointDewF, toFor:this.props.dataB.pointDewFor}
  let depCorF = {...this.props.dataB.depCorF, hit: this.fahr, hit1: this.cels}
  console.log('da vidimo', pointDew)
   if (this.togleR === false){
       this.setState({pointDew:pointDew.toF})
       console.log('sta je stejt:', this.setState)
       this.setState({depCorF: depCorF.hit})
       console.log('a sad dew:', pointDew)
       this.togleR = true
   } else {
       this.setState({pointDew:pointDew.toFor})
       this.setState({depCorF: depCorF.hit1})
       this.togleR = false;
   }
}


expandF(event){
  if (this.togleR === false){
      console.log('vlajko');
      this.togleR = true
  } else{
      console.log('nemanja');
      this.togleR = false;
  }
}

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
        
        <div id='devPoint'>Dew Point: &nbsp;<span className='spidWind1'>{this.state.pointDew}<span onClick={()=> this.changeToF1()} id='CtoF'>&nbsp;{this.state.depCorF}</span></span></div>
        
        <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.props.dataB.relHumid}&#37;</span></div>
        <div id='cellId'>Ceeling: &nbsp; <span id='cellInner1'>{this.props.dataB.ceeling1} <span  onClick={()=> this.props.Fceel() } id='cellInner'>{this.props.dataB.fitorM}</span></span></div>
        <div id='departId'>24h temp departure:&nbsp;<span id='deppTemp'>{this.props.dataB.departTemp} <span onClick={()=> this.props.Fdepar()} id='departCf'>{this.props.dataB.celsfahr}</span></span></div>
        
        <div onClick={()=> this.expandF()} id='expandDiv'>More...</div>

        <div id='expandCont'></div>
        
        </div>
    )
  }
};
export default PanelBody;
