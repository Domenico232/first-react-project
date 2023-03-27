import logo from './logo.svg';
import './App.css';
import  ButtonComponent  from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent Testo="Lello"/>
        <ImageComponent image="https://cdn.pixabay.com/photo/2023/03/14/12/41/wheat-7852286_960_720.jpg" alto="gesus"/>
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
