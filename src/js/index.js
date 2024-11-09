//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./component/TrafficLight.jsx";
import Home from "./component/home.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";








//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

