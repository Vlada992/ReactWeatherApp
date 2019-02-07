import React from 'react';
import { Component } from 'react';
import '../App.css';
import moon1 from '../images/moon1.png';
import sun1 from '../images/sun1.png'; 
import thunder1 from '../images/lightning1.png';
import percip1 from '../images/sleet1.png'; 
import allW1 from '../images/all1.png';
import uvInd from '../images/uvray1.png';
import tree from '../images/treePolpng.png';
import grass1 from '../images/grass1.png';
import grass2 from '../images/grass2.png';
import virus1 from '../images/virus1.png';
import air1 from '../images/air1.png';
import h24 from '../images/24departpng.png';
import cloudceel from '../images/humidNight.png';
import humidit from '../images/humidity1.png';
import cooler from '../images/cooler1.png';
import wind from '../images/windturbines1.png';
import windDir from '../images/compass1.png';
import eye from '../images/eye1.png';
import pressure from '../images/pressure1.png';
import clouding from '../images/cloudiness1.png';
import dayarrow from '../images/day1arrow.png';
import nightarrow from '../images/night1arrow.png';
import cloudDay from '../images/cloudDay.png';
import pressDay from '../images/pressDay.png';
import eyeDay from '../images/eyeDay.png';
import windDday from '../images/windDday.png';
import windSday from '../images/windSday.png';
import airDay from '../images/airDay.png';
import humidDay from '../images/humidDay.png';
import hour24Day from '../images/hour24Day.png';
import fanDay from '../images/fanDay.png';
import groundDay from '../images/groundDay.png';
import virusDay from '../images/virusDay.png';
import grassDay from '../images/grassDay.png';
import treeDay from '../images/treeDay.png';
import uvDay from '../images/uvDay.png';
import rainsunDay from '../images/rainsunDay.png';
import rainsnow1Day from '../images/rainsnow1Day.png';
import rainsnow2Day from '../images/rainsnow2Day.png';
import lightningDay from '../images/lightningDay.png';
import sunDay from '../images/sunDay.png';
import moonDay from '../images/moonDay.png';



class WeatherApp extends Component {
  constructor(props){
    super(props);   
};


  render(){
      const st = this.props.appProp, ch = this.props.childProp;
      const mt = this.props.methods;
    return(    
        <div className={st.stlState} id='bodyDiv'> 
        
        <form id='hitForm' onSubmit={ (e)=> this.props.mainF(e) }>
        <input onChange = {(e) => this.props.siteFormN(e, 'name')} type="text" className='form-control' id='siteName' placeholder='Type city...' /> 
         <input onChange = {(e) => this.props.siteFormN(e, 'name1')} type="text" className='form-control' id='siteName1' placeholder='Type country...'  /> 
         <input type='submit' className='form-control' id='submitName'/>
        </form> 

        <div className={ch.toggleDiv}>
        <div id={ch.valCont}>
        <div  className={ch.expState3} id='stajlClear'>  <span>{String(st.sunRise).slice(0, 16)}</span> &nbsp;&nbsp; {st.clearW} &nbsp;<span className='stajlClear1'  onClick={()=> mt.expandNightF1()} title={st.regDate}>(Daylight)<img  alt='arrow' src={dayarrow}/></span>&nbsp;&nbsp;
         <div id ='phraseWet'>(<span  title={st.phraseTitl} className='inBrack'>{st.phraseW}</span>) &nbsp;&nbsp; <span><img id='weatherImg1' alt='accuweather.com' src={`http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${st.weathIcn1 === 0 ? '0' + 1 : st.weathIcn1}-s.png`}/></span>  </div>   </div>
        
        <div  className={ch.expState4} id='stajlClearBl'> <span>{String(st.sunRise).slice(0, 16)}</span>     {st.clearW} &nbsp;<span className='stajlClear2'  onClick={()=> mt.expandNightF1()} title={st.nightDate}>(Night)<img alt='arrow' src={nightarrow}/></span>&nbsp;&nbsp;
        <div id ='phraseWet'>(<span  title={st.nightPhraseL} className='inBrack1'>{st.nightPhrase}</span>)&nbsp;&nbsp; <span><img id='weatherImg2' alt='accuweather.com' src={`http://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${st.nightIcn1 === 0 ? '0' + 1 : st.nightIcn1}-s.png`}/></span></div></div>
        <div className={ch.expState3} id ='cloudCover'><img className='icnImg' alt='cloudiness'  src={cloudDay}/> &nbsp;&nbsp;Cloudiness:<span className='allRed'>&nbsp; {st.cloudCov}&#37;</span></div>
        <div className={ch.expState4} id ='cloudCover1'><img className='icnImg' alt='cloudiness at night'  src={clouding}/> &nbsp;&nbsp;Cloudiness:<span className='allRed'>&nbsp; {st.nightCloud}&#37;</span></div>     
        <div className={ch.expState3} id='pressTitl'><img className='icnImg' alt='pressure'  src={pressDay}/> &nbsp;&nbsp;Pressure:&nbsp;<div onClick={()=> mt.ChangeToInhg()} id ='stajlPress'> &nbsp;<span className={ch.showDiv3}>{st.currPress}</span> &nbsp;<span className={ch.hideDiv3}>{ch.currPress}</span>&nbsp;   
        <span id='unitToI'>{ch.inhmb}</span> &nbsp; (<span className='inBrack'>{st.pressTend}</span>)</div></div>       
        <div className={ch.expState4} id='pressTitl1'><img className='icnImg' alt='pressure'  src={pressure}/> &nbsp;&nbsp;Pressure:&nbsp;<div onClick={()=> mt.ChangeToInhg()} id ='stajlPress1'> &nbsp;<span className={ch.showDiv3}>{st.currPress}</span> &nbsp;<span className={ch.hideDiv3}>{ch.currPress}</span>&nbsp;   <span id='unitToI'>{ch.inhmb}</span>
         &nbsp; (<span className='inBrack'>{st.pressTend}</span>)</div></div>       
        <div className={ch.expState3} id ='visibleId'><img className='icnImg' alt='visibility'  src={eyeDay}/> &nbsp;&nbsp; Visibility:&nbsp;<span onClick={()=> mt.KmToMi() } id='redVisb'><span className={ch.showDiv2}>{st.visible}</span> <span className={ch.hideDiv2}>{ch.visible}</span>    </span></div>       
        <div className={ch.expState4} id ='visibleId1'><img className='icnImg' alt='visibility'  src={eye}/> &nbsp;&nbsp; Visibility:&nbsp;<span onClick={()=> mt.KmToMi() } id='redVisb1'><span className={ch.showDiv2}> {st.visible}  </span> <span className={ch.hideDiv2}> {ch.visible}    </span>    </span></div>      
        
        <div  className={ch.expState3} id ='windId'><img className='icnImg' alt='wind direction'  src={windDday}/> &nbsp;&nbsp;Wind direction:&nbsp; <span id='redWindDir'>{st.windWay}</span></div>
        <div  className={ch.expState4} id ='windId1'><img className='icnImg' alt='wind direction at night'  src={windDir}/> &nbsp;&nbsp;Wind direction:&nbsp; <span id='redWindDir'>{st.nightWindDir}</span></div>

        <div  className={ch.expState3} id ='windSpid'><img className='icnImg' alt='wind speed'  src={windSday}/> &nbsp;&nbsp;Wind speed: <span className='dividerId'>&#8739;</span>&nbsp;gust: &nbsp; <span className='spidWind'>{st.windSpd}</span>&nbsp; <span className='spidWind'> <span className='dividerId'>&#8739;</span>&nbsp;     {st.windGust}</span></div>         
        <div  className={ch.expState4} id ='windSpid1'><img className='icnImg' alt='wind speed at night'  src={wind}/> &nbsp;&nbsp;Wind speed: <span className='dividerId'>&#8739;</span>&nbsp;gust: &nbsp; <span className='spidWind'>{st.nightWindS}</span>&nbsp; <span className='spidWind'> <span className='dividerId'>&#8739;</span>&nbsp;     {st.nightWindG}</span></div>         
        <div  className={ch.expState3} id='devPoint'><img className='icnImg' alt='dew point'  src={airDay}/> &nbsp;&nbsp;Dew Point: &nbsp;<span className='spidWind1'><span className={ch.showDiv1}>{st.pointDew}</span>  <span className={ch.hideDiv1}>{ch.pointDew}</span>  <span onClick={()=> mt.changeToF1()} id='CtoF'>&nbsp;{ch.depCorF}</span> </span></div>      
        <div  className={ch.expState4} id='devPoint1'><img className='icnImg' alt='dew point'  src={cooler}/> &nbsp;&nbsp;Dew Point: &nbsp;<span className='spidWind1'><span className={ch.showDiv1}>{st.pointDew}</span>  <span className={ch.hideDiv1}>{ch.pointDew}</span>  <span onClick={()=> mt.changeToF1()} id='CtoF'>&nbsp;{ch.depCorF}</span> </span></div>      
        <div className={ch.expState3} id ='humiditR'><img className='icnImg' alt='humidity'  src={humidDay}/> &nbsp;&nbsp;Relative humidity:&nbsp;<span className='spidWind'>{st.relHumid}&#37;</span></div>
        <div className={ch.expState4} id ='humiditR1'><img className='icnImg' alt='humidity'  src={humidit}/> &nbsp;&nbsp;Relative humidity:&nbsp;<span className='spidWind'>{st.relHumid}&#37;</span></div>
        <div className={ch.expState3} id='cellId'><img className='icnImg' alt='ceeling'  src={cloudDay}/> &nbsp;&nbsp;Ceeling: &nbsp; <span id='cellInner1'><span className={ch.showDiv4}>{st.ceeling1}</span> <span className={ch.hideDiv4}>{ch.ceeling1}</span> <span  onClick={()=> mt.ChangeToFT() } id='cellInner'>{ch.fitorM}</span></span></div>
        <div className={ch.expState4} id='cellId1'><img className='icnImg' alt='ceeling'  src={cloudceel}/> &nbsp;&nbsp;Ceeling: &nbsp; <span id='cellInner11'><span className={ch.showDiv4}>{st.ceeling1}</span> <span className={ch.hideDiv4}>{ch.ceeling1}</span> <span  onClick={()=> mt.ChangeToFT() } id='cellInnerN'>{ch.fitorM}</span></span></div>
        <div className={ch.expState3} id='departId'><img className='icnImg' alt='24h temp departure'  src={hour24Day}/> &nbsp;&nbsp;24h temp departure:&nbsp;<span id='deppTemp'> <span className={ch.showDiv}> {st.departTemp}</span>  <span className={ch.hideDiv}> {ch.departTemp} </span> <span onClick={()=> mt.departF()} id='departCf'>{ch.celsfahr}</span></span></div>
        <div className={ch.expState4} id='departId1'><img className='icnImg' alt='24h temp departure'  src={h24}/> &nbsp;&nbsp;24h temp departure:&nbsp;<span id='deppTemp1'> <span className={ch.showDiv}> {st.departTemp}</span>  <span className={ch.hideDiv}> {ch.departTemp} </span> <span onClick={()=> mt.departF()} id='departCf1'>{ch.celsfahr}</span></span></div>
       
       </div>
       
        </div>




        <div className={[ch.expState, ch.stateid].join(' ')}>
        <span  className={[ch.expState, 'expandCont'].join(' ')} id='stajlClearAll' title={st.regDate}><span className ='stajlClear1Fix'> (Daylight)</span> &nbsp;  {String(st.sunRise).slice(0, 16)}</span>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Air pollution'  src={fanDay}/> &nbsp;&nbsp;{st.airPlnN}&nbsp;({st.airPlnT}, pollution): &nbsp;</span>  {st.airPlnVT}&nbsp;(<span className='catOrn'>{st.airPlnC}</span>)</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='grass pollution'  src={groundDay}/> &nbsp;&nbsp;{st.grassPlnN}(pollution):&nbsp;</span> {st.grassPlnV} &#13221; &nbsp;(<span className='catOrn'>{st.grassPlnC}</span>)</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='mold pollution'  src={virusDay}/> &nbsp;&nbsp;{st.moldN}(pollution):&nbsp;</span> {st.moldV} &#13221; &nbsp;(<span className='catOrn'>{st.moldC}</span>)</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Ragweed pollution'  src={grassDay}/> &nbsp;&nbsp;{st.weedN}(pollution):&nbsp;</span> {st.weedV} &#13221; &nbsp;(<span className='catOrn'>{st.weedC}</span>)</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Tree pollution'  src={treeDay}/> &nbsp;&nbsp;{st.treeN}(pollution):&nbsp;</span> {st.treeV} &#13221; &nbsp;(<span className='catOrn'>{st.treeC}</span>)</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='UV'  src={uvDay}/> &nbsp;&nbsp;{st.uvN}:&nbsp;</span> {st.uvV} &nbsp;(<span className='catOrn'>{st.uvC}</span>)</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation all'  src={rainsunDay}/> &nbsp;&nbsp;Sun/rain/snow/ice (hours):&nbsp;</span> {st.percitipH} &nbsp;</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation probability'  src={rainsnow1Day}/> &nbsp;&nbsp;Rain/snow/ice (probability):&nbsp;</span> {st.percitProb} &nbsp;</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation value'  src={rainsnow2Day}/> &nbsp;&nbsp;Rain/snow/ice (value):&nbsp;</span> {st.percitVal} &nbsp;</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='thunder'  src={lightningDay}/> &nbsp;&nbsp;Thunderstorm (probability):&nbsp;</span> {st.thunderProb} &nbsp;</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='sun'  src={sunDay}/> &nbsp;&nbsp;Sun (rise/set):&nbsp;</span> <span title={st.sunRise}>{String(st.sunRise).slice(16, 24)}</span>  /  <span title={st.sunSet}>{ String(st.sunSet).slice(16, 24)}</span> &nbsp;</div>
        <div className={[ch.expState, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='moon'  src={moonDay}/> &nbsp;&nbsp;Moon (rise/set/age):&nbsp;</span> <span title={st.moonRise}>{String(st.moonRise).slice(16, 21)}</span>  /  <span title={st.moonSet}>{ String(st.moonSet).slice(16, 21)}</span> &nbsp;<span className='catOrn' title={st.moonPhase}>({st.moonAge})</span>&nbsp;</div>
        </div>


        <div className={[ch.expState2, ch.stateid1].join(' ')}>
        <span  className={[ch.expState2, 'expandCont'].join(' ')} id='stajlClearAll1'  title={st.nightDate}><span   className={[ch.blgrx, 'stajlClear2Fix'].join(' ')} >(Night)</span> &nbsp;  {String(st.sunRise).slice(0, 16)}</span>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Air pollution'  src={air1}/> &nbsp;&nbsp;{st.airPlnN}&nbsp;({st.airPlnT}, pollution): &nbsp;</span>  {st.airPlnVT}&nbsp;(<span className='catOrn'>{st.airPlnC}</span>)</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='grass pollution'  src={grass2}/> &nbsp;&nbsp;{st.grassPlnN}(pollution):&nbsp;</span> {st.grassPlnV} &#13221; &nbsp;(<span className='catOrn'>{st.grassPlnC}</span>)</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='mold pollution'  src={virus1}/> &nbsp;&nbsp;{st.moldN}(pollution):&nbsp;</span> {st.moldV} &#13221; &nbsp;(<span className='catOrn'>{st.moldC}</span>)</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Ragweed pollution'  src={grass1}/> &nbsp;&nbsp;{st.weedN}(pollution):&nbsp;</span> {st.weedV} &#13221; &nbsp;(<span className='catOrn'>{st.weedC}</span>)</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='Tree pollution'  src={tree}/> &nbsp;&nbsp;{st.treeN}(pollution):&nbsp;</span> {st.treeV} &#13221; &nbsp;(<span className='catOrn'>{st.treeC}</span>)</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='UV'  src={uvInd}/> &nbsp;&nbsp;{st.uvN}:&nbsp;</span> {st.uvV} &nbsp;(<span className='catOrn'>{st.uvC}</span>)</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation all'  src={allW1}/> &nbsp;&nbsp;rain/snow/ice (hours):&nbsp;</span> {st.nightPerc} &nbsp;</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation probability'  src={percip1 }/> &nbsp;&nbsp;Rain/snow/ice (probability):&nbsp;</span> {st.nightProb} &nbsp;</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='precipitation value'  src={percip1}/> &nbsp;&nbsp;Rain/snow/ice (value):&nbsp;</span> {st.nightVal} &nbsp;</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='thunder'  src={thunder1 }/> &nbsp;&nbsp;Thunderstorm (probability):&nbsp;</span> {st.nightTund} &nbsp;</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='sun'  src={sun1}/> &nbsp;&nbsp;Sun (rise/set):&nbsp;</span> <span title={st.sunRise}>{String(st.sunRise).slice(16, 24)}</span>  /  <span title={st.sunSet}>{ String(st.sunSet).slice(16, 24)}</span> &nbsp;</div>
        <div className={[ch.expState2, 'expandCont'].join(' ')}><span className='airCls'><img className='icnImg' alt='moon'  src={moon1}/> &nbsp;&nbsp;Moon (rise/set/age):&nbsp;</span> <span title={st.moonRise}>{String(st.moonRise).slice(16, 21)}</span>  /  <span title={st.moonSet}>{ String(st.moonSet).slice(16, 21)}</span> &nbsp;<span className='catOrn' title={st.moonPhase}>({st.moonAge})</span>&nbsp;</div>
        </div>


        <div><i title='Show one part' onClick={()=> mt.expandF(ch.blgry)} className={["fa fa-circle circO", ch.blgry].join(' ')}></i>&nbsp;&nbsp; <i title='Show one part' onClick={()=> mt.expandF(ch.blgrx)} className={["fa fa-circle circO", ch.blgrx].join(' ')}></i>&nbsp;&nbsp; </div>
        </div>
        
    )
  }


}
export default WeatherApp;
