import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      users:[
        {name:'Naveen'},
        {name:'Spoorthi'}
      ]
  }

  userNameHandler = (event) => {
    console.log('Entered user name');
    this.setState({
      users:[
        {name:event.target.value},
        {name:event.target.value}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Assignment - 01</h1>
        <ul>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there </li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>

        </ul>
        <UserInput changed = {this.userNameHandler} 
              name = {this.state.users[0].name}/>
        <UserOutput name = {this.state.users[0].name}/>
        <UserOutput name = {this.state.users[1].name} />
      </div>
    );
  }
}

export default App;
