import React, { Component } from 'react';
import Card from '../card';
import './hand.css';

export default class Hand extends Component {
  render() {
    return (
      <div className="hand">
        {this.props.cards && this.props.cards.map((card, i) => <Card {...card} key={i}/>)}
      </div>
    );
  }
}
