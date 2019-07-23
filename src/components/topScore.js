import React, { Component } from "react";

class topScore extends Component {
    
  
    render() {
      return (
        <div id="top-score">
            Top Score: {this.props.value}
        </div>
      )
    };

};

export default topScore;