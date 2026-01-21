import './App.css'
import "./homePage.css"
import "./components/Works.css"
import "./components/Why.css"
import "./components/create/Create.css"

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
      </>
      }
      />

      <Route 
      path='/create'
      element={
        <Create/>
      }
      />

    </Routes>
    </BrowserRouter>
  )
}

export default App;