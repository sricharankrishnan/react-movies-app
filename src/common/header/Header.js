import React, {Component} from "react";
import "./Header.css";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

/* material ui import */
import {Button} from "@material-ui/core";

/* project imports */
import logo from "../../assets/logo.svg";

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{padding: "0"}}>
      {props.children}
    </Typography>
  );
};

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
		const appLoginModalCustomStyles = {
			content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)'
			}
		};

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
        <Modal style={appLoginModalCustomStyles} lassName="appLoginModal" ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="login" onRequestClose={this.closeModalHandler.bind(this)}>
          <Tabs value={this.state.value} onChange={this.tabChangeHandler.bind(this)}>
            <Tab label="Login User"/>
            <Tab label="Register User"/>
          </Tabs>
          <TabContainer>
            <FormControl required>
              <InputLabel htmlFor="userName">Username</InputLabel>
              <Input id="username" type="text"/>
            </FormControl>
            <FormControl required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password"/>
            </FormControl>
          </TabContainer>
        </Modal>
      </React.Fragment>
    );
  };
}
export default Header;
