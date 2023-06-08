import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Welcome to the React.ts demo on StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>
        <a href="https://medium.com/@thewebdevg/creating-a-gameboard-with-css-grid-47da8ac25078">
          Source
        </a>
      </p>
      <div className="game-board">
        <div className="wall"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="box"></div>
        <div className="box"></div> <div className="box"></div>
        <div className="wall"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="box"></div>
        <div className="box"></div> <div className="box"></div>
        <div className="box"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="box"></div>
        <div className="wall"></div> <div className="box"></div>
        <div className="box"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="box"></div>
        <div className="wall"></div> <div className="box"></div>
        <div className="box"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="wall"></div>
        <div className="wall"></div> <div className="wall"></div>
      </div>
    </div>
  );
}
