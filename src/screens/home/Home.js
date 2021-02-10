/* react imports */
import React, {Component} from "react";

/* project imports */
import Header from "../../common/header/Header.js";
import "./Home.css";
import moviesData from '../../assets/movieData';

/* material ui imports */
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

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
  },
  gridPosterImage: {
    height: "100%",
    display: "block"
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
        <GridList className={classes.gridListUpcomingMovies} cols={4.5}>
          {
            moviesData.map((movie, index) => {
              return (
                <GridListTile key={movie.id}>
                  <img className={classes.gridPosterImage} src={movie.poster_url} title={movie.title} alt={movie.title}/>
                  <GridListTileBar title={movie.title}/>
                </GridListTile>
              );
            })
          }
        </GridList>
      </React.Fragment>
    );
  };
}
export default withStyles(styles)(Home);
