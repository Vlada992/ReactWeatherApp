import React from 'react';
import { Component } from 'react';
import './App.css';
import moon1 from './images/moon1.png';
import sun1 from './images/sun1.png'; 
import thunder1 from './images/lightning1.png';
import percip1 from './images/sleet1.png'; 
import allW1 from './images/all1.png';
import uvInd from './images/uvray1.png';
import tree from './images/treePolpng.png';
import grass1 from './images/grass1.png';
import grass2 from './images/grass2.png';
import virus1 from './images/virus1.png';
import air1 from './images/air1.png';
import h24 from './images/24departpng.png';
import cloudceel from './images/humidNight.png';
import humidit from './images/humidity1.png';
import cooler from './images/cooler1.png';
import wind from './images/windturbines1.png';
import windDir from './images/compass1.png';
import eye from './images/eye1.png';
import pressure from './images/pressure1.png';
import clouding from './images/cloudiness1.png';
import dayarrow from './images/day1arrow.png';
import nightarrow from './images/night1arrow.png';
import cloudDay from './images/cloudDay.png';
import pressDay from './images/pressDay.png';
import eyeDay from './images/eyeDay.png';
import windDday from './images/windDday.png';
import windSday from './images/windSday.png';
import airDay from './images/airDay.png';
import humidDay from './images/humidDay.png';
import hour24Day from './images/hour24Day.png';


import fanDay from './images/fanDay.png';
import groundDay from './images/groundDay.png';
import virusDay from './images/virusDay.png';
import grassDay from './images/grassDay.png';
import treeDay from './images/treeDay.png';
import uvDay from './images/uvDay.png';
import rainsunDay from './images/rainsunDay.png';
import rainsnow1Day from './images/rainsnow1Day.png';
import rainsnow2Day from './images/rainsnow2Day.png';
import lightningDay from './images/lightningDay.png';
import sunDay from './images/sunDay.png';
import moonDay from './images/moonDay.png';









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
    this.togleR8 = false;
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
    this.move = 'hideCls'
    this.add = 'showCls'
    this.divShow = 'expDiv'
    this.divShow1 = 'expDiv1'
    this.divHide = ''
    this.divHide1 = ''
    this.valDiv = ''
    this.colorR= 'titleCityR'
    this.colorB= 'titleCityB'
    this.tempR  ='stajlTempNowR'
    this.tempB = 'stajlTempNowB'
    this.tempInnR = 'tempInnerR'
    this.tempInnB = 'tempInnerB'
    this.state = {
      pointDew:'',
      cityClr:'titleCityR',
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
      expState:'hideCls',
      expState1:'showCls',
      toggleDiv:'',
      blackClr:'c1b',
      grayClr:'c2g',
      blgry:'c1b',
      blgrx:'c2g',
      blgrx1:'c3b',
      expState2:'hideCls',
      expState3:'showCls',
      expState4:'hideCls',
      stateid:'',
      stateid1:'',
      valCont: 'valCont',
      valAlway: 'valCont',
      valCont1:'valCont1'
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





expandF(classArg){
  let expState2 = {...this.state.expState2, hit1:this.move, hit2:this.add} 
  let expState =  {...this.state.expState, hit1:this.add, hit2:this.move}
  let blgry  = {...this.state.blgry, hit1: this.state.grayClr, hit2: this.state.blackClr}
  let blgrx  = {...this.state.blgrx, hit1: this.state.blackClr, hit2: this.state.grayClr}
  let toggleDiv = {...this.state.toggleDiv, hit1:this.move, hit2:this.add}
  let stateid = {...this.state.stateid, hit1:this.divHide, hit2:this.divShow}
  let stateid1 = {...this.state.stateid, hit1:this.divHide1, hit2:this.divShow1}
  this.setState({stateid:stateid.hit1})
  this.setState({stateid1:stateid1.hit1})
  this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
  if(classArg === 'c1b'){
    return false;
  }else if(classArg === 'c2g'){
  
  if (this.togleR7 === false){
      this.setState({blgrx:blgrx.hit1})
      this.setState({blgry:blgry.hit1})
      this.setState({toggleDiv:toggleDiv.hit1})
        if(this.state.expState4 === 'showCls'){
      this.setState({expState2:expState2.hit2}) 
      this.setState({expState:expState.hit2})
      this.props.parentCb(this.colorB, this.tempB, this.tempInnB)
      this.setState({stateid:stateid.hit1})
      this.setState({stateid1:stateid1.hit2})
        }else{
      this.setState({expState2:expState2.hit1}) 
      this.setState({expState:expState.hit1})
      this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
      this.setState({stateid:stateid.hit2}) 
      this.setState({stateid1:stateid1.hit1}) 
        }
      this.togleR7 = true
  } else{
      this.setState({expState2:expState2.hit1}) 
      this.setState({expState:expState.hit2})
      this.setState({toggleDiv:toggleDiv.hit2})
      this.setState({blgrx:blgrx.hit2})
      this.setState({blgry:blgry.hit2})
      this.togleR7 = false;
    if(this.state.expState4 === 'showCls' ){
     this.props.parentCb(this.colorB,this.tempB, this.tempInnB)
     }else {
     this.props.parentCb(this.colorR,this.tempR, this.tempInnR)
     };
  }
};  //main if/else if
}


expandNightF1(){
    this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
    let expState2 = {...this.state.expState2, hit1:this.move, hit2:this.add}
    let expState3 = {...this.state.expState3, hit1:this.move, hit2:this.add}
    let expState4 = {...this.state.expState4, hit1:this.add, hit2:this.move}
    let expState =  {...this.state.expState, hit1:this.move, hit2:this.add}
    let blgry  = {...this.state.blgry, hit1: this.state.grayClr, hit2: this.state.blackClr}
    let blgrx  = {...this.state.blgrx, hit1: this.state.blackClr, hit2: this.state.grayClr}
    let toggleDiv = {...this.state.toggleDiv, hit1:this.add, hit2:this.move}
    let valCont = {...this.state.valCont, hit1:this.state.valCont1, hit2:this.state.valAlway}
    if (this.togleR8 === false){
       this.setState({expState:expState.hit1})  
       this.setState({expState2:expState2.hit1})
       this.setState({expState3:expState3.hit1})
       this.setState({expState4:expState4.hit1})
       this.setState({blgrx:blgrx.hit2})
       this.setState({blgry:blgry.hit2})
       this.setState({toggleDiv:toggleDiv.hit1})
       this.setState({valCont:valCont.hit1})
       this.props.parentCb(this.colorB, this.tempB, this.tempInnB)
       this.togleR8 = true
   } else{
       this.setState({expState:expState.hit1})  
       this.setState({toggleDiv:toggleDiv.hit1})
       this.setState({blgrx:blgrx.hit2})
       this.setState({blgry:blgry.hit2})
       this.setState({expState2:expState2.hit1}) 
       this.setState({expState3:expState3.hit2})
       this.setState({expState4:expState4.hit2})
       this.setState({valCont:valCont.hit2})
       this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
       this.togleR8 = false;

   }
};


  render(){
    return(
        <div className={this.props.dataB.stlState} id='bodyDiv'> 
        
        <form id='hitForm' onSubmit={(e)=> this.props.mainF(e)}>
        <input type="text" className='form-control' id='siteName' placeholder='Type city...'/> 
         <input type="text" className='form-control' id='siteName1' placeholder='Type country...'/> 
         <input type='submit' className='form-control' id='submitName'/>
        </form> 

        <div className={this.state.toggleDiv}>
        <div id={this.state.valCont}>
        <div  className={this.state.expState3} id='stajlClear'>  <span>{String(this.props.dataB.sunRise).slice(0, 16)}</span> &nbsp;&nbsp; {this.props.dataB.clearW} &nbsp;<span className='stajlClear1'  onClick={()=> this.expandNightF1()} title={this.props.dataB.regDate}>(Daylight)<img  alt='arrow' src={dayarrow}/></span>&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp; <div id ='phraseWet'>(<span  title={this.props.dataB.phraseTitl} className='inBrack'>{this.props.dataB.phraseW}</span>) &nbsp;&nbsp; <span><img id='weatherImg1' alt='accuweather.com' src={`http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${this.props.dataB.weathIcn1 === 0 ? '0' + 1 : this.props.dataB.weathIcn1}-s.png`}/></span>  </div>   </div>
        
        <div  className={this.state.expState4} id='stajlClearBl'> <span>{String(this.props.dataB.sunRise).slice(0, 16)}</span>     {this.props.dataB.clearW} &nbsp;<span className='stajlClear2'  onClick={()=> this.expandNightF1()} title={this.props.dataB.nightDate}>(Night)<img alt='arrow' src={nightarrow}/></span>&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;  <div id ='phraseWet'>(<span  title={this.props.dataB.nightPhraseL} className='inBrack1'>{this.props.dataB.nightPhrase}</span>)&nbsp;&nbsp; <span><img id='weatherImg2' alt='accuweather.com' src={`http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${this.props.dataB.nightIcn1 === 0 ? '0' + 1 : this.props.dataB.nightIcn1}-s.png`}/></span></div></div>
        <div className={this.state.expState3} id ='cloudCover'><img className='icnImg' alt='cloudiness'  src={cloudDay}/> &nbsp;&nbsp;Cloudiness:<span className='allRed'>&nbsp; {this.props.dataB.cloudCov}&#37;</span></div>
        <div className={this.state.expState4} id ='cloudCover1'><img className='icnImg' alt='cloudiness at night'  src={clouding}/> &nbsp;&nbsp;Cloudiness:<span className='allRed'>&nbsp; {this.props.dataB.nightCloud}&#37;</span></div>     
        <div className={this.state.expState3} id='pressTitl'><img className='icnImg' alt='pressure'  src={pressDay}/> &nbsp;&nbsp;Pressure:&nbsp;<div onClick={()=> this.ChangeToInhg()} id ='stajlPress'> &nbsp;<span className={this.state.showDiv3}>{this.props.dataB.currPress}</span> &nbsp;<span className={this.state.hideDiv3}>{this.state.currPress}</span>&nbsp;   <span id='unitToI'>{this.state.inhmb}</span> &nbsp; (<span className='inBrack'>{this.props.dataB.pressTend}</span>)</div></div>       
        <div className={this.state.expState4} id='pressTitl1'><img className='icnImg' alt='pressure'  src={pressure}/> &nbsp;&nbsp;Pressure:&nbsp;<div onClick={()=> this.ChangeToInhg()} id ='stajlPress1'> &nbsp;<span className={this.state.showDiv3}>{this.props.dataB.currPress}</span> &nbsp;<span className={this.state.hideDiv3}>{this.state.currPress}</span>&nbsp;   <span id='unitToI'>{this.state.inhmb}</span> &nbsp; (<span className='inBrack'>{this.props.dataB.pressTend}</span>)</div></div>       
        <div className={this.state.expState3} id ='visibleId'><img className='icnImg' alt='visibility'  src={eyeDay}/> &nbsp;&nbsp; Visibility:&nbsp;<span onClick={()=> this.KmToMi() } id='redVisb'><span className={this.state.showDiv2}>{this.props.dataB.visible}</span> <span className={this.state.hideDiv2}>{this.state.visible}</span>    </span></div>       
        <div className={this.state.expState4} id ='visibleId1'><img className='icnImg' alt='visibility'  src={eye}/> &nbsp;&nbsp; Visibility:&nbsp;<span onClick={()=> this.KmToMi() } id='redVisb1'><span className={this.state.showDiv2}> {this.props.dataB.visible}  </span> <span className={this.state.hideDiv2}> {this.state.visible}    </span>    </span></div>      
        
        <div  className={this.state.expState3} id ='windId'><img className='icnImg' alt='wind direction'  src={windDday}/> &nbsp;&nbsp;Wind direction:&nbsp; <span id='redWindDir'>{this.props.dataB.windWay}</span></div>
        <div  className={this.state.expState4} id ='windId1'><img className='icnImg' alt='wind direction at night'  src={windDir}/> &nbsp;&nbsp;Wind direction:&nbsp; <span id='redWindDir'>{this.props.dataB.nightWindDir}</span></div>

        <div  className={this.state.expState3} id ='windSpid'><img className='icnImg' alt='wind speed'  src={windSday}/> &nbsp;&nbsp;Wind speed: <span className='dividerId'>&#8739;</span>&nbsp;gust: &nbsp; <span className='spidWind'>{this.props.dataB.windSpd}</span>&nbsp; <span className='spidWind'> <span className='dividerId'>&#8739;</span>&nbsp;     {this.props.dataB.windGust}</span></div>         
        <div  className={this.state.expState4} id ='windSpid1'><img className='icnImg' alt='wind speed at night'  src={wind}/> &nbsp;&nbsp;Wind speed: <span className='dividerId'>&#8739;</span>&nbsp;gust: &nbsp; <span className='spidWind'>{this.props.dataB.nightWindS}</span>&nbsp; <span className='spidWind'> <span className='dividerId'>&#8739;</span>&nbsp;     {this.props.dataB.nightWindG}</span></div>         
        <div  className={this.state.expState3} id='devPoint'><img className='icnImg' alt='dew point'  src={airDay}/> &nbsp;&nbsp;Dew Point: &nbsp;<span className='spidWind1'><span className={this.state.showDiv1}>{this.props.dataB.pointDew}</span>  <span className={this.state.hideDiv1}>{this.state.pointDew}</span>  <span onClick={()=> this.changeToF1()} id='CtoF'>&nbsp;{this.state.depCorF}</span> </span></div>      
        <div  className={this.state.expState4} id='devPoint1'><img className='icnImg' alt='dew point'  src={cooler}/> &nbsp;&nbsp;Dew Point: &nbsp;<span className='spidWind1'><span className={this.state.showDiv1}>{this.props.dataB.pointDew}</span>  <span className={this.state.hideDiv1}>{this.state.pointDew}</span>  <span onClick={()=> this.changeToF1()} id='CtoF'>&nbsp;{this.state.depCorF}</span> </span></div>      
        <div className={this.state.expState3} id ='humiditR'><img className='icnImg' alt='humidity'  src={humidDay}/> &nbsp;&nbsp;Relative humidity:&nbsp;<span className='spidWind'>{this.props.dataB.relHumid}&#37;</span></div>
        <div className={this.state.expState4} id ='humiditR1'><img className='icnImg' alt='humidity'  src={humidit}/> &nbsp;&nbsp;Relative humidity:&nbsp;<span className='spidWind'>{this.props.dataB.relHumid}&#37;</span></div>
        <div className={this.state.expState3} id='cellId'><img className='icnImg' alt='ceeling'  src={cloudDay}/> &nbsp;&nbsp;Ceeling: &nbsp; <span id='cellInner1'><span className={this.state.showDiv4}>{this.props.dataB.ceeling1}</span> <span className={this.state.hideDiv4}>{this.state.ceeling1}</span> <span  onClick={()=> this.ChangeToFT() } id='cellInner'>{this.state.fitorM}</span></span></div>
        <div className={this.state.expState4} id='cellId1'><img className='icnImg' alt='ceeling'  src={cloudceel}/> &nbsp;&nbsp;Ceeling: &nbsp; <span id='cellInner11'><span className={this.state.showDiv4}>{this.props.dataB.ceeling1}</span> <span className={this.state.hideDiv4}>{this.state.ceeling1}</span> <span  onClick={()=> this.ChangeToFT() } id='cellInnerN'>{this.state.fitorM}</span></span></div>
        <div className={this.state.expState3} id='departId'><img className='icnImg' alt='24h temp departure'  src={hour24Day}/> &nbsp;&nbsp;24h temp departure:&nbsp;<span id='deppTemp'> <span className={this.state.showDiv}> {this.props.dataB.departTemp}</span>  <span className={this.state.hideDiv}> {this.state.departTemp} </span> <span onClick={()=> this.departF()} id='departCf'>{this.state.celsfahr}</span></span></div>
        <div className={this.state.expState4} id='departId1'><img className='icnImg' alt='24h temp departure'  src={h24}/> &nbsp;&nbsp;24h temp departure:&nbsp;<span id='deppTemp1'> <span className={this.state.showDiv}> {this.props.dataB.departTemp}</span>  <span className={this.state.hideDiv}> {this.state.departTemp} </span> <span onClick={()=> this.departF()} id='departCf1'>{this.state.celsfahr}</span></span></div>
       
       </div>
       
        </div>




        <div className={[this.state.expState, this.state.stateid].join(' ')}>
        <span  className={[this.state.expState, 'expandCont'].join(' ')} id='stajlClearAll' title={this.props.dataB.regDate}><span className ='stajlClear1Fix'> (Daylight)</span> &nbsp;  {String(this.props.dataB.sunRise).slice(0, 16)}</span>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Air pollution'  src={fanDay}/> &nbsp;&nbsp;{this.props.dataB.airPlnN}&nbsp;({this.props.dataB.airPlnT}, pollution): &nbsp;</span>  {this.props.dataB.airPlnVT}&nbsp;(<span className='catOrn'>{this.props.dataB.airPlnC}</span>)</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='grass pollution'  src={groundDay}/> &nbsp;&nbsp;{this.props.dataB.grassPlnN}(pollution):&nbsp;</span> {this.props.dataB.grassPlnV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.grassPlnC}</span>)</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='mold pollution'  src={virusDay}/> &nbsp;&nbsp;{this.props.dataB.moldN}(pollution):&nbsp;</span> {this.props.dataB.moldV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.moldC}</span>)</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Ragweed pollution'  src={grassDay}/> &nbsp;&nbsp;{this.props.dataB.weedN}(pollution):&nbsp;</span> {this.props.dataB.weedV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.weedC}</span>)</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Tree pollution'  src={treeDay}/> &nbsp;&nbsp;{this.props.dataB.treeN}(pollution):&nbsp;</span> {this.props.dataB.treeV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.treeC}</span>)</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='UV'  src={uvDay}/> &nbsp;&nbsp;{this.props.dataB.uvN}:&nbsp;</span> {this.props.dataB.uvV} &nbsp;(<span className='catOrn'>{this.props.dataB.uvC}</span>)</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation all'  src={rainsunDay}/> &nbsp;&nbsp;Sun/rain/snow/ice (hours):&nbsp;</span> {this.props.dataB.percitipH} &nbsp;</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation probability'  src={rainsnow1Day}/> &nbsp;&nbsp;Rain/snow/ice (probability):&nbsp;</span> {this.props.dataB.percitProb} &nbsp;</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation value'  src={rainsnow2Day}/> &nbsp;&nbsp;Rain/snow/ice (value):&nbsp;</span> {this.props.dataB.percitVal} &nbsp;</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='thunder'  src={lightningDay}/> &nbsp;&nbsp;Thunderstorm (probability):&nbsp;</span> {this.props.dataB.thunderProb} &nbsp;</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='sun'  src={sunDay}/> &nbsp;&nbsp;Sun (rise/set):&nbsp;</span> <span title={this.props.dataB.sunRise}>{String(this.props.dataB.sunRise).slice(16, 24)}</span>  /  <span title={this.props.dataB.sunSet}>{ String(this.props.dataB.sunSet).slice(16, 24)}</span> &nbsp;</div>
        <div className={[this.state.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='moon'  src={moonDay}/> &nbsp;&nbsp;Moon (rise/set/age):&nbsp;</span> <span title={this.props.dataB.moonRise}>{String(this.props.dataB.moonRise).slice(16, 21)}</span>  /  <span title={this.props.dataB.moonSet}>{ String(this.props.dataB.moonSet).slice(16, 21)}</span> &nbsp;<span className='catOrn' title={this.props.dataB.moonPhase}>({this.props.dataB.moonAge})</span>&nbsp;</div>
        </div>


        <div className={[this.state.expState2, this.state.stateid1].join(' ')}>
        <span  className={[this.state.expState2, 'expandCont'].join(' ')} id='stajlClearAll1'  title={this.props.dataB.nightDate}><span   className={[this.state.blgrx, 'stajlClear2Fix'].join(' ')} >(Night)</span> &nbsp;  {String(this.props.dataB.sunRise).slice(0, 16)}</span>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Air pollution'  src={air1}/> &nbsp;&nbsp;{this.props.dataB.airPlnN}&nbsp;({this.props.dataB.airPlnT}, pollution): &nbsp;</span>  {this.props.dataB.airPlnVT}&nbsp;(<span className='catOrn'>{this.props.dataB.airPlnC}</span>)</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='grass pollution'  src={grass2}/> &nbsp;&nbsp;{this.props.dataB.grassPlnN}(pollution):&nbsp;</span> {this.props.dataB.grassPlnV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.grassPlnC}</span>)</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='mold pollution'  src={virus1}/> &nbsp;&nbsp;{this.props.dataB.moldN}(pollution):&nbsp;</span> {this.props.dataB.moldV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.moldC}</span>)</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Ragweed pollution'  src={grass1}/> &nbsp;&nbsp;{this.props.dataB.weedN}(pollution):&nbsp;</span> {this.props.dataB.weedV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.weedC}</span>)</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Tree pollution'  src={tree}/> &nbsp;&nbsp;{this.props.dataB.treeN}(pollution):&nbsp;</span> {this.props.dataB.treeV} &#13221; &nbsp;(<span className='catOrn'>{this.props.dataB.treeC}</span>)</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='UV'  src={uvInd}/> &nbsp;&nbsp;{this.props.dataB.uvN}:&nbsp;</span> {this.props.dataB.uvV} &nbsp;(<span className='catOrn'>{this.props.dataB.uvC}</span>)</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation all'  src={allW1}/> &nbsp;&nbsp;rain/snow/ice (hours):&nbsp;</span> {this.props.dataB.nightPerc} &nbsp;</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation probability'  src={percip1 }/> &nbsp;&nbsp;Rain/snow/ice (probability):&nbsp;</span> {this.props.dataB.nightProb} &nbsp;</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation value'  src={percip1}/> &nbsp;&nbsp;Rain/snow/ice (value):&nbsp;</span> {this.props.dataB.nightVal} &nbsp;</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='thunder'  src={thunder1 }/> &nbsp;&nbsp;Thunderstorm (probability):&nbsp;</span> {this.props.dataB.nightTund} &nbsp;</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='sun'  src={sun1}/> &nbsp;&nbsp;Sun (rise/set):&nbsp;</span> <span title={this.props.dataB.sunRise}>{String(this.props.dataB.sunRise).slice(16, 24)}</span>  /  <span title={this.props.dataB.sunSet}>{ String(this.props.dataB.sunSet).slice(16, 24)}</span> &nbsp;</div>
        <div className={[this.state.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='moon'  src={moon1}/> &nbsp;&nbsp;Moon (rise/set/age):&nbsp;</span> <span title={this.props.dataB.moonRise}>{String(this.props.dataB.moonRise).slice(16, 21)}</span>  /  <span title={this.props.dataB.moonSet}>{ String(this.props.dataB.moonSet).slice(16, 21)}</span> &nbsp;<span className='catOrn' title={this.props.dataB.moonPhase}>({this.props.dataB.moonAge})</span>&nbsp;</div>
        </div>


        <div><i title='Show one part' onClick={()=> this.expandF(this.state.blgry)} className={["fa fa-circle circO", this.state.blgry].join(' ')}></i>&nbsp;&nbsp; <i title='Show one part' onClick={()=> this.expandF(this.state.blgrx)} className={["fa fa-circle circO", this.state.blgrx].join(' ')}></i>&nbsp;&nbsp; </div>
        </div>
    )
  }


}
export default PanelBody;
