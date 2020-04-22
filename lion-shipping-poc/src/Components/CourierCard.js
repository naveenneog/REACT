import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CourierCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card >
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          <h2>{props.courier.courier_name}</h2>
        </Typography>
       
        <Typography className={classes.pos} color="textSecondary">
          Total Cost : {props.courier.freight_charge + props.courier.cod_charges}
        </Typography>
        <Typography variant="body2" component="p">
          Estimated Delivery days : {props.courier.estimated_delivery_days}
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Select</Button>
      </CardActions>
    </Card>
  );
}