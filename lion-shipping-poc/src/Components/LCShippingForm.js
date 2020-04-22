import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SimpleForm from './SimpleForm';
const divStyle = {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
}
class LCShippingForm extends Component {

    state = {
        auth : {
            username : 'naveen.g@lioncircuits.com',
            password : 'Lion123',
            token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjM5MDU1MiwiaXNzIjoiaHR0cHM6Ly9hcGl2Mi5zaGlwcm9ja2V0LmluLy92MS9leHRlcm5hbC9hdXRoL2xvZ2luIiwiaWF0IjoxNTgzNTYzMzA0LCJleHAiOjE1ODQ0MjczMDQsIm5iZiI6MTU4MzU2MzMwNCwianRpIjoiOW84NEt3YkxCRDZQZE5MNiJ9.FpZuSNfQo_Yf309RXAlVTtaedY4kOM4PAzLiYkVBKn8",

        }

    }
    render() {
        return (
            <div className={divStyle}>
                <form className={{ padding: "20px" }} noValidate autoComplete="off">
                    <div>
                      
                        <SimpleForm auth = {this.state.auth.token}/>
                    </div>
                </form>
            </div>
        )

    }
}

export default LCShippingForm;