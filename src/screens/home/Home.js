import React, {Component} from "react";
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../assets/movieData';

/* project imports */
import Header from "../../common/header/Header.js";
import "./Home.css";

const styles = theme => ({
   root: {
       flexGrow: 1,
       backgroundColor: theme.palette.background.paper
   },
   upcomingMoviesHeading: {
       textAlign: 'center',
       background: '#ff9999',
       padding: '8px',
       fontSize: '1rem',
       fontFamily: "monospace"
   },
   gridListUpcomingMovies: {
       flexWrap: 'nowrap',
       transform: 'translateZ(0)',
       width: '100%'
   }
});

class Home extends Component {
  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Header/>
        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>
      </React.Fragment>
    );
  };
}
export default withStyles(styles)(Home);
