import React, { Component } from 'react';
import Button from './button';
import './App.css';
const grid = {
  display: 'grid',
  gridTemplateRows: '100px 100px 100px 100px',
  gridTemplateColumns: '100px 100px 100px 100px'
};
class App extends Component {
    state = {
      value: "",
      prevN: "",
      currentN: "",
      operator: ""
    };
    handleInput = val => {
      this.setState({value: this.state.value + val})
      if(this.state.operator === "ex"){
        this.setState({
          value:  "" + val,
          operator: "" 
        })
      }
    };
    addZeroToInput = val => {
      if (this.state.value !== "") {
        this.setState({ value: this.state.value + val });
      }
    }; 
    handleDecimel = val =>{  
      if(this.state.value.indexOf(".") === -1){
        this.setState({value:  this.state.value + val})
      }
    };
    handleVeiw = val =>{
      if(this.state.value === ""){
       return '0';
      }
       return val;
    };
    handleAdd = () =>{
      this.state.prevN = this.state.value;
      this.setState({value: ""});
      this.state.operator = 'plus';
    };
    handleSub = () =>{
      this.state.prevN = this.state.value;
      this.setState({value: ""});
      this.state.operator = 'sub';
    };
    handleMulti = () =>{
      this.state.prevN = this.state.value;
      this.setState({value: ""});
      this.state.operator = 'multi';
    };
    handleDiv = () =>{
      this.state.prevN = this.state.value;
      this.setState({value: ""});
      this.state.operator = 'div';
    };  
    handleSqrt = () =>{     
      if(this.state.value !== ""){     
        this.setState({
          value: Math.sqrt(parseInt(this.state.value)),
          operator:'ex'
        })
      }
    };
    handlePower = () =>{
      if(this.state.value !== ""){
        this.setState({
          value: Math.pow(parseInt(this.state.value), 2),
          operator:'ex'  
        })
      }
    }; 
    handleLog = () =>{
      if(this.state.value !== ""){
        this.setState({
          value: Math.log(parseInt(this.state.value)),
          operator:'ex'  
        })
      }
    }; 
    clear = () =>{this.setState({value: ""})};   
    operator = () =>{
      this.state.currentN = this.state.value; 
      if(this.state.operator === "plus"){
        this.setState({
          value: parseInt(this.state.prevN) + parseInt(this.state.currentN)
        })
      }
      if(this.state.operator === "sub"){
        this.setState({
          value: parseInt(this.state.prevN) - parseInt(this.state.currentN)
        })
      }   
      if(this.state.operator === "multi"){
        this.setState({
          value: parseInt(this.state.prevN) * parseInt(this.state.currentN)
        })
      }
      if(this.state.operator === "div"){
        this.setState({
          value: parseInt(this.state.prevN) / parseInt(this.state.currentN)
        })
      }  
      this.setState({operator:'ex'})   
    };
    render() {
        return (
          <div>
              <div style = {{width: '400px',height: '50px',fontSize: '43px', border: '2px solid black'}}
                >{this.handleVeiw(this.state.value)}</div>
              <div style = {grid}> 
                  <Button handleBtn = {this.handleInput}>1</Button> 
                  <Button handleBtn = {this.handleInput}>2</Button> 
                  <Button handleBtn = {this.handleInput}>3</Button> 
                  <Button handleBtn = {this.handleInput}>4</Button> 
                  <Button handleBtn = {this.handleInput}>5</Button> 
                  <Button handleBtn = {this.handleInput}>6</Button> 
                  <Button handleBtn = {this.handleInput}>7</Button> 
                  <Button handleBtn = {this.handleInput}>8</Button> 
                  <Button handleBtn = {this.handleInput}>9</Button> 
                  <Button handleBtn = {this.addZeroToInput}>0</Button> 
                  <Button handleBtn = {this.handleDecimel}>.</Button>    
                  <Button handleBtn = {this.handleAdd}>+</Button> 
                  <Button handleBtn = {this.handleSub}>-</Button> 
                  <Button handleBtn = {this.handleMulti}>*</Button> 
                  <Button handleBtn = {this.handleDiv}>/</Button> 
                  <Button handleBtn = {this.handleSqrt}>sqrt</Button> 
                  <Button handleBtn = {this.handlePower}>x^2</Button> 
                  <Button handleBtn = {this.handleLog}>LOG(x)</Button>                            
                  <Button handleBtn = {this.operator}>=</Button> 
                  <Button handleBtn = {this.clear}>Clear</Button> 
              </div>
          </div>
        );
    }
}

export default App;

