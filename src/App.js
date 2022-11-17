import './App.css';
import Home from './components/home/home';
import Photos from './components/photos/photos';
import Contact from './components/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function contact() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/photos' element={<Photos/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
  );
}

export default contact;