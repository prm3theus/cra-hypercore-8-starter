import React from 'react';
// import logo from './logo.svg';
import './App.css';

import feed from './feed'
// const feed = hypercore('./my-first-dataset', {valueEncoding: 'utf-8'})

// (async () => {

//   await feed.append('hello')
//   await feed.append('world')

//   console.log(await feed.get(0)) // prints hello
//   console.log(await feed.get(1)) // prints world
// })


function App() {


  // await feed.append('hello')
  // await feed.append('world')

  // console.log(await feed.get(0)) // prints hello
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
