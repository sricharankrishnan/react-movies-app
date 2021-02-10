/* react imports */
import React, {Component} from "react";

/* project imports */
import Header from "../../common/header/Header.js";
import "./Home.css";
import moviesData from '../../assets/movieData';
import genres from "../../assets/genres";

/* material ui imports */
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox  from '@material-ui/core/Checkbox';
import ListItemText  from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

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
  },
  gridReleasedImage: {
    width: "auto",
    height: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  gridListReleasedMovies: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: "25px !important",
  },
  formControl: {
     margin: theme.spacing.unit,
     minWidth: 240,
     maxWidth: 240
  },
  title: {
     color: theme.palette.primary.light,
  }
});

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
      genres: []
    };
  };

  movieNameChangeHandler(event) {
    this.setState({movieName: event.target.value});
  };

  genreSelectHandler(event) {
    this.setState({genres: event.target.value});
  };

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <Header/>
        <div className={classes.upcomingMoviesHeading}>
          <span>Upcoming Movies</span>
        </div>

        {/* upcoming movies */}
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

        {/* flex container body section */}
        <div className="flex-container">
          <div className="left">
            {/* released movies */}
            <GridList cellHeight={350} cols={3} className={classes.gridListReleasedMovies}>
              {
                moviesData.map((movie, index) => {
                  return (
                    <GridListTile key={movie.id}>
                      <img className={classes.gridReleasedImage} src={movie.poster_url} title={movie.title} alt={movie.title}/>
                      <GridListTileBar title={movie.title}
                      subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}/>
                    </GridListTile>
                  );
                })
              }
            </GridList>
          </div>
          <div className="right">
            <Card>
              <CardContent>
                <FormControl className={classes.formControl}>
                  <Typography className={classes.title} color="textSecondary">
                    FIND MOVIES BY:
                  </Typography>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                  <Input name="movieName" id="movieName" onChange={this.movieNameChangeHandler.bind(this)}/>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-checkbox">Movie Genre</InputLabel>
                  <Select multiple input={<Input id="select-multiple-checkbox"/>}
                  renderValue={selected => selected.join(", ")} value={this.state.genres} onChange={this.genreSelectHandler.bind(this)}>
                    <MenuItem value="0">None</MenuItem>
                    {
                      genres.map((genre, index) => {
                        return (
                          <MenuItem key={genre.id} value={genre.name}>
                            <Checkbox checked={this.state.genres.indexOf(genre.name) > -1}/>
                            <ListItemText primary={genre.name}/>
                          </MenuItem>
                        );
                      })
                    }
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  };
}
export default withStyles(styles)(Home);
