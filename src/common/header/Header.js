import React, {Component} from "react";
import "./Header.css";
import Modal from "react-modal";

/* material ui import */
import {Button} from "@material-ui/core";

/* project imports */
import logo from "../../assets/logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  };

  openModalHandler() {
    this.setState({modalIsOpen: true});
  };

  closeModalHandler() {
    this.setState({modalIsOpen: false});
  };

  render() {
    return (
      <React.Fragment>
        <div className="appHeaderBar row">
          <img src={logo} className="app-logo"/>
          <div className="login-button">
            <Button variant="contained" color="default" onClick={this.openModalHandler.bind(this)}>
              Login
            </Button>
          </div>
        </div>
        <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="login" onRequestClose={this.closeModalHandler.bind(this)}>
        </Modal>
      </React.Fragment>
    );
  };
}
export default Header;
