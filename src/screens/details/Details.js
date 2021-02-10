/* react imports */
import React, {Component} from "react";

/* project imports */
import "./Details.css";
import Header from "../../common/header/Header.js";
import moviesData from '../../assets/movieData';

class Details extends Component {
	constructor() {	
		super();
		this.state = {
			movie: {}
		};
	};

	componentDidMount() {
		let currentState = this.state;

		currentState.movie = moviesData.filter((mov) => {
			return mov.id === this.props.movieId
		})[0];

		this.setState({ currentState }, function() {		
			console.log(this.state);
		});
	}

  render() {
    return (
      <React.Fragment>
        <div className="details">
          <Header/>

					{/* flex container */}
					<div className="flex-containerDetails">
						<div className="leftDetails">
							Left Details
						</div>
						<div className="middleDetails">
							Middle Details
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
