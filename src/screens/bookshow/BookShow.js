/* react imports */
import React, {Component} from "react";
import ReactDOM from "react-dom";

/* project imports */
import "./BookShow.css";
import Header from "../../common/header/Header.js";
import Home from "../home/Home.js";

/* material ui imports */
import Typography from '@material-ui/core/Typography';

class BookShow extends Component {
  constructor() {
    super();
    this.state = {
    };
  };

  backToHomeHandler() {
    ReactDOM.render(
      <Home/>,
      document.getElementById("root")
    );
  };

  render() {
    return (
      <React.Fragment>
        <Header/>

        {/* back button */}
        <div className="back">
          <Typography onClick={this.backToHomeHandler.bind(this)}>
            &#60; Back To Movie Details
          </Typography>
        </div>
      </React.Fragment>
    );
  };
}
export default BookShow;
