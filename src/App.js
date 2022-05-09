import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor.randomColor());
  const randomCol = randomColor({
    luminosity: color,
    hue: color,
  });

  return (
    <view>
      <div className="App" style={{ backgroundColor: color }}>
        <h2> {randomCol} </h2>
        <br />
        <br />
        <button onClick={() => setColor(randomColor.randomColor())}>
          Generate
        </button>
      </div>
    </view>
  );
}

<div>
  <p>asdf</p>
</div>;

export default App;
