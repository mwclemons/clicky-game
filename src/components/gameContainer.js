import React, { Component } from "react";
import GameHeader from "./gameHeader";
import GameBoard from "./gameBoard";


class gameContainer extends Component {
  render() {
    return (
      <div>
          <GameHeader
            currentScore={this.props.currentScore}
            topScore={this.props.topScore}
            clickMessage={this.props.clickMessage}
          />
          <div className="row">
          <GameBoard 
            athletes={this.props.athletes}
            handleClick={this.props.handleClick}
          />
          </div>

       

      </div>
    );
  }
}

export default gameContainer;