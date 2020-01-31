import React, { Component } from 'react';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCcy0wvGBs7VRZYtjZmtDOoWRr-qjHcO54';

class Description extends Component {
	constructor(props) {
		super();

		this.state = {
			videoTitle: '',
			videoID: ''
		}

		//this.searchYoutube = this.searchYoutube.bind(this);
	}
	searchYoutube(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videoTitle: videos[0].snippet.title, 
				videoID: videos[0].id.videoId
			})
			
		})
	}

	componentDidMount() {
		const movieTitle = `${this.props.title} trailer`;
		
		this.searchYoutube(movieTitle);
	}

	render() {

		const url = `https://www.youtube.com/embed/${this.state.videoID}`; 
		
		return (
			<div className="row">
				
				
				<div className="col-md-12 content">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div id="video-title" className="col-md-12 content">
					{this.state.videoTitle}
				</div>
			</div>
		)
	}
}

export default Description;
