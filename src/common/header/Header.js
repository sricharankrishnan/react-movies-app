import React, {Component} from "react";
import "./Header.css";

/* material ui import */
import {Button} from "@material-ui/core";

/* project imports */
import logo from "../../assets/logo.svg";

class Header extends Component {
  render() {
    return (
      <div className="appHeaderBar row">
        <img src={logo} className="app-logo"/>
        <div className="login-button">
          <Button variant="contained" color="default">
            Login
          </Button>
        </div>
      </div>
    );
  }
}
export default Header;
