import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import Preview from './Preview';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {text: 'Hi'};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    //console.log(event.target.value);
    this.setState({text: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <h2>Markdown Previewer</h2>
          <Input text={this.state.text} handleChange={ this.handleInputChange }/>
          <Preview text={this.state.text}/>
        </div>        
      </div>
    );
  }
}

export default App;
