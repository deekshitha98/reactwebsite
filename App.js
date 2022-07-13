import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import SliderData from './components/SliderData';

function App() {
  return (

    <Routes>
    <Route path="/" element={ <Navbar/> } />
        <Route path="Home" element={ <Home/> } />
        <Route path="Contact" element={ <Contact/> } />
        <Route path="About" element={ <About/> } />
        <Route path="Services" element={ <Services/> } />
      </Routes>

  );
}

export default App;

