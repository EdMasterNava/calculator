import React from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './components/css/App.css';

const values = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  decimal: '.'
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      display: 0,
      saveNum: 0,
      add: false,
      subtract: false,
      multiply: false,
      divide: false,
      clear: false,
      negative: false
    }
    this.handleClear = this.handleClear.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleSubtract = this.toggleSubtract.bind(this);
    this.toggleMultiply = this.toggleMultiply.bind(this);
    this.toggleDivide = this.toggleDivide.bind(this);
  }
  handleClear(){
    this.setState({display: 0,
                   saveNum: 0,
                   add: false,
                   subtract: false,
                   multiply: false,
                   divide: false,
                   clear: false,
                   negative: false});
  }
  handleNum(event){
    const num = values[event.currentTarget.id];
    if(this.state.clear){
      this.setState({display: 0, clear: false})
    }
    if(this.state.negative){
      this.setState(prevState => ({display: parseFloat(prevState.display + num) * -1}));
    }else{
      this.setState(prevState => ({display: parseFloat(prevState.display + num)}));
    }
  }
  handleDecimal(){
    const displayStr = this.state.display.toString();
    if(this.state.clear){
      this.setState({display: 0, clear: false})
    } 
    if(!displayStr.includes('.')){
      this.setState(prevState => ({display: prevState.display + '.'}))
    } 
  }
  handleEnter(){
    if(this.state.add){
      this.setState(prevState =>({display: prevState.saveNum + prevState.display, add: false, clear: true}))
    }
    if(this.state.subtract){
      this.setState(prevState =>({display: prevState.saveNum - prevState.display, subtract: false, clear: true}))
    }
    if(this.state.multiply){
      this.setState(prevState =>({display: prevState.saveNum * prevState.display, multiply: false, clear: true}))
    }
    if(this.state.divide){
      this.setState(prevState =>({display: prevState.saveNum / prevState.display, divide: false, clear: true}))
    }
    this.setState(({negative: false}));
  }
  toggleAdd(){
    this.setState(prevState => ({add: true,
                                 subtract: false,
                                 multiply: false,
                                 divide: false,
                                 clear: true, 
                                 saveNum: prevState.display}));
  }
  toggleSubtract(){
    if([this.state.multiply, this.state.divide].includes(true)){
      this.setState(prevState => ({negative: !prevState.negative}));
    }else{
      this.setState(prevState => ({subtract: true, 
                                   add: false,
                                   clear: true, 
                                   saveNum: prevState.display}));
    }
    
  }
  toggleMultiply(){
    this.setState(prevState => ({multiply: true,
                                 subtract: false,
                                 add: false,
                                 divide: false,
                                 clear: true, 
                                 saveNum: prevState.display}));
  }
  toggleDivide(){
    this.setState(prevState => ({divide: true,
                                 subtract: false,
                                 multiply: false,
                                 add: false,
                                 clear: true, 
                                 saveNum: prevState.display}));
  }
  render(){
    return (
      <div id="background">
        <div id="main-container">
          <Display display={this.state.display} 
                   topDisplay={this.state.topDisplay}/>
          <Buttons handleNum={this.handleNum}
                   handleDecimal={this.handleDecimal}
                   handleClear={this.handleClear}
                   handleEnter={this.handleEnter}
                   toggleAdd={this.toggleAdd}
                   toggleSubtract={this.toggleSubtract}
                   toggleMultiply={this.toggleMultiply} 
                   toggleDivide={this.toggleDivide}
                   mainState={this.state}/>
        </div>
      </div>
    )
  }
}

export default App;
