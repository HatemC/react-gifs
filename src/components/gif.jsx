/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
handleClick = () => {
    this.props.selectGif(this.props.id);
}
 // if (this.props.selectGif) {
   // }

  render() {
    const src = `https://media2.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="" onClick={this.handleClick} />
    );
  }
}

export default Gif;
