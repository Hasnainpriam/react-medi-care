import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Appointment from './Pages/Appointment/Appointment';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/doctors" element={<Doctors />} />
      <Route  path="/details/:deptId" element={<Details/>} />
      <Route exact path="/about" element={<About />} />  
      <Route exact path="/apponitment" element={<Appointment />} />  
      <Route exact path="/login" element={<Login />} />  
      <Route exact path="/register" element={<Register/>} />  
      <Route exact path="*" element={<Notfound/>} />  
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
