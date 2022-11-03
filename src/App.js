import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bangalifood from './Pages/Home/FoodSection/BangaliFood/Bangalifood';
import Chaines from './Pages/Home/FoodSection/ChainesFood/Chaines';
import ThaiFood from './Pages/Home/FoodSection/ThaiFood/ThaiFood';
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
        <Route path='/bangali' element={<Bangalifood/>}></Route>
        <Route path='/thai' element={<ThaiFood/>}></Route>
        <Route path='/chaines' element={<Chaines/>}></Route>
      </Routes>
    }
    </div>
  );
}

export default App;
