import './App.css';
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  document.title = `HERON Chat | ${window.location.hostname}`;

  return (
    <div className="App">
      {/* <Login /> */}
      <Register />
      {/* <Home /> */}
    </div>
  );
}

export default App;
