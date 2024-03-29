/** @jsxImportSource @emotion/react */
import './App.css';
import styled from '@emotion/styled';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

const Button = styled.button`
  padding: 15px;

  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 10px;
  font-size: 18px;
  width: 140px;
  border-radius: 10px;
  border-style: none;
  font-family: 'Dank Mono', 'SFMono-Regular,Consolas', 'Liberation Mono',
    'Menlo', 'Courier', 'monospace';
  color: #e6fff3;
  font-weight: normal;
  &:hover {
    color: white;
  }
`;
const Child1 = styled.div`
  color: #e6fff3;
  font-family: 'Dank Mono', 'SFMono-Regular,Consolas', 'Liberation Mono',
    'Menlo', 'Courier', 'monospace';
  font-weight: bold;
  font-size: 25px;
`;
const Child = styled.div`
  color: #e6fff3;
  font-family: 'Dank Mono', 'SFMono-Regular,Consolas', 'Liberation Mono',
    'Menlo', 'Courier', 'monospace';
  font-weight: bold;
  font-size: 42px;
`;

function App() {
  const [color, setColor] = useState(randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  // css styling

  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
        transition: 'all .8s ease',
        height: '800px',
      }}
    >
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Child>Hi Folks!</Child>
      <br />
      <Child1>Welcome to my Random Color Generator!</Child1>
      <div
        style={{
          color: 'beige',
          fontFamily: 'courier,monospace',
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <br />
      <br />
      <Button
        onClick={() =>
          setColor(randomColor({ hue: hue, luminosity: luminosity }))
        }
      >
        Generate
      </Button>
      <br />
      <br />
      -
      <br />
      <p
        style={{
          color: 'beige',
          fontFamily: 'courier,monospace',
          backgroundColor: color,
          fontWeight: 'bolder',
          transition: 'all .8s ease',
          marginLeft: '-720px',
          fontSize: '30px',
        }}
      >
        Change Color
      </p>
      <p
        style={{
          color: 'beige',
          fontFamily: 'courier,monospace',
          backgroundColor: color,
          fontWeight: 'bolder',
          transition: 'all .8s ease',
          marginRight: '-640px',
          marginTop: '-60px',
          fontSize: '30px',
        }}
      >
        Change Luminosity
      </p>
      <input
        style={{
          fontFamily: 'courier,monospace',

          backgroundColor: color,
          background:
            'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))',
          color: 'white',
          borderRadius: '10px',
          flexGrow: '1',

          fontWeight: 'bolder',
          fontSize: '1.8rem',
          lineHeight: '2.4rem',
          boxSizing: 'inherit',
          borderStyle: 'none',
          outline: 'normal',
          marginLeft: '-100px',
        }}
        onChange={(event) => {
          setHue(event.currentTarget.value);
        }}
        value={hue}
      />
      <input
        style={{
          float: 'right',
          fontFamily: 'courier,monospace',
          fontWeight: 'bolder',
          backgroundColor: color,
          background:
            'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5))',
          color: 'white',
          borderRadius: '10px',
          flexGrow: '1',
          marginLeft: '140px',
          fontSize: '1.8rem',
          lineHeight: '2.4rem',
          boxSizing: 'inherit',
          borderStyle: 'none',
          outline: 'normal',
          margin: '0',
          marginRight: '250px',
        }}
        onChange={(event) => {
          setLuminosity(event.currentTarget.value);
        }}
        value={luminosity}
      />
    </div>
  );
}

export default App;
