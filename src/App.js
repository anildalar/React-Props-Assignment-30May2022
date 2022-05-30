import logo from './logo.svg';
import './App.css';
import Child from './Child';

function App(props) { //Formal Argument

  //props.name
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        { console.log(typeof(props)) }
        { props.myfullname }
        <img src={logo} className="App-logo" alt="logo" />
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
        <Child mychildprop={props.myfullname} />
      </header>
    </div>
  );
}

export default App;
