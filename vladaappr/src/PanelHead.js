
import React from 'react';
import { Component } from 'react';
import './App.css';




class PanelHead extends Component{
  constructor(props){
    super(props);   
    this.changeMaxToF2 = this.changeMaxToF2.bind(this);
    this.changeMinToF2 = this.changeMinToF2.bind(this);
    this.ChangeToF = this.ChangeToF.bind(this);
    this.togleR8 = false;
    this.togleR9 = false;
    this.togleR10 = false;
    this.cels  = '℃';
    this.fahr = '℉';
    this.hide = 'hideDiv'
    this.show = 'showDiv'
    this.state = {
      hideDiv5: this.hide,
      showDiv5:this.show,
      hideDiv6: this.hide,
      showDiv6:this.show,
      hideDiv7: this.hide,
      showDiv7:this.show,
      maxTemp:'',
      maxTempF:"",
      maxTempFor:'',
      minTemp:'',
      minTempF:'',
      minTempFor:'',
      stringCels2:'℃',
      stringCels3:'℃',
      tempNow:'',
      apparTemp:'',
      windChillT:'',
      stringCels:'℃',
      tempNowF:'',
      tempNowFor:'',
      apparTempF:'',
      apparTempFor:"",
      tempNowA:'',
      tempNowAFor:"",
      windChillTF:'',
      windChillFor:''
    }
};





  changeMaxToF2(event){
    let showDiv5 = {...this.state.showDiv5, hit1:this.state.hideDiv5}
    let hideDiv5 = {...this.state.hideDiv5, hit1:this.state.showDiv5}
    let maxTemp = {...this.props.data.maxTemp, toF:this.props.data.maxTempF, toFor:this.props.data.maxTempFor}
    let stringCels2 = {...this.props.data.stringCels1, hitF: this.fahr, hitF1: this.cels};
    this.setState({hideDiv5:hideDiv5.hit1})
    this.setState({showDiv5:showDiv5.hit1})
     if (this.togleR8 === false) {
         this.setState({maxTemp:maxTemp.toF})
         this.setState({stringCels2: stringCels2.hitF});
         this.togleR8 = true
     } else {
         this.setState({maxTemp:maxTemp.toFor})
         this.setState({stringCels2: stringCels2.hitF1}) 
         this.togleR8 = false;
     }
  }
  changeMinToF2(event){
    let showDiv6 = {...this.state.showDiv6, hit1:this.state.hideDiv6}
    let hideDiv6 = {...this.state.hideDiv6, hit1:this.state.showDiv6} 
    let minTemp = {...this.props.data.minTemp, toF:this.props.data.minTempF, toFor:this.props.data.minTempFor}
    let stringCels3 = {...this.props.data.stringCels2, hitF: this.fahr, hitF1: this.cels};
    this.setState({hideDiv6:hideDiv6.hit1})
    this.setState({showDiv6:showDiv6.hit1})
     if (this.togleR9 === false){
         this.setState({minTemp:minTemp.toF})
         this.setState({stringCels3: stringCels3.hitF});
         this.togleR9 = true
     } else {
         this.setState({minTemp:minTemp.toFor})
         this.setState({stringCels3: stringCels3.hitF});
         this.togleR9 = false;
     }
  }


  ChangeToF(event){
    let showDiv7 = {...this.state.showDiv7, hit1:this.state.hideDiv7}
    let hideDiv7= {...this.state.hideDiv7, hit1:this.state.showDiv7} 
    let tempNow = { ...this.props.data.tempNow, hit1: this.props.data.tempNowF, hit11: this.props.data.tempNowFor };
    let apparTemp = { ...this.props.data.apparTemp, hit2: this.props.data.apparTempF, hit22: this.props.data.apparTempFor };
    let tempNowA = { ...this.props.data.tempNowA, hit3: this.props.data.tempNowAF, hit33: this.props.data.tempNowAFor };
    let windChillT = { ...this.props.data.windChillT, hit4: this.props.data.windChillTF, hit44: this.props.data.windChillFor };
    let stringCels = {...this.props.data.stringCels, hitF: this.fahr, hitF1: this.cels};
    this.setState({hideDiv7:hideDiv7.hit1})
    this.setState({showDiv7:showDiv7.hit1})
    if (this.togleR10 === false){
        this.setState({ tempNow: tempNow.hit1 })
        this.setState({ apparTemp: apparTemp.hit2 })
        this.setState({ tempNowA: tempNowA.hit3 });
        this.setState({ windChillT: windChillT.hit4 })
        this.setState({stringCels: stringCels.hitF});
        this.togleR10 = true 
    } else {
        this.setState({ tempNow: tempNow.hit11})
        this.setState({ tempNowA: tempNowA.hit33 })
        this.setState({ apparTemp: apparTemp.hit22 })
        this.setState({ windChillT: windChillT.hit44 })
        this.setState({stringCels: stringCels.hitF1});
        this.togleR10 = false;
    }
}

  render(){
    return (
      <div className={this.props.data.stlState} id='headDiv'>
        <div><img id='weatherImg' alt='accuweather.com' src={`http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${this.props.data.weathIcn == 0 ? '0' + 1 : this.props.data.weathIcn}-s.png`}/></div>
        <div id='titleCity'>{this.props.data.cityCountN}<span className='populId'><span className='hdclr'>ll:</span>&nbsp;  {this.props.data.latLon}&nbsp;&#8739;&nbsp;<span className='populId'><span className='hdclr'>pop:</span>&nbsp;{this.props.data.popuL}</span> &nbsp;&nbsp;&#8739;  &nbsp;<span className='hdclr'>el</span>:&nbsp;{this.props.data.elevaT}</span></div>
        <div id='time1'><span id='timeId1'>{this.props.data.currTime} &nbsp;<span id='timerGreen'>{this.props.data.onlyTime}</span>&nbsp;  {this.props.data.ampmPart}</span></div> 
        <div id='stajlTempNow' className='container'><span className={this.state.showDiv7}>{this.props.data.tempNow}</span> <span className={this.state.hideDiv7}>{this.state.tempNow}</span>    <div onClick={(e) => this.ChangeToF()} id='celzId'>{this.state.stringCels}</div>&nbsp;
        <div id='stajlTempNowA' className='container'><div className='spanId1'>(Feels like: &nbsp;</div><span className='tempInner'> <span className={this.state.showDiv7}>{this.props.data.tempNowA}</span> <span className={this.state.hideDiv7}>{this.state.tempNowA}</span>     <span>{this.state.stringCels}</span></span>)
        <div id ='windTemp'>(Wind chill: <span className='tempInner'><span className={this.state.showDiv7}>{this.props.data.windChillT}</span> <span className={this.state.hideDiv7}>{this.state.windChillT}</span><span>{this.state.stringCels}</span></span>)</div>
        <div id ='apparTempId'>(Apparent:&nbsp;<span className='tempInner'><span className={this.state.showDiv7}>{this.props.data.apparTemp}</span>  <span className={this.state.hideDiv7}>{this.state.apparTemp}</span>     <span>{this.state.stringCels}</span></span>)</div>
      </div>
      </div>
      <div id='minmaxCont'>
       <div className='minmax'>Max  (past 24h):&nbsp;&nbsp;<span onClick={(e) => this.changeMaxToF2() } className ='maxMinT'><span className={this.state.showDiv5}>{this.props.data.maxTemp}</span> <span className={this.state.hideDiv5}>{this.state.maxTemp}</span> <span  id='maxminToC'>{this.state.stringCels2}</span></span></div>
       <div className='minmax'>Min  &nbsp;(past 24h):&nbsp;<span className ='maxMinT'> <span className={this.state.showDiv6}>{this.props.data.minTemp}</span>  <span className={this.state.hideDiv6}>{this.state.minTemp}</span><span onClick={(e) => this.changeMinToF2() } id='minmaxToC'>{this.state.stringCels3}</span></span></div>
      </div>
      </div>
    )
  }
};
export default PanelHead;
