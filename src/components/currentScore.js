import React, { Component } from "react";

class currentScore extends Component {
    
  
    render() {
      return (
        <div id="current-score">
            Current Score: {this.props.value}
        </div>
      )
    };

};

export default currentScore;