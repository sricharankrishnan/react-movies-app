import React, {Component} from "react";
import "./Header.css";

/* material ui import */
import {Button} from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <Button variant="contained">Login</Button>
    );
  }
}
export default Header;
