import logo from './logo.svg';
import './App.css';
import Users from './Components/Users';
import Nav from './Components/Nav';
import Userstable from './Components/Userstable';

function App() {
  return (
    <div className="App">
      <Nav />
    <Users />
    <Userstable />
    </div>
  );
}

export default App;
