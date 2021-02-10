/* react imports */
import React, {Component} from "react";

/* project imports */
import "./Details.css";
import Header from "../../common/header/Header.js";
import moviesData from '../../assets/movieData';

/* material ui imports */
import Typography from '@material-ui/core/Typography';

class Details extends Component {
	constructor() {	
		super();
		this.state = {
			movie: {}
		};
	};

	componentWillMount() {
		let currentState = this.state;

		currentState.movie = moviesData.filter((mov) => {
			return mov.id === this.props.movieId
		})[0];

		this.setState({ currentState }, function() {		
			console.log(this.state);
		});
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

  render() {
    let {movie} = this.state;
    let formattedReleaseDate = this.formatDate(movie.release_date);

    return (
      <React.Fragment>
        <div className="details">
          <Header/>

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
              </div>
						</div>
						<div className="rightDetails">
							Right Details
						</div>	
					</div>
					{/* flex container */}

        </div>
      </React.Fragment>
    );
  };
}
export default Details;
