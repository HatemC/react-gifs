import React, { Component } from 'react';
import Gif from "./gif";

// eslint-disable-next-line react/prefer-stateless-function
const GifList = (props) => {

    return (
      <div className="gifelement">
        {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} classeName="picgif" selectGif={props.selectGif} />)}
      </div>
    );
}

export default GifList;
