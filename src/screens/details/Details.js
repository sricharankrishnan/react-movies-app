/* react imports */
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YouTube from "react-youtube";

/* project imports */
import "./Details.css";
import Header from "../../common/header/Header.js";
import Home from "../home/Home.js";
import moviesData from '../../assets/movieData';

/* material ui imports */
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';

class Details extends Component {
	constructor() {	
		super();
		this.state = {
			movie: {},
      starIcons: [{
        id: 1,
        stateId: "star1",
        color: "black"
      },
      {
        id: 2,
        stateId: "star2",
        color: "black"
      },
      {
        id: 3,
        stateId: "star3",
        color: "black"
      },
      {
        id: 4,
        stateId: "star4",
        color: "black"
      },
      {
        id: 5,
        stateId: "star5",
        color: "black"
      }]
		};
	};

	componentWillMount() {
		let currentState = this.state;

		currentState.movie = moviesData.filter((mov) => {
			return mov.id === this.props.movieId
		})[0];

		this.setState({ currentState });
	};

  formatDate(data) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let date = new Date(data);
    let dateString = "";
    dateString += day[date.getDay()] + " ";
    dateString += month[date.getMonth()] + " ";
    dateString += date.getDate() + " ";
    dateString += date.getFullYear();

    return dateString;
  };

  backToHomeHandler() {
    ReactDOM.render(
      <Home/>,
      document.getElementById("root")
    );
  };

  _onReady() {
    console.log("youtube on ready fired");
  };

  starClickHandler = (id) => {
    let starIconList = [];
    for (let star of this.state.starIcons) {
      let starNode = star;
      if (star.id <= id) {
        starNode.color = "yellow"
      }
      else {
        starNode.color = "black";
      }
      starIconList.push(starNode);
    }
    this.setState({ starIcons: starIconList });
  }

  render() {
    let {movie} = this.state;
    let formattedReleaseDate = this.formatDate(movie.release_date);
    let opts = {
      height: "300",
      width: "700",
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <React.Fragment>
        <div className="details">
          <Header showBookShowButton={true}/>

          {/* back button */}
          <div className="back">
            <Typography onClick={this.backToHomeHandler.bind(this)}>
              &#60; Back To Home
            </Typography>
          </div>

					{/* flex container */}
					<div className="flex-containerDetails">
						<div className="leftDetails">
              <img src={movie.poster_url} alt={movie.title} />
						</div>
						<div className="middleDetails">
              <div>
                <Typography variant="headline" component="h2">{movie.title} </Typography><br/>
              </div>
              <div>
                <Typography>
                  <span className="bold">Genres: </span> {movie.genres.join(', ')}
                </Typography>
                <Typography>
                  <span className="bold">Duration: </span> {movie.duration}
                </Typography>
                <Typography>
                  <span className="bold">{`Release Date`}: </span> {formattedReleaseDate}
                </Typography>
                <Typography>
                  <span className="bold">Rating: </span> {movie.critics_rating}
                </Typography><br/>
                <Typography>
                  <span className="bold">Plot: </span> <a href={movie.wiki_url}>Wiki Link</a> {movie.storyline}
                </Typography>

                {/* displaying trailer */}
                <div className="trailerContainer marginTop16">
                  <Typography>
                    <span className="bold">Trailer:</span>
                  </Typography>
                  <YouTube videoId={movie.trailer_url.split("?v=")[1]}
                    opts={opts}
                    onReady={this._onReady.bind(this)}
                  />
                </div>
              </div>
						</div>
						<div className="rightDetails">
							<Typography>
             		<span className="bold">Rate this movie: </span>
              </Typography>
							{this.state.starIcons.map(star => (
								<StarBorderIcon
										className={star.color}
										key={"star" + star.id}
										onClick={() => this.starClickHandler(star.id)}
								/>
							))}

              <GridList>
                {
                  movie.artists.map(function(artist) {
                    let artistFullName = artist.first_name + " " + artist.last_name;
                    return (
                      <GridListTile key={artist.id}>
                        <img src={artist.profile_url} alt={artistFullName} />
                        <GridListTileBar
                          title={artistFullName}
                        />
                      </GridListTile>
                    );
                  })
                }
              </GridList>
						</div>	
					</div>
					{/* flex container */}
        </div>
      </React.Fragment>
    );
  };
}
export default Details;
