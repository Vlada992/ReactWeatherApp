import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';


class PanelBody extends Component {
  constructor(props){
    super(props);   
    this.expandF = this.expandF.bind(this);
    this.departF = this.departF.bind(this);
    this.changeToF1 = this.changeToF1.bind(this);
    this.ChangeToInhg = this.ChangeToInhg.bind(this);
    this.ChangeToFT = this.ChangeToFT.bind(this);
    this.KmToMi = this.KmToMi.bind(this);
    this.togleR2 = false;
    this.togleR3 = false;
    this.togleR4 = false;
    this.togleR5 = false;
    this.togleR6 = false;
    this.togleR7 = false;

    this.cels  = '℃';
    this.fahr = '℉';
    this.mlbr = 'mb'
    this.inhg = 'inHg'
    this.km = 'km';
    this.mi = 'mi';
    this.fit = 'ft';
    this.m = 'm';
    this.hide = 'hideDiv'
    this.show = 'showDiv'
    this.state = {
      pointDew:'',
      depCorF:'℃',
      celsfahr:'℃',
      inhmb:'mb',
      hideDiv: this.hide,
      showDiv:this.show,
      hideDiv1: this.hide,
      showDiv1:this.show,
      hideDiv2: this.hide,
      showDiv2:this.show,
      hideDiv3: this.hide,
      showDiv3:this.show,
      hideDiv4: this.hide,
      showDiv4:this.show,
      departTemp:'',
      departTemp:'',
      celsFahr:'℃',
      departFor:'',
      visible:'',
      visibleMi:'',
      visibleFor:'',
      currPress:'',
      currPressInhg:'',
      currPressFor:'',
      ceeling1:'',
      fitorM:'m',
      ceelFit:'',
      cellFitFor:'',
    }
};


changeToF1(event){
  let hideDiv1 = {...this.state.hideDiv1, hit1:this.state.showDiv1}
  let showDiv1 = {...this.state.showDiv1, hit1:this.state.hideDiv1};

  let pointDew = {...this.props.dataB.pointDew, toF:this.props.dataB.pointDewF, toFor:this.props.dataB.pointDewFor}
  let depCorF = {...this.props.dataB.depCorF, hit: this.fahr, hit1: this.cels}
  this.setState({hideDiv1:hideDiv1.hit1})
  this.setState({showDiv1:showDiv1.hit1})
   if (this.togleR2 === false){
       this.setState({pointDew:pointDew.toF})
       this.setState({depCorF: depCorF.hit})
       this.togleR2 = true
   } else {
       this.setState({pointDew:pointDew.toFor})
       this.setState({depCorF: depCorF.hit1})
       this.togleR2 = false;
   }
}


departF(event){
    let showDiv = {...this.state.showDiv, hit1:this.state.hideDiv}
    let hideDiv = {...this.state.hideDiv, hit1:this.state.showDiv}
    this.setState({hideDiv:hideDiv.hit1})
    this.setState({showDiv:showDiv.hit1})
    let departTemp = {...this.props.dataB.departTemp, toDepF:this.props.dataB.departTempF, toDepFor:this.props.dataB.departFor};
    let celsfahr ={...this.props.dataB.celsfahr, hit:this.fahr, hit1: this.cels};
    if (this.togleR3 === false){
       this.setState({departTemp: departTemp.toDepF})
       this.setState({celsfahr:celsfahr.hit})
       this.togleR3 = true
     } else {
       this.setState({departTemp:departTemp.toDepFor})
       this.setState({celsfahr:celsfahr.hit1})
       this.togleR3 = false;
     }
  }

  KmToMi(event){
    let showDiv2 = {...this.state.showDiv2, hit1:this.state.hideDiv2}
    let hideDiv2 = {...this.state.hideDiv2, hit1:this.state.showDiv2}
    let visible = { ...this.props.dataB.visible, to1: this.props.dataB.visibleMi, to2: this.props.dataB.visibleFor }
    let kmmi =  {...this.props.dataB.kmmi, hit1:this.mi, hit2:this.km}
    this.setState({hideDiv2:hideDiv2.hit1})
    this.setState({showDiv2:showDiv2.hit1})
    if(this.togleR4 === false){
        this.setState({visible: visible.to1})
        this.togleR4 = true
        this.setState({kmmi:kmmi.hit1})
    } else {
        this.setState({ visible: visible.to2 })
        this.togleR4 = false;
        this.setState({kmmi:kmmi.hit2})
    }
}


ChangeToInhg(event){
  let showDiv3 = {...this.state.showDiv3, hit1:this.state.hideDiv3}
  let hideDiv3 = {...this.state.hideDiv3, hit1:this.state.showDiv3}
  let currPress = {...this.props.dataB.currPress, toIng:this.props.dataB.pressInhg, toIngFor:this.props.dataB.pressInhgFor}
  let inhmb  = {...this.props.dataB.inhnm, hit:this.mlbr, hit1: this.inhg}
  this.setState({hideDiv3:hideDiv3.hit1})
  this.setState({showDiv3:showDiv3.hit1})
   if (this.togleR5 === false){
       this.setState({currPress:currPress.toIng})
       this.setState({inhmb:inhmb.hit1})
       this.togleR5 = true
   }else {
       this.setState({currPress:currPress.toIngFor})
       this.togleR5 = false;
       this.setState({inhmb:inhmb.hit})
   }
}



ChangeToFT(event){
  let showDiv4 = {...this.state.showDiv4, hit1:this.state.hideDiv4}
  let hideDiv4 = {...this.state.hideDiv4, hit1:this.state.showDiv4}

  let ceeling1 = {...this.props.dataB.ceeling1, toFT:this.props.dataB.ceelFit, toForFT:this.props.dataB.ceelFitFor}
  let fitorM = {...this.props.dataB.fitorM, hit: this.fit, hit1: this.m}
  this.setState({hideDiv4:hideDiv4.hit1})
  this.setState({showDiv4:showDiv4.hit1})
   if (this.togleR6 === false){
       this.setState({ceeling1:ceeling1.toFT})
       this.setState({fitorM: fitorM.hit})
       this.togleR6 = true
   }else {
       this.setState({ceeling1:ceeling1.toForFT})
       this.setState({fitorM: fitorM.hit1})
       this.togleR6 = false;
   }
}





expandF(event){
  if (this.togleR7 === false){
      console.log('vlajko');
      this.togleR7 = true
  } else{
      console.log('nemanja');
      this.togleR7 = false;
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
        <div id='pressTitl'>Pressure:&nbsp;<div onClick={()=> this.ChangeToInhg()} id ='stajlPress'> &nbsp;<span className={this.state.showDiv3}>{this.props.dataB.currPress}</span> &nbsp;<span className={this.state.hideDiv3}>{this.state.currPress}</span>&nbsp;   <span id='unitToI'>{this.state.inhmb}</span> &nbsp; (<span className='inBrack'>{this.props.dataB.pressTend}</span>)</div></div>       
        <div id='uvindex'>UV index: <span id='redUv'>{this.props.dataB.uvInd}&nbsp;(<span className='inBrack'>{this.props.dataB.UvText}</span>)</span></div>    
        <div id ='visibleId'>Visibility:&nbsp;<span onClick={()=> this.KmToMi() } id='redVisb'><span className={this.state.showDiv2}>{this.props.dataB.visible}</span> <span className={this.state.hideDiv2}>{this.state.visible}</span>    </span></div>       
        <div id ='windId'>Wind direction:&nbsp; <span id='redWindDir'>{this.props.dataB.windWay}</span></div>
        <div id ='windSpid'>Wind speed: <span className='dividerId'>&#8739;</span>&nbsp;gust: &nbsp; <span className='spidWind'>{this.props.dataB.windSpd}</span>&nbsp; <span className='spidWind'> <span className='dividerId'>&#8739;</span>&nbsp;     {this.props.dataB.windGust}</span></div>         
        <div id='devPoint'>Dew Point: &nbsp;<span className='spidWind1'><span className={this.state.showDiv1}>{this.props.dataB.pointDew}</span>     <span className={this.state.hideDiv1}>{this.state.pointDew}</span>  <span onClick={()=> this.changeToF1()} id='CtoF'>&nbsp;{this.state.depCorF}</span> </span></div>      
        <div id ='humiditR'>Relative humidity:&nbsp;<span className='spidWind'>{this.props.dataB.relHumid}&#37;</span></div>
        <div id='cellId'>Ceeling: &nbsp; <span id='cellInner1'><span className={this.state.showDiv4}>{this.props.dataB.ceeling1}</span> <span className={this.state.hideDiv4}>{this.state.ceeling1}</span> <span  onClick={()=> this.ChangeToFT() } id='cellInner'>{this.state.fitorM}</span></span></div>
        <div id='departId'>24h temp departure:&nbsp;<span id='deppTemp'> <span className={this.state.showDiv}> {this.props.dataB.departTemp}</span>  <span className={this.state.hideDiv}> {this.state.departTemp} </span> <span onClick={()=> this.departF()} id='departCf'>{this.state.celsfahr}</span></span></div>
        <div onClick={()=> this.expandF()} id='expandDiv'>More...</div>
        <div id='expandCont'></div>
        
        </div>
    )
  }
};
export default PanelBody;
