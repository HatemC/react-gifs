import React, { Component } from 'react';
import giphy from "giphy-api";

import SearchBar from './searchbar';
import Gif from "./gif";
import GifList from "./giflist";

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "4gCEKS5uJcvvi"
    };
  }

  search = (query) => {
    giphy("bu46CnSUCZTJSdGLfICNeWkqrMSeD9HA").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
      console.log(this.state.gifs);
    });
  }

  selectgif = (id) => {
    this.setState({
      selectedGifId: id
    });
    console.log(this.state.selectedGifId);
  }

  render() {
    return (
      <div className="container">
        <div className="leftside">
          <div className="searchpos">
            <SearchBar searchFunction={this.search} />
          </div>
          <div className="selectedgif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="rightside">
          <GifList gifs={this.state.gifs} selectGif={this.selectgif} />
        </div>
      </div>
    );
  }
}

export default App;
