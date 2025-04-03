import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignIn from './pages/Signin';
import Register from './pages/Register';
import Provider from './pages/Provider';
import Pharmacy from './pages/Pharmacy';
import VisionProvider from './pages/VisionProvider'
import Dentist from './pages/Dentist';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Provider' element={<Provider/>}/>
      <Route path='/Dentist' element={<Dentist/>}/>
      <Route path='/VisionProvider' element={<VisionProvider/>}/>
      <Route path='/Pharmacy' element={<Pharmacy/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
