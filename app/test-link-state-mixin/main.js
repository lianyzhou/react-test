var React = require("react");
var ReactDOM = require("react-dom");

var App = require("./app");
var App1 = require("./app1");
var App2 = require("./app2");
var App3 = require("./app3");

ReactDOM.render(<App/> , document.querySelectorAll('#app')[0]);
ReactDOM.render(<App1/> , document.querySelectorAll('#app1')[0]);
ReactDOM.render(<App2/> , document.querySelectorAll('#app2')[0]);
ReactDOM.render(<App3/> , document.querySelectorAll('#app3')[0]);