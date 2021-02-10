/* react imports */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import PropTypes from "prop-types";

/* material ui import */
import {Button} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormHelpertext from "@material-ui/core/FormHelperText";

/* project imports */
import logo from "../../assets/logo.svg";
import "./Header.css";
import BookShow from "../../screens/bookshow/BookShow.js";

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
      passwordRequired: "dispNone",
      firstnameRequired: "dispNone",
      lastnameRequired: "dispNone",
      emailRequired: "dispNone",
      regPasswordRequired: "dispNone",
      contactRequired: "dispNone",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
      regPassword: "",
      contact: ""
    };
  };

  openModalHandler() {
    this.setState({modalIsOpen: true, value: 0});
  };

  closeModalHandler() {
    this.setState({modalIsOpen: false, usernameRequired: "dispNone", passwordRequired: "dispNone"});
  };

  tabChangeHandler(event, toShowTabIndex) {
    this.setState({value: toShowTabIndex});
  };

  loginClickHandler(event) {
    let {username} = this.state;
    (username === "") ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});

    let {password} = this.state;
    (password === "") ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});
  };

  registerClickHandler(event) {
    let {firstname, lastname, email, regPassword, contact} = this.state;
    
    (firstname === "") ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
    (lastname === "") ? this.setState({lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
    (email === "") ? this.setState({emailRequired: "dispBlock"}) : this.setState({emailRequired: "dispNone"});
    (regPassword === "") ? this.setState({regPasswordRequired: "dispBlock"}) : this.setState({regPasswordRequired: "dispNone"});
    (contact === "") ? this.setState({contactRequired: "dispBlock"}) : this.setState({contactRequired: "dispNone"});
  };

  inputChangeHandler(event) {
    let name = event.target.name;
    let value = event.target.value;
    let updatedState = {};
    updatedState[name] = value;
    this.setState(updatedState);
  };

  bookShowHandler() {
    ReactDOM.render(<BookShow/>, document.getElementById("root"));
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
            {
              ("showBookShowButton" in this.props) && (this.props.showBookShowButton === true) &&
              (<Button style={{marginRight: "15px"}} variant="contained" color="primary" onClick={this.bookShowHandler.bind(this)}>
                Book Show
              </Button>)
            }
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
                <FormHelpertext className={this.state.passwordRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/><br/>
              <Button variant="contained" color="primary" onClick={this.loginClickHandler.bind(this)}>Login</Button>
            </TabContainer>
          }
          {
            (this.state.value === 1) &&

            <TabContainer>
              <FormControl required centered="true">
                <InputLabel htmlFor="firstname">First Name</InputLabel>
                <Input name="firstname" id="firstname" type="text" firstname={this.state.firstname} onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext className={this.state.firstnameRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/>

              <FormControl required centered="true">
                <InputLabel htmlFor="lastname">Last Name</InputLabel>
                <Input name="lastname" id="lastname" type="text" lastname={this.state.lastname} onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext className={this.state.lastnameRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/>

              <FormControl required centered="true">
                <InputLabel htmlFor="email">Email Name</InputLabel>
                <Input name="email" id="email" type="email" email={this.state.email} onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext className={this.state.emailRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/>

              <FormControl required centered="true">
                <InputLabel htmlFor="regPassword">Password</InputLabel>
                <Input name="regPassword" id="regPassword" type="password" email={this.state.regPassword} onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext className={this.state.regPasswordRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/>

              <FormControl required centered="true">
                <InputLabel htmlFor="contact">{`Contact Number`}</InputLabel>
                <Input name="contact" id="contact" type="number" email={this.state.contact} onChange={this.inputChangeHandler.bind(this)}/>
                <FormHelpertext className={this.state.contactRequired}><span className="red">Required</span></FormHelpertext>
              </FormControl>
              <br/>

              <Button variant="contained" color="primary" onClick={this.registerClickHandler.bind(this)}>Register</Button>
            </TabContainer>
          }
        </Modal>
      </React.Fragment>
    );
  };
}
export default Header;
