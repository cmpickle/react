import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const generatorValues = myGenerator();
const fibValues = fib(20);

class App extends Component {

  values = () => {
    let result = [];
    for (let v of generatorValues) {
      result.push(<p>{v}</p>);
    }
    return result;
  }

  fibs = () => {
    let result = [];
    for (let v of fibValues) {
      result.push(<p>{v}</p>);
    }
    return result;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>Bacon</h2>
        {this.values()}
        <h2>Fibbinacci Sequence</h2>
        {this.fibs()}
      </div>
    );
  }
}

function* myGenerator() {
  yield "Bacon";
  yield "Is";
  yield "King";
}

function* fib(limit) {
  let count = 0;
  let first = 0;
  let second = 1;
  yield first + second;
  while(count <= limit) {
    ++count;
    let temp = first;
    first = second;
    second = first + temp;
    yield first + second;
  }
}

export default App;
