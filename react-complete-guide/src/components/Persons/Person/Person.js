import React , { Component } from 'react';
import styledClasses from './Person.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import AuthContext from '../../../Context/auth-context';

class Person extends Component {
  
    constructor(props){
        super(props);

    }
    static contextType = AuthContext;
    componentDidMount() {
        //this.inputElement.focus();
        console.log(this.context.authenticated);
    }
    render(){
        console.log('[Person.js] rendering ...');
        return (

            // <div className = {styledClasses.Person} >
            
                <React.Fragment>
                    {this.context.authenticated ? <p> Please login </p> : <p>Authenticated </p>}
                <p onClick ={this.props.click}>
                    Ich bin {this.props.name} und ich bin {this.props.age} jahre alt.
                    </p>
                <p>{this.props.children}</p>
                <input type ="text"  onChange = {this.props.changed} value = {this.props.name}/>
            
                </React.Fragment>
            // </div>
        )

    };
}

Person.propTypes = {
    click: PropTypes.func,
    name : PropTypes.string,
    age  : PropTypes.number,
    changed : PropTypes.func
}
export default Person;