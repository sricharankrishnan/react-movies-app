/* react imports */
import React, {Component} from "react";
import ReactDOM from "react-dom";

/* project imports */
import "./BookShow.css";
import Header from "../../common/header/Header.js";
import Home from "../home/Home.js";
import language from '../../assets/language';
import location from '../../assets/location';
import showDate from '../../assets/showDate';
import showTime from '../../assets/showTime';

/* material ui imports */
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';
import FormHelpertext from "@material-ui/core/FormHelperText";

const customStyles = (theme) => ({
  root: {
    width: "400px",
    margin: "35px auto",
    padding: "50px 15px"
  },
  formControl: {
     margin: theme.spacing.unit,
     width: "100%"
  },
});

class BookShow extends Component {
  constructor() {
    super();
    this.state = {
      location: "",
      language: "",    
      showDate: "",
      showTime: "",
      tickets: 0,
      locationRequired: "dispNone",
      languageRequired: "dispNone",    
      showDateRequired: "dispNone",
      showTimeRequired: "dispNone",
      ticketsRequired: "dispNone",
      unitPrice: 500,
      availableTickets: 20
    };
  };

  backToHomeHandler() {
    ReactDOM.render(
      <Home/>,
      document.getElementById("root")
    );
  };
  
  locationChangeHandler(event) {
    this.setState({location: event.target.value});
  };
  
  languageChangeHandler(event) {
    this.setState({language: event.target.value});
  };

  showDateChangeHandler(event) {
    this.setState({showDate: event.target.value});
  };
  
  showTimeChangeHandler(event) {
    this.setState({showTime: event.target.value}, function() {
      console.log(this.state);
    });
  };

  ticketsChangeHandler(event) {
    this.setState({tickets: event.target.value});
  };

  bookShowButtonHandler(event) {
    let {location, language, showDate, showTime, tickets} = this.state;

    (location === "") ? this.setState({locationRequired: "dispBlock"}) : this.setState({locationRequired: "dispNone"});
    (language === "") ? this.setState({languageRequired: "dispBlock"}) : this.setState({languageRequired: "dispNone"}); 
    (showDate === "") ? this.setState({showDateRequired: "dispBlock"}) : this.setState({showDateRequired: "dispNone"}); 
    (showTime === "") ? this.setState({showTimeRequired: "dispBlock"}) : this.setState({showTimeRequired: "dispNone"}); 
    (tickets === 0) ? this.setState({ticketsRequired: "dispBlock"}) : this.setState({ticketsRequired: "dispNone"}); 
  };

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Header/>

        {/* back button */}
        <div className="back">
          <Typography onClick={this.backToHomeHandler.bind(this)}>
            &#60; Back To Movie Details
          </Typography>
        </div>

        {/* card section */}
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="headline" component="h2">
              BOOK SHOW
            </Typography>

            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="location">Choose Location</InputLabel>
              <Select id="location" value={this.state.location} onChange={this.locationChangeHandler.bind(this)}>
                {location.map((loc) => {
                  return (
                    <MenuItem key={"loc" + loc.id} value={loc.location}>
                      {loc.location}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelpertext className={this.state.locationRequired}><span className="red">Required</span></FormHelpertext>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="language">Choose Language</InputLabel>
              <Select value={this.state.language} onChange={this.languageChangeHandler.bind(this)}>
                {language.map((lang) => {
                  return (
                    <MenuItem key={"lang" + lang.id} value={lang.language}>
                      {lang.language}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelpertext className={this.state.languageRequired}><span className="red">Required</span></FormHelpertext>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="showDate">Choose Show Date</InputLabel>
              <Select id="showDate" value={this.state.showDate} onChange={this.showDateChangeHandler.bind(this)}>
                {showDate.map((sd) => {
                  return (
                    <MenuItem key={"sd" + sd.id} value={sd.showDate}>
                      {sd.showDate}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelpertext className={this.state.showDateRequired}><span className="red">Required</span></FormHelpertext>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="showTime">Choose Show Time</InputLabel>
              <Select id="showTime" value={this.state.showTime} onChange={this.showTimeChangeHandler.bind(this)}>
                {showTime.map((st) => {
                  return (
                    <MenuItem key={"st" + st.id} value={st.showTime}>
                      {st.showTime}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelpertext className={this.state.showTimeRequired}><span className="red">Required</span></FormHelpertext>
            </FormControl>
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="tickets">Tickets: (Available: {this.state.availableTickets})</InputLabel>
              <Input id="tickets" value={(this.state.tickets !== 0) ? this.state.tickets : ""} onChange={this.ticketsChangeHandler.bind(this)}/>
              <FormHelpertext className={this.state.ticketsRequired}><span className="red">Required</span></FormHelpertext>
            </FormControl><br/><br/>

            <Typography>
              Unit Price: Rs. {this.state.unitPrice}
            </Typography>
            <Typography>
              Tota Price: Rs. {this.state.unitPrice * this.state.tickets}
            </Typography><br/><br/>

            <Button variant="contained" onClick={this.bookShowButtonHandler.bind(this)} color="primary">Book Show</Button>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };
}
export default withStyles(customStyles)(BookShow);
