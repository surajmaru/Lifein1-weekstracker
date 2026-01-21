import './App.css'
import "./homePage.css"
import "./components/Works.css"
import "./components/Why.css"
import "./components/create/Create.css"
import "./mobile-view.css"
import "./mobile-view-2.css"

import Home from './components/Home.jsx';
import Works from './components/Works.jsx';
import Create from './components/create/Create.jsx';
import Why from './components/Why.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route 
    path="/"
    element={
      <>
      <Home/>
      <Works/>
      <Why/>
      <div className='footer-div'><p className='footer'>Every dot matters — built by Suraj.</p></div>
      </>
      }
      />

      <Route 
      path='/create'
      element={
        <>
        <Create/>
        <div className='footer-div'><p className='footer'>Every dot matters — built by Suraj.</p></div>
        </>
      }
      />

    </Routes>
    </BrowserRouter>
  )
}

export default App;