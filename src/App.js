import React from 'react';
import logo from './logo.svg';
import './App.css';
import Costarica from "./map/countryObject";
import { SVGMap } from "react-svg-map";


function App() {
  return (
    <div className="App">
        <SVGMap map={Costarica} />
    </div>
  );
}

export default App;
