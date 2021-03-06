//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import BottomRow from "./BottomRow";
import "./App.css";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const teamScore = (teamName, score) => {
    if(teamName === 'Lions') {
      setHomeScore(homeScore + score)
    } else if(teamName === 'Tigers'){
      setAwayScore(awayScore + score)
    }
  }
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(15);
 

  useEffect(() => {
    setTimeout(() => {
      if(seconds > 0) {
        setSeconds(seconds - 1)
      } else if(seconds <= 0){
        setSeconds(seconds = 59);
        setMinutes(minutes - 1);
      } else if (minutes < 0) {
        setMinutes(minutes = 15)
      }
    }, 1000)})

   




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{minutes}:{seconds}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button /*onClick={() => setHomeScore(homeScore + 7)}*/ onClick={() => teamScore('Lions', 7)}className="homeButtons__touchdown">Home Touchdown</button>
          <button /*onClick={() => setHomeScore(homeScore + 3)}*/ onClick={() => teamScore('Lions', 3)}className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button /*onClick={() => setAwayScore(awayScore + 7)}*/ onClick={() => teamScore('Tigers', 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button /*onClick={() => setAwayScore(awayScore + 3)}*/ onClick={() => teamScore('Tigers', 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
