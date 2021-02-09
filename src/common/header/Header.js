import React, {Component} from "react";
import "./Header.css";
import Modal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FormHelpertext from "@material-ui/core/FormHelperText";

/* material ui import */
import {Button} from "@material-ui/core";

/* project imports */
import logo from "../../assets/logo.svg";

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{padding: "0", textAlign: "center"}}>
      {props.children}
    </Typography>
  );
};
TabContainer.propTypes = {
  children: PropTypes.node.isRequired 
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      usernameRequired: "dispNone",
      username: "",
      password: ""
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

  loginClickHandler(event) {
    let {username} = this.state;
    (username === "") ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
  };

  inputChangeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    let updatedState = {};
    updatedState[name] = value;
    this.setState(updatedState);
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

    const appTabStyle = {
      marginBottom: "25px"
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
        <Modal style={appLoginModalCustomStyles} ariaHideApp={false} isOpen={this.state.modalIsOpen} contentLabel="login" onRequestClose={this.closeModalHandler.bind(this)}>
          <Tabs style={appTabStyle} value={this.state.value} onChange={this.tabChangeHandler.bind(this)}>
            <Tab label="Login User"/>
            <Tab label="Register User"/>
          </Tabs>
          {
            (this.state.value === 0) &&
            <TabContainer>
              <FormControl required centered="true">
                <InputLabel htmlFor="userName">Username</InputLabel>
                <Input name="username" id="username" type="text" username={this.state.username} onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext className={this.state.usernameRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/>
              <FormControl required centered="true">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input name="password" id="password" type="password" onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext>Required</FormHelpertext>
              </FormControl>
              <br/><br/>
              <Button variant="contained" color="primary" onClick={this.loginClickHandler.bind(this)}>Login</Button>
            </TabContainer>
          }
        </Modal>
      </React.Fragment>
    );
  };
}
export default Header;
