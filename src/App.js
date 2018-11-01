import React, { Component } from 'react';
import './App.css';
import Flexi from "./Flexi";

const flexiConfig = {
  items: [
  {
  "name": "person_name",
  "label": "Person's Name",
  "type":"TextField",
  },
  {
  "name": "states",
  "label": "Person's state",
  "type": "DropDown",
  "values": [
      "Maharashtra",
      "Kerala",
      "Tamil Nadu"
             ]
  }
             ]
          };
class App extends Component {

  constructor(props){
    super(props);
    this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
    this.state={};
  }
  onFlexiSubmit(values){
      console.log(values);
      this.setState({ values });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong>Good Work Labs</strong>
          <Flexi onSubmit={this.onFlexiSubmit} config={flexiConfig}/>
          {this.state.values ? <div>{JSON.stringify(this.state.values)}</div> : <div> enter some data above and submit to get JSON output here</div>}
        </header>
      </div>
    );
  }
}

export default App;
