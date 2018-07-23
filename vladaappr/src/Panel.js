
import React from 'react';
import { Component } from 'react';
import './App.css';
import axios from 'axios';




class PanelHead extends Component{
  constructor(props){
    super(props);   
    this.changeMaxToF2 = this.changeMaxToF2.bind(this);
    this.changeMinToF2 = this.changeMinToF2.bind(this);
    this.togleR = false;
    this.cels  = '℃';
    this.fahr = '℉';
    this.hide = 'hideDiv'
    this.show = 'showDiv'
    this.state = {
      hideDiv5: this.hide,
      showDiv5:this.show,
      hideDiv6: this.hide,
      showDiv6:this.show,
      maxTemp:'',
      maxTempF:"",
      maxTempFor:'',
      minTemp:'',
      minTempF:'',
      minTempFor:''
    }
};

  changeMaxToF2(event){
    let showDiv5 = {...this.state.showDiv5, hit1:this.state.hideDiv5}
    let hideDiv5 = {...this.state.hideDiv5, hit1:this.state.showDiv5}
    let maxTemp = {...this.props.data.maxTemp, toF:this.props.data.maxTempF, toFor:this.props.data.maxTempFor}
    let stringCels2 = {...this.props.data.stringCels1, hitF: this.fahr, hitF1: this.cels};
    this.setState({hideDiv5:hideDiv5.hit1})
    this.setState({showDiv5:showDiv5.hit1})
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
    let showDiv6 = {...this.state.showDiv6, hit1:this.state.hideDiv6}
    let hideDiv6 = {...this.state.hideDiv6, hit1:this.state.showDiv6} 
    let minTemp = {...this.props.data.minTemp, toF:this.props.data.minTempF, toFor:this.props.data.minTempFor}
    let stringCels3 = {...this.props.data.stringCels2, hitF: this.fahr, hitF1: this.cels};
    this.setState({hideDiv6:hideDiv6.hit1})
    this.setState({showDiv6:showDiv6.hit1})
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
       <div className='minmax'>Max  (past 24h):&nbsp;<span className ='maxMinT'><span className={this.state.showDiv5}>{this.props.data.maxTemp}</span> <span className={this.state.hideDiv5}>{this.state.maxTemp}</span> <span onClick={(e) => this.changeMaxToF2() } id='maxminToC'>{this.props.data.stringCels2}</span></span></div>
       <div className='minmax'>Min  &nbsp;(past 24h):&nbsp;<span className ='maxMinT'> <span className={this.state.showDiv6}>{this.props.data.minTemp}</span>  <span className={this.state.hideDiv6}>{this.state.minTemp}</span>   <span onClick={(e) => this.changeMinToF2() } id='minmaxToC'>{this.props.data.stringCels3}</span></span></div>
      </div>

      </div>
    )
  }
};
export default PanelHead;
