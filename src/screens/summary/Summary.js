/* react imports */
import React, {Component} from "react";
import ReactDOM from "react-dom";

/* project imports */
import Header from "../../common/header/Header.js";
import "./Summary.css";
import BookShow from "../bookshow/BookShow";
import Home from "../home/Home";

/* material ui imports */
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const styles = theme => ({
  root: {
    width: "400px",
    margin: "35px auto",
    padding: "50px 15px"
  },
  upcomingMoviesHeading: {
    textAlign: 'center',
    background: '#ff9999',
    padding: '8px',
    fontSize: '1rem',
    fontFamily: "monospace"
  },
  formControl: {
     margin: theme.spacing.unit,
     width: "100%"
  },
  title: {
     color: theme.palette.primary.light,
  }
});

const SummaryData = (props) => {
  let titleDetails = (props.title !== "Total Price") ? props.title : <b>{props.title}</b>;
  let valueDetails = props.value;
  return (
    <Typography>
      <div className="row">
        <div className="segment">
          {titleDetails}
        </div>
        <div className="segment">
          {valueDetails}
        </div>
      </div>
    </Typography>
  );
};

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      coupon: "",
      snackbarOpen: false
    };
  };

  backToBookShowHandler(event) {
    ReactDOM.render(
      <BookShow/>,
      document.getElementById("root")
    );
  };

  couponCodeHandler(event) {
    this.setState({coupon: event.target.value});
  };

  bookingButtonClickHandler(event) {
    let {snackbarOpen} = this.state;
    snackbarOpen = (snackbarOpen === true) ? false : true;
    this.setState({snackbarOpen: snackbarOpen});
  };

  snackbarCloseHandler(event) {
    ReactDOM.render(
      <Home/>,
      document.getElementById("root")
    );
  }

  render() {
    const {classes} = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header/>
        
        {/* back button */}
        <div className="back">
          <Typography onClick={this.backToBookShowHandler.bind(this)}>
            &#60; Back To Book Show
          </Typography>
        </div>

        {/* card details */}
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="headline" component="h2">
              SUMMARY
            </Typography><br/><br/>
            
            <SummaryData title="Language" value={this.props.bookingData.language}/><br/>
            <SummaryData title="Location" value={this.props.bookingData.location}/><br/>
            <SummaryData title="Show Date" value={this.props.bookingData.showDate}/><br/>
            <SummaryData title="Show Time" value={this.props.bookingData.showTime}/><br/>
            <SummaryData title="Tickets" value={this.props.bookingData.tickets}/><br/>
            <SummaryData title="Unit Price" value={this.props.bookingData.unitPrice}/><br/>
            
            {/* coupon form */}
            <div className="row">
              <div className="inputDiv">
                <FormControl required className={classes.formControl}>
                  <InputLabel htmlFor="coupon">Coupon Code</InputLabel>
                  <Input onChange={this.couponCodeHandler.bind(this)} id="coupon" name="coupon" value={this.state.coupon}/>
                </FormControl>
              </div>
              <div className="buttonDiv">
                <Button variant="contained" color="primary">Apply</Button>
              </div>
            </div>
            {/* coupon form */}

            <br/><br/>
            <SummaryData title="Total Price" value={this.props.bookingData.unitPrice * this.props.bookingData.tickets}/>
            <br/>
            <Button onClick={this.bookingButtonClickHandler.bind(this)} variant="contained" color="primary">Confirm Booking</Button>
          </CardContent>
        </Card>

        {/* snackbar */}
        <Snackbar open={this.state.snackbarOpen} anchorOrigin={{horizontal: "center", vertical: "top"}} 
        action={<Button onClick={this.snackbarCloseHandler.bind(this)} color="inherit" style={{color: "red"}}size="small">Close</Button>} message="Booking Confirmed"/>
      </React.Fragment>
    );
  };
}
export default withStyles(styles)(Summary);
