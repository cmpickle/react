import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Parallax, Background } from 'react-parallax';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Parallax
          // blur={10}
          bgImage={require('./img/bg1.jpg')}
          bgWidth='auto'
          bgHeight='auto'
          bgImageAlt="nature"
          strength={100}
        >
          <div style={{ height: '1000px' }} />
        </Parallax>
        <Parallax
          // blur={10}
          bgImage={require('./img/bg2.jpg')}
          bgImageAlt="nature"
          strength={300}
        >
          <div style={{ height: '1080px' }} />
        </Parallax>
        <Parallax
          // blur={10}
          bgImage={require('./img/bg3.jpg')}
          bgImageAlt="nature"
          strength={600}
        >
          <div style={{ height: '1080px' }} />
        </Parallax>
      </div>
    );
  }
}

export default App;
