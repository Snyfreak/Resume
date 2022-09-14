import logo from './logo.svg';
import './App.css';
import Home from './Routes/Home';
import Experience from './Routes/Experience';
import About from './Routes/About';
import Contact from './Routes/Contact';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Experience' element={<Experience/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>


    </Routes>
    </>
  );
}

export default App;
