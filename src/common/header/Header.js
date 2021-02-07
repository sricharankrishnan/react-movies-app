import React, {Component} from "react";
import "./Header.css";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/* material ui import */
import {Button} from "@material-ui/core";

/* project imports */
import logo from "../../assets/logo.svg";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0
    };
  };

  openModalHandler() {
    this.setState({modalIsOpen: true});
  };

  closeModalHandler() {
    this.setState({modalIsOpen: false});
  };

  tabChangeHandler(event, toShowTabIndex) {
    this.setState({value: toShowTabIndex});
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
          <Tabs value={this.state.value} onChange={this.tabChangeHandler.bind(this)}>
            <Tab label="Login User"/>
            <Tab label="Register User"/>
          </Tabs>
        </Modal>
      </React.Fragment>
    );
  };
}
export default Header;
