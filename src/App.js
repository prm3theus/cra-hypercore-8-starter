import React, {useState} from 'react';
import './App.css';
// import feed
import feed from './store/feed'

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Open up <code>console</code> and increment the counter.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <a
          className="App-link"
          href="https://github.com/mafintosh/hypercore"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Hypercore
        </a>
        <br />
        <button onClick={async () => {
            const newCount = count + 1
            await feed.append({msg: 'howdie ' + newCount})
            setCount(newCount)
         }}>
          Click me
        </button>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
