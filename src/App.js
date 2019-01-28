import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props){

    super(props);
    this.state = {isBtnPressed: false};


    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(state => ({
      isBtnPressed: !state.isBtnPressed
    }));
  }


  render() {
    return (
      <div className="App">
        <h1>Your Daily Planner</h1>
        <Boxes />
      </div>
    );
  }
}
  
  class Boxes extends Component{

    render(){
      return (
        <div>
       <input type="text" />
       <button onClick={this.handleClick}>Submit</button>
       </div>
      );
    }
  }

export default App;
