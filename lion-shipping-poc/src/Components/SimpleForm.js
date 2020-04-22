import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import axios from '../Axios';
import CourierCard from './CourierCard';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: 200,
  },
}));

export default function InputAdornments(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    weight: '',
    pincode: '',
  });
  const [response , setResponse] = React.useState(null);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const configuration = {
    headers: { Authorization: `Bearer ${props.auth}` } ,
    params : {
            pickup_postcode : '560001' , 
            delivery_postcode : `${values.pincode}` , 
            cod             : '0',
            weight          : `${values.weight}`}
    };

   

  const handleClick = () => event =>{
      console.log(values);

      axios.get('courier/serviceability/', configuration
    //   {
    //       headers : {
    //           Authorization: 'Bearer '+ props.auth,  
    //       },
    //       params : {
    //         pickup_postcode : '560001' , 
    //         delivery_postcode : values.pincode , 
    //         cod             : '1',
    //         weight          : values.weight
    //       }
    //   })
      )
        .then(response => {
            console.log(response.data.data);
            setResponse(response.data.data);
        }).catch( error =>{
            console.log(error)
        })
  }
  let responseOutput = () => {
      if(response){
        let couriers = response.available_courier_companies.map(function(listValue){
            // return <li>{listValue.courier_name}</li>;
            return <Grid className = {classes.margin} item >
                     <CourierCard courier = {listValue} />
                </Grid>
          })
         return couriers; 
        
  }else{
    return (<p>wait ..</p>)
  }
}
  return (
    <div className={classes.root}>
      <div>
        <TextField
          label="Name"
          value={values.name}
          onChange={handleChange('name')}
          id="standard-start-adornment"
          className={clsx(classes.margin, classes.textField)}
          
        />
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id="standard-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor="standard-adornment-pincode">Pincode</InputLabel>
          <Input
            id="standard-adornment-pincode"
           
            value={values.password}
            onChange={handleChange('pincode')}
           
          />
        </FormControl>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick = {handleClick()}
        // endIcon={<Icon>send</Icon>}
      >
        Check 
      </Button>
      <Grid item xs = {12} >
        <Grid container justify="left" spacing={2}>
         {responseOutput()}
         </Grid>
      </Grid>
       
      </div>
    </div>
  );
}
