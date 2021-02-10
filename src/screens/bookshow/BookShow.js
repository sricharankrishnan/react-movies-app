/* react imports */
import React, {Component} from "react";

/* project imports */
import "./BookShow.css";
import Header from "../../common/header/Header.js";

class BookShow extends Component {
  constructor() {
    super();
    this.state = {
    };
  };

  render() {
    return (
      <React.Fragment>
        <Header/>
        <h1>Book Show Page</h1>
      </React.Fragment>
    );
  };
}
export default BookShow;
