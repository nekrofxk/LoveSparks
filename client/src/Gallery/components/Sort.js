import React, { Component } from 'react';

class Sort extends Component {

  handleClick = (event) => {
    event.preventDefault();
    const name = event.target.name;
    this.props.onClick(name);
  }

  render() {
    return (
      <div className="sort-container">
        Sort by :
        <button onClick={this.handleClick} name="age" className="btn btn-default">
          Age
        </button>
        <button onClick={this.handleClick} name="distance" className="btn btn-default">
          Distance
        </button>
        <button onClick={this.handleClick} name="tags" className="btn btn-default">
          Tags in common
        </button>
        <button onClick={this.handleClick} name="popularity" className="btn btn-default">
          Popularity
        </button>
      </div>
    );
  }
}

export default Sort;
