import './App.css';

import Homepage from './components/Homepage/Homepage.js';
import NavigationMobileButton from './components/navigation/Navigation.js';

function App() {
  return (
    <div className="App">
      <Homepage />

      {/* Add the NavigationMobileButton component here when width is less than 768px */}
      {window.innerWidth < 768 ? <NavigationMobileButton /> : null}

    </div>
  );
}

export default App;
