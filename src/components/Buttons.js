import React from "react";

class Buttons extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      const pressedDiv = {
        background: '#5D5F63'
      }
      const negativeDiv ={
        background: 'red',
        color: 'black'
      }
      return (
        <div id="button-container">
          {!this.props.mainState.add ? <button  id="add" onClick={this.props.toggleAdd}><h2>+</h2></button> :
                        <button  id="add" onClick={this.props.toggleAdd} style={pressedDiv}><h2>+</h2></button>}
          {this.props.mainState.subtract ? <button  id="subtract" onClick={this.props.toggleSubtract} style={pressedDiv}><h2>-</h2></button> :
           this.props.mainState.negative ? <button  id="subtract" onClick={this.props.toggleSubtract} style={negativeDiv}><h2>-</h2></button> :
                        <button  id="subtract" onClick={this.props.toggleSubtract}><h2>-</h2></button>}
          {!this.props.mainState.divide ? <button  id="divide" onClick={this.props.toggleDivide}><h2>/</h2></button> :
                        <button  id="divide" onClick={this.props.toggleDivide} style={pressedDiv}><h2>/</h2></button>}
          {!this.props.mainState.multiply ? <button  id="multiply" onClick={this.props.toggleMultiply}><h2>*</h2></button> :
                        <button  id="multiply" onClick={this.props.toggleMultiply} style={pressedDiv}><h2>*</h2></button>}
          
          <button  id="zero"  onClick={this.props.handleNum}><h2>0</h2></button>
          <button  id="one"   onClick={this.props.handleNum}><h2>1</h2></button>
          <button  id="two"   onClick={this.props.handleNum}><h2>2</h2></button>
          <button  id="three" onClick={this.props.handleNum}><h2>3</h2></button>
          <button  id="four"  onClick={this.props.handleNum}><h2>4</h2></button>
          <button  id="five"  onClick={this.props.handleNum}><h2>5</h2></button>
          <button  id="six"   onClick={this.props.handleNum}><h2>6</h2></button>
          <button  id="seven" onClick={this.props.handleNum}><h2>7</h2></button>
          <button  id="eight" onClick={this.props.handleNum}><h2>8</h2></button>
          <button  id="nine"  onClick={this.props.handleNum}><h2>9</h2></button>
          
          <button  id="clear"   onClick={this.props.handleClear}><h2>C</h2></button>
          <button  id="equals"  onClick={this.props.handleEnter}><h2>=</h2></button>
          <button  id="decimal" onClick={this.props.handleDecimal}><h2>.</h2></button>
        </div>
        
      )
    }
}

export default Buttons;