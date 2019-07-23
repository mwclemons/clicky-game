import React, { Component } from "react";
import GameCard from "./gameCard";


function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

class gameBoard extends Component {
  
    render() {
        const myShuffledArray = shuffleArray(this.props.athletes);
        return (<div>
            {myShuffledArray.map((athlete, index) => (
                <GameCard 
                    id={athlete.athName} 
                    className={"card-image rounded text-center col-3"} 
                    image={athlete.athImage}
                    handleClick={this.props.handleClick}
                    />
            ))}
            </div>);
    }
}
  
export default gameBoard;

