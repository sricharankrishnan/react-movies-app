/* react imports */
import React, {Component} from "react";
import ReactDOM from "react-dom";

/* project imports */
import Header from "../../common/header/Header.js";
import "./Home.css";
import moviesData from '../../assets/movieData';
import genres from "../../assets/genres";
import artists from "../../assets/artists";
import Details from "../details/Details.js"; 

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
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

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
     width: "100%"
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
      genres: [],
      artists: []
    };
  };

  movieNameChangeHandler(event) {
    this.setState({movieName: event.target.value});
  };

  genreSelectHandler(event) {
    this.setState({genres: event.target.value});
  };
  
  artistSelectHandler(event) {
    this.setState({artists: event.target.value}, function() {
      console.log(this.state);
    });
  };

  movieClickHandler(movieId) {
    console.log("Movie Id: ", movieId);
    ReactDOM.render(
      <Details movieId={movieId}/>,
      document.getElementById("root")
    );
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
                    <GridListTile onClick={this.movieClickHandler.bind(this, movie.id)} key={movie.id}>
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
                <br/>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                  <Input name="movieName" id="movieName" onChange={this.movieNameChangeHandler.bind(this)}/>
                </FormControl>
                <br/>
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
                <br/>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="select-multiple-checkbox-artist">Movie Artist</InputLabel>
                  <Select multiple input={<Input id="select-multiple-checkbox-artist"/>}
                  renderValue={selected => selected.join(", ")} value={this.state.artists} onChange={this.artistSelectHandler.bind(this)}>
                    <MenuItem value="0">None</MenuItem>
                    {
                      artists.map((artist, index) => {
                        let artistFullName = artist.first_name + " " + artist.last_name;
                        return (
                          <MenuItem key={artist.id} value={artistFullName}>
                            <Checkbox checked={this.state.artists.indexOf(artistFullName) > -1}/>
                            <ListItemText primary={artistFullName}/>
                          </MenuItem>
                        );
                      })
                    }
                  </Select>
                </FormControl>
                <br/>
                <br/>
                <FormControl className={classes.formControl}>
                  <TextField
                  id="releaseDateStart"
                  label="Release Date Start"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{ shrink: true }}
                  />
                </FormControl>
                <br/>
                <br/>
                <FormControl fullWidth="true" className={classes.formControl}>
                  <TextField
                  id="releaseDateEnd"
                  label="Release Date End"
                  type="date"
                  defaultValue=""
                  InputLabelProps={{ shrink: true }}
                  />
                </FormControl>
                <br/>
                <br/>
                <Button fullWidth="true" variant="contained" color="primary">
                  Apply
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  };
}
export default withStyles(styles)(Home);
