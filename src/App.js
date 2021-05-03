import './App.css';
//import SignInSide from './login.js';
import Login from './background.js';

function App() {
  return (
    <div className="App">
      <div>
        {Login()}
      </div>
    </div>
  );
}

export default App;
