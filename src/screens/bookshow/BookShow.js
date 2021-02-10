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
import { withStyles } from '@material-ui/core/styles';

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
      location: ""
    };
  };

  backToHomeHandler() {
    ReactDOM.render(
      <Home/>,
      document.getElementById("root")
    );
  };

  locationChangeHandler(event) {
    this.setState({ location: event.target.value });
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
              <Select value={this.state.location} onChange={this.locationChangeHandler.bind(this)}>
                {location.map((loc) => {
                  return (
                    <MenuItem key={"loc" + loc.id} value={loc.location}>
                      {loc.location}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </React.Fragment>
    );
  };
}
export default withStyles(customStyles)(BookShow);
