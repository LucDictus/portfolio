import './App.css';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';

export function navOpen() {
  console.log('hoi');
}

function App() {

  return (
    <div className="App">
      {/* <div id='homepage'>
        <HomePage />
      </div> */}
      <div id='navigation'>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
