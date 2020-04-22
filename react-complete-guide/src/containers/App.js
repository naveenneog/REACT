import React, { Component } from 'react';
import styleClasses from './App.css';
import Persons from '../components/Persons/Persons';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styled from 'styled-components';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../Context/auth-context'
import { throws } from 'assert';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Constructor');
  }



  state = {
    persons: [
      { id: 'jsz12 ', name: 'Neo', age: 28 },
      { id: 'as233', name: 'Savi', age: 26 },
      { id: 'asd45', name: 'Spoorthi', age: 27 }
    ],
    otherState: 'some other value',
    isVisible: false,
    authenticated : false
  };

  static context = AuthContext;
  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate ');
    return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate ');
    return {message : 'Snapshot !'};
}
componentDidMount(){
  //For HTTP requests
  console.log('[App.js] componentDidMount');
}


componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[App.js] componentDidUpdate ',snapshot);
    
}
  static getDerivedStateFromProps(props , state){
    console.log('[App.js] derived state',props);
    return state;
  }
  deletePersonhandler = (personIndex) => {
    // const personlocal = this.state.persons.slice();
    const personlocal = [...this.state.persons];
    personlocal.splice(personIndex, 1);
    this.setState({ persons: personlocal });

  }
  //A method to change the name  without mutating the state
  //
  nameChangedHandler = (event, id) => {
    //Fetching the index of the person using findIndex method
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; // by returning true for finding id using arrow function
    });
    // fetch the local copy of the person object from the list using index
    const person2Change = {
      ...this.state.persons[personIndex]
    }

    //change the name of the object using the event target value
    person2Change.name = event.target.value;

    //lets get the copy of state array
    const persons = [...this.state.persons];
    // In the array modify the Person object
    persons[personIndex] = person2Change;
    //update the state
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    let visible = !this.state.isVisible;
    this.setState({
      isVisible: visible
    });
  }
 loginHandler = () =>{
  this.setState({authenticated:true});
 }
 
 
  render() {

    console.log('[App.js] render');
    let persons = null;

    // this.context(
    //   {authenticated: this.state.authenticated,
    //    login : this.loginHandler});

    if (this.state.isVisible) {
      persons = (
        <div>
          <Persons
            person={this.state.persons}
            changed={this.nameChangedHandler}
            click={this.deletePersonhandler}
          />
        </div>

      );

    }

    return (

      <div className={styleClasses.App}>
        <Cockpit
          title = {this.props.title}
          isVisible={this.state.isVisible}
          persons={this.state.persons}
          personLength = {this.state.persons.length}
          toggle={this.togglePersonsHandler}
          login = {this.loginHandler}
        />
        {persons}

      </div>

    );
    // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'wei hest'));
  }
}

//Wrapping for hover css
export default App;
