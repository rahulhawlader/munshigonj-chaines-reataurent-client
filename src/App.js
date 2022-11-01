import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navber from './Pages/Shared/Navber/Navber';


function App() {
  return (
    <div>
    <Navber/>
    {
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    }
    </div>
  );
}

export default App;
