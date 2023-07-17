import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import pages
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import Feedback from './Pages/Feedback';
import SeeFeedback from './Pages/SeeFeedback';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    //   <Home/>
    //   <About/>
    // </div>

    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/feedback' element={<Feedback/>}/>
          <Route path='/seefeedback' element={<SeeFeedback/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
