import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
class App extends Component {
  state = {
    stringLength : 0 ,
    chars : [],
    userInput : ''
  }

  textChangeListener = (event) =>{
    console.log(event.target.value);
    const textValue = event.target.value;
    const individualChars = textValue.split('');
    console.log(individualChars.length);

    this.setState({ 
      stringLength:individualChars.length,
      chars : individualChars,
      userInput : textValue
    } 
    );
  }

  deleteCharHandler = (index) =>{
    const text = this.state.chars;
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState(
      { stringLength : updatedText.length,
        chars : text,
        userInput : updatedText,}
    );
  };

  render() {
    
    
    let charList = this.state.chars.map((ch ,index )  => {
      return <CharComponent 
              character = {ch} 
              key ={index}
              clicked={() => this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        
        <p className="App-intro">
          Guten tag, Ich bin Naveen .
          Wie geht es ihnen 
        </p>
        <input type = "text" 
        onChange = {(event) => this.textChangeListener(event)}
        value = {this.state.userInput}/>
        <p>Länge des eingegebenen Textes us {this.state.stringLength}</p>
       
        {/* <CharComponent character = "a" /> */}
        {charList}
        <ValidationComponent 
        length = {this.state.stringLength}/>
      </div>
    );
  }
}

export default App;
