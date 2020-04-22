import React , { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(state,props){
    //     console.log('[persons.js] getDerivedStateFromProps ');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log('[persons.js] shouldComponentUpdate ');
        if(nextProps.person !== this.props.person){
            return true;
        }else{
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[persons.js] getSnapshotBeforeUpdate ');
        return {message : 'Snapshot !'};
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[persons.js] componentDidUpdate ',snapshot);
        
    }
    //Used for clean up
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount ');
    }
    render(){
        console.log('[persons.js] rendering ....');
        return this.props.person.map((person , index) => {
            return <Person 
                click = {() => this.props.click(index)}
                name ={person.name} 
                age = {person.age}
                changed = {(event) => this.props.changed(event, person.id)}/>
        });
       
    }
    
};



export default Persons;