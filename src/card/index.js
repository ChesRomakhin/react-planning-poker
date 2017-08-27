import React, { Component } from "react";
import "./card.css"

export default class Card extends Component {
  render() {
    return (
      <div className="card" style={{backgroundColor: this.props.color}}>
        <span className="card-text">{this.props.number}</span>
      </div>
    );
  }
}

Card.defaultProps = {
  number: 0,
  color: "blue"
}
