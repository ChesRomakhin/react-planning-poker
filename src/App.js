import React, { Component } from "react";
import Card from "./card";
import Hand from "./hand";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Hand
          cards={[
            { number: 1, color: "blue" },
            { number: 2, color: "blue" },
            { number: 3, color: "blue" },
            { number: 5, color: "blue" },
            { number: 8, color: "blue" },
            { number: 13, color: "blue" }
          ]}
        />
      </div>
    );
  }
}

export default App;
