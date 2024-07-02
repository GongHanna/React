import React from 'react';
import './App.css';
import ComEx1 from './components/ComEx1';
import StyledCom1 from './components/StyledCom1';
import StyledCom2 from './components/StyledCom2';
import Com1_const from './components/Com1_const';
import Com2_map from './components/Com2_map';
import Com3_operatior from './components/Com3_operatior';

const App = () => {
  return (
    <div className="container">
      <h1>리액트 연습</h1>
      {/* ComEx1.jsx > ComEx1.module.css */}
      {/* <ComEx1 /> */}
      {/* <StyledCom1 /> */}
      {/* <StyledCom2 /> */}
      {/* <Com1_const /> */}
      {/* <Com2_map /> */}
      <Com3_operatior />
    </div>
  );
};

export default App;