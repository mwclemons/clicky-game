import React, { Component } from "react";
import GameContainer from './components/gameContainer';
import './App.css';
import dirkImage from "./images/dirk.jpg";
import jordanImage from "./images/mj.jpg";
import lebronImage from "./images/lebron.jpg";
import kempImage from "./images/kemp.jpg";
import lukaImage from "./images/luka.jpg";
import kobeImage from "./images/kobe.jpg";
import iversonImage from "./images/iverson.jpg";
import dreamImage from "./images/dream.jpg";
import shaqImage from "./images/shaq.jpg";
import rayImage from "./images/ray.jpg";
import nashImage from "./images/nash.jpg";
import giannisImage from "./images/giannis.jpg";

class App extends Component {
  
  handleClick = (e) => {
    
    let myArray = this.state.guessedAthletes;
    let newScore = this.state.currentScore
    
    if (newScore === 11) {
      this.setState({guessedAthletes: []})
      this.setState({currentScore: 0})
      this.setState({topScore: 12})
      this.setState({clickMessage: "Congratulations!! You've beaten the game. Click an image to play again."})
    } else if (myArray.includes(e.target.id)) {
      this.setState({guessedAthletes: []})
      this.setState({currentScore: 0})
      this.setState({clickMessage: "Sorry!! GAME OVER You've already picked that one. Click an image to play again."})
      if (newScore > this.state.topScore) {
        this.setState({topScore: newScore})
      }
    } else {
      myArray.push(e.target.id)
      this.setState({guessedAthletes: myArray})
      newScore++;
      this.setState({currentScore: newScore})
      this.setState({clickMessage: "Nice!! Now Pick Another!!"})
    }

    console.log(e.target.id)
    console.log(this.state.guessedAthletes)
  }

  state = {
    athletes: [
      {athName: "Nowitzki", athHint: "Mavs GOAT", athImage: dirkImage},
      {athName: "Jordan", athHint: "NBA GOAT", athImage: jordanImage },
      {athName: "Lebron", athHint: "Not 2, Not 3, Not 4, Not 5, Not 6, Not 7...", athImage: lebronImage },
      {athName: "Kemp", athHint: "The Reignman", athImage: kempImage },
      {athName: "Luka", athHint: "The Matador", athImage: lukaImage },
      {athName: "Kobe", athHint: "Black Mamba", athImage: kobeImage },
      {athName: "Iverson", athHint: "The Answer", athImage:iversonImage },
      {athName: "Olajuwon", athHint: "The Dream", athImage: dreamImage },
      {athName: "Shaq", athHint: "The Diesel", athImage: shaqImage },
      {athName: "Jesus", athHint: "Jesus Shuttlesworth", athImage: rayImage },
      {athName: "Nash", athHint: "Captain Canada", athImage: nashImage },
      {athName: "Giannis", athHint: "Greek Freak", athImage: giannisImage }
    ],
    guessedAthletes: [],
    currentScore: 0,
    topScore: 0,
    clickMessage: "Click an image to begin!"
  };
  
  render() {
    return (

      <GameContainer 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        clickMessage={this.state.clickMessage}
        athletes={this.state.athletes}
        handleClick={this.handleClick}
      />
  
    );
  }

}

export default App;
