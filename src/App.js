import React, { Component } from 'react';

import './App.css';
import Movie from './components/movie';
import Preamble from './components/preamble';

class App extends Component {
  render() {
    return (
    	<div>
    		  <Preamble />
		      <Movie title="Molly's Game" number="10." />
		      <Movie title="Get Out" number="9." />
		      <Movie title="Blade Runner 2049" number="8." />
		      <Movie title="Dunkirk" number="7." />
		      <Movie title="Shape of Water" number="6." />
		      <Movie title="I, Tonya" number="5." />
		      <Movie title="Lady Bird" number="4." />
		      <Movie title="Phantom Thread" number="3." />
		      <Movie title="Three Billboards Outside Ebbing, Missouri" number="2." />
		      <Movie title="Call Me By Your Name" number="1." />
      </div>
    )
  }
}

export default App;
