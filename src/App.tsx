import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>React.js Slider Picture Puzzle</h1>
      <div>
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://medium.com/@thewebdevg/creating-a-gameboard-with-css-grid-47da8ac25078">
              Medium article
            </a>
          </li>
        </ul>
      </div>
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
