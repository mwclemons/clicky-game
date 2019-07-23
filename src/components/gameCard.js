import React, { Component } from "react";
import './gameCard.css';

class gameCard extends Component {

    render() {
      return (
        <img id={this.props.id}  className={this.props.className} src={this.props.image} alt="" onClick={this.props.handleClick.bind("20")}></img>
        
      )
    };

};

export default gameCard;