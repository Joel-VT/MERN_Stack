import './App.css';
import Home from './components/Home';
import UserComponent from './components/UserComponent';
import BackgroundComponent from './components/BackgroundComponent';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace={true}/>} />
        <Route path="/home" element={<Home />}/>
        <Route path="/:userinput" element={<UserComponent />} />
        <Route path="/:userinput/:color1/:color2" element={<BackgroundComponent />} />
      </Routes>
    </div>
  );
}

export default App;
