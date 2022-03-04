import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import Doctors from './Pages/Doctors/Doctors';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
   <AuthProvider>
       <BrowserRouter>
     <Header></Header>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route  path="/doctors" element={<PrivateRoute><Doctors/></PrivateRoute>} />
      <Route  path="/details" element={<Details/>} />
      <Route exact path="/about" element={<About />} />  
      <Route  path="/apponitment" element={<PrivateRoute> <Appointment /></PrivateRoute>} />  
      <Route exact path="/login" element={<Login />} />  
      <Route exact path="/register" element={<Register/>} />  
      <Route exact path="*" element={<Notfound/>} />  
      </Routes>
      <Footer></Footer>
     </BrowserRouter>
   </AuthProvider>
    </div>
  );
}

export default App;
