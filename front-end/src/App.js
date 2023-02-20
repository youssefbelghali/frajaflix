import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';
import Card from './card';
import NavBar from './NavBar';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Card/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
