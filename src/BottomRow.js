import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, setDown] = useState(1);
  const downUpdateAdd = () => {
    if(down < 4){
      setDown(down + 1)
    } else {
      setDown(down - 3)
    } 
  }

  const downUpdateSub = () => {
    if(down === 1){
      setDown(down + 3)
    } else {
      setDown(down - 1)
    } 
  }

  const [quarter, setQuarter] = useState(1);
  const quarterUpdateAdd = () => {
    if(quarter < 4){
      setQuarter(quarter + 1)
    } else {
      setQuarter(quarter - 3)
    } 
  }

  const quarterUpdateSub = () => {
      if(quarter === 1){
        setQuarter(quarter + 3)
      } else {
        setQuarter(quarter - 1)
      }
    
  }

  const [ballOn, setBallOn] = useState(1);
  const ballOnUpdateAdd = () => {
    if(ballOn < 50){
      setBallOn(ballOn + 1)
    } else {
      setBallOn(ballOn - 49)
    } 
  }

  const ballOnUpdateSub = () => {
    if(ballOn === 1){
      setBallOn(ballOn + 49)
    } else {
      setBallOn(ballOn - 1)
    } 
  }

  const [toGo, setToGo] = useState(1);
  const toGoUpdateAdd = () => {
    if(toGo < 99){
      setToGo(toGo + 1)
    } else {
      setToGo(toGo - 98)
    } 
  }

  const toGoUpdateSub = () => {
    if(toGo === 1){
      setToGo(toGo + 98)
    } else {
      setToGo(toGo - 1)
    } 
  }
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <div className="upDownButtons">
          <button onClick={downUpdateAdd} className="down__button">↑</button>
          <button onClick={downUpdateSub} className="down__button"> ↓</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <div className="upDownButtons">
          <button onClick={toGoUpdateAdd} className="toGo__button">↑</button>
          <button onClick={toGoUpdateSub} className="toGo__button"> ↓</button>
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <div className="upDownButtons">
          <button onClick={ballOnUpdateAdd} className="ballOn__button">↑</button>
          <button onClick={ballOnUpdateSub} className="ballOn__button"> ↓</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div  className="quarter__value">{quarter}</div>
        <div className="upDownButtons">
          <button onClick={quarterUpdateAdd} className="quarter__button"> ↑</button>
          <button onClick={quarterUpdateSub} className="quarter__button"> ↓</button>
        </div>
      </div>
    </div>
  );
};

export default BottomRow;
