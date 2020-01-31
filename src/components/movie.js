import React, { Component } from 'react';
import Description from './description';
import expander from '../media/expander.png';
import minus from '../media/minus.png';

class Movie extends Component {
	constructor(props) {
		super();

		this.state = {
			MovieClassName: 'hide'
		}
	}

	expandMovie() {
		if (this.state.MovieClassName === 'hide') {
			this.setState({MovieClassName:'show'})
		} else {
			this.setState({MovieClassName: 'hide'})
		}
		
	}

	render() {
		let sign = expander;
		if (this.state.MovieClassName === 'hide') {
			sign = expander;
		} else {
			sign = minus;
		}
		
		return (

			<div className="movie-padding">
				<div className="row movie-holder">
					<div className="col-md-2">
						<div className="movie-number">
							<h1>{this.props.number}</h1>
						</div>
					</div>
					<div className="col-md-8">
						<div className="movie-title" onClick={this.expandMovie.bind(this)}>
							<h1>{this.props.title}</h1>
						</div>
					</div>
					<div className="col-md-2">
						<div className="expander" onClick={this.expandMovie.bind(this)}>
							<img src={sign} height="45" width="45" alt="expander" />
						</div>
					</div>
					<div className="col-md-12">
						<div className={this.state.MovieClassName} >
							<Description title={this.props.title} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Movie;
