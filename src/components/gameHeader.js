import React from "react";
import CurrentScore from "./currentScore";
import TopScore from "./topScore";
import Title from "./title";
import './gameHeader.css';

function gameHeader(props) {
    return (
        <div className='row row-header text-center'>
            <div className='col-4'>
                <Title  />
            </div>
            <div className='col-4'>
                {props.clickMessage}
            </div>
            <div className='col-4'>
                <CurrentScore value = {props.currentScore}/>
                <TopScore value = {props.topScore}/>
            </div>
        </div>
    );
    
};


export default gameHeader;