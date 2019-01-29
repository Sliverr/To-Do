import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(props){

    super(props);
    this.state = {isBtnPressed: false,
                  plannedEvent: ' '}


    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  handleClick = () =>  {
    this.setState({
      isBtnPressed: !this.state.isBtnPressed
    });
    return(this.state.eventPlanned);
  }

  handleChange(event){

    this.setState({plannedEvent: event.target.plannedEvent});

  }


  render() {
    return (
      <div className="App">
        <h1>Your Daily Planner</h1>
        <div>
       <input type="text" value={this.state.plannedEvent} onChange={this.handleChange} />
       <button onClick={this.handleClick}>Submit</button>
       </div>
      </div>
    );
  }
}
  

export default App;
