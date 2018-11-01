import React, { Component } from 'react';
import './App.css';

export default class Flexi extends Component {
    constructor(props){
        super(props);
        this.changedVal = this.changedVal.bind(this);
    }
    changedVal(event){
        this.setState({[event.target.name]: event.target.value});
    }
  render() {
    return (
      <div>
        {this.props.config.items.map((item, i)=>{
            switch(item.type){
                case "TextField":
                    return (<div key={i}>
                        {item.label} : &nbsp;&nbsp;
                        <input type="text" name={item.name} onChange={this.changedVal} /> <br></br> 
                        </div>)

                case "DropDown":
                    let values = item.values.map((value,i)=> <option key={i} value={value}>{value}</option>)
                    return (<div key={i}>
                        {item.label} : &nbsp;&nbsp;
                        <select name={item.name} onChange={this.changedVal}>
                        <option value="" disabled selected>Select your state</option>
                            {values}
                  </select><br></br> </div>)
            }
        })}
        <button onClick={()=>this.props.onSubmit(this.state)}>
            Submit
        </button>
      </div>
    );
  }
}


