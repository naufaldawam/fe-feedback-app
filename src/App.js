import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import Feedback from './Pages/Feedback';
import SeeFeedback from './Pages/SeeFeedback';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/seefeedback' element={<SeeFeedback/>}/>
          <Route path='*' element={<Notfound/>}/>
          <Route path= '/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
