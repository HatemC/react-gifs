import React, { Component } from 'react';

class SearchBar extends Component {
 handleChange = (event) => {
    this.props.searchFunction(event.target.value);
 }

 render() {
   return (
     <input type="text" className="search" onChange={this.handleChange} />
   );
 }
}

export default SearchBar;
