import React from 'react';
import { Component } from 'react';
import './App.css';
import WeatherApp from './component/WeatherApp';



class PanelBody extends Component {
  constructor(props){
    super(props);   
    this.expandF = this.expandF.bind(this);
    this.departF = this.departF.bind(this);
    this.changeToF1 = this.changeToF1.bind(this);
    this.ChangeToInhg = this.ChangeToInhg.bind(this);
    this.ChangeToFT = this.ChangeToFT.bind(this);
    this.KmToMi = this.KmToMi.bind(this);
    this.expandNightF1 = this.expandNightF1.bind(this);
    this.toglers = [false, false, false, false, false, false,false]

   

    this.unit = this.props.dataB.unit;
    console.log('toje:',this.unit)

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
  let depCorF = {...this.props.dataB.depCorF, hit: this.unit[1], hit1: this.unit[0]}
  this.setState({
      hideDiv1:hideDiv1.hit1,
      showDiv1:showDiv1.hit1
  })
   if (this.toglers[0] === false){
       this.setState({pointDew:pointDew.toF, depCorF: depCorF.hit})
       this.toglers[0] = true
   } else {
       this.setState({pointDew:pointDew.toFor, depCorF: depCorF.hit1})
       this.toglers[0] = false;
   }
}


departF(event){
    let showDiv = {...this.state.showDiv, hit1:this.state.hideDiv}
    let hideDiv = {...this.state.hideDiv, hit1:this.state.showDiv}
    this.setState({hideDiv:hideDiv.hit1, showDiv:showDiv.hit1})
    let departTemp = {...this.props.dataB.departTemp, toDepF:this.props.dataB.departTempF, toDepFor:this.props.dataB.departFor};
    let celsfahr ={...this.props.dataB.celsfahr, hit:this.unit[1], hit1: this.unit[0]};
    if (this.toglers[1] === false){
       this.setState({departTemp: departTemp.toDepF, celsfahr:celsfahr.hit})
       this.toglers[1] = true
     } else {
       this.setState({departTemp:departTemp.toDepFor, celsfahr:celsfahr.hit1})
       this.toglers[1] = false;
     }
  }

  KmToMi(event){
    let showDiv2 = {...this.state.showDiv2, hit1:this.state.hideDiv2}
    let hideDiv2 = {...this.state.hideDiv2, hit1:this.state.showDiv2}
    let visible = { ...this.props.dataB.visible, to1: this.props.dataB.visibleMi, to2: this.props.dataB.visibleFor }
    let kmmi =  {...this.props.dataB.kmmi, hit1:this.unit[5], hit2:this.unit[4]}
    this.setState({hideDiv2:hideDiv2.hit1, showDiv2:showDiv2.hit1})
    if(this.toglers[2] === false){
        this.setState({visible: visible.to1, kmmi:kmmi.hit1})
        this.toglers[2] = true
    } else {
        this.setState({ visible: visible.to2, kmmi:kmmi.hit2 })
        this.toglers[2] = false;
    }
}


ChangeToInhg(event){
  let showDiv3 = {...this.state.showDiv3, hit1:this.state.hideDiv3}
  let hideDiv3 = {...this.state.hideDiv3, hit1:this.state.showDiv3}
  let currPress = {...this.props.dataB.currPress, toIng:this.props.dataB.pressInhg, toIngFor:this.props.dataB.pressInhgFor}
  let inhmb  = {...this.props.dataB.inhnm, hit:this.unit[2], hit1: this.unit[3]}
  this.setState({hideDiv3:hideDiv3.hit1, showDiv3:showDiv3.hit1})
   if (this.toglers[3] === false){
       this.setState({currPress:currPress.toIng, inhmb:inhmb.hit1})
       this.toglers[3] = true
   }else {
       this.setState({currPress:currPress.toIngFor, inhmb:inhmb.hit})
       this.toglers[3] = false;
   }
}



ChangeToFT(event){
  let showDiv4 = {...this.state.showDiv4, hit1:this.state.hideDiv4}
  let hideDiv4 = {...this.state.hideDiv4, hit1:this.state.showDiv4}
  let ceeling1 = {...this.props.dataB.ceeling1, toFT:this.props.dataB.ceelFit, toForFT:this.props.dataB.ceelFitFor}
  let fitorM = {...this.props.dataB.fitorM, hit: this.unit[6], hit1: this.unit[7]}
  this.setState({hideDiv4:hideDiv4.hit1, showDiv4:showDiv4.hit1})
   if (this.toglers[4] === false){
       this.setState({ceeling1:ceeling1.toFT, fitorM: fitorM.hit})
       this.toglers[4] = true
   }else {
       this.setState({ceeling1:ceeling1.toForFT, fitorM: fitorM.hit1})
       this.toglers[4] = false;
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
  this.setState({stateid:stateid.hit1, stateid1:stateid1.hit1})
  this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
  if(classArg === 'c1b'){
    return false;
  }else if(classArg === 'c2g'){
  
  if (this.toglers[5] === false){
      this.setState({blgrx:blgrx.hit1, blgry:blgry.hit1, toggleDiv:toggleDiv.hit1})
        if(this.state.expState4 === 'showCls'){
      this.setState({expState2:expState2.hit2, expState:expState.hit2, stateid:stateid.hit1, stateid1:stateid1.hit2}) 
      this.props.parentCb(this.colorB, this.tempB, this.tempInnB)
        }else{
      this.setState({
          expState2:expState2.hit1, 
          expState:expState.hit1,
          stateid:stateid.hit2,
          stateid1:stateid1.hit1
      }) 
      this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
        }
        this.toglers[5] = true
  } else{
      this.setState({expState2:expState2.hit1, expState:expState.hit2, toggleDiv:toggleDiv.hit2, blgrx:blgrx.hit2, blgry:blgry.hit2}) 
      this.toglers[5] = false;
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
    if (this.toglers[6] === false){
        this.setState({
           expState:expState.hit1,
           expState2:expState2.hit1,
           expState3:expState3.hit1,
           expState4:expState4.hit1,
           blgrx:blgrx.hit2,
           blgry:blgry.hit2,
           toggleDiv:toggleDiv.hit1,
           valCont:valCont.hit1
        })  
       
       this.props.parentCb(this.colorB, this.tempB, this.tempInnB)
       this.toglers[6] = true
   } else{
        this.setState({
           expState:expState.hit1,
           toggleDiv:toggleDiv.hit1,
           blgrx:blgrx.hit2,
           blgry:blgry.hit2,
           expState2:expState2.hit1,
           expState3:expState3.hit2,
           expState4:expState4.hit2,
           valCont:valCont.hit2
        })  
       this.props.parentCb(this.colorR, this.tempR, this.tempInnR)
       this.toglers[6] = false;
   }
};


  render(){
    return(
        <div> 
        <WeatherApp 
        appProp ={this.props.dataB} 
        childProp = {this.state}
        mainF = {this.props.mainF}
        siteFormN = {this.props.siteFormN}
        methods = {this}
        />
        </div>
    )
  };
}
export default PanelBody;
