import './App.css'
import "./homePage.css"
import "./components/Works.css"
import "./components/create/Create.css"

import Home from './components/Home.jsx';
import Works from './components/Works.jsx';
import Create from './components/create/Create.jsx';
import LifeGrid from './components/LifeGrid.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";


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
      </>
      }
      />

      <Route 
      path='/create'
      element={
        <Create/>
      }
      />


    

    {/* <main className="min-h-screen bg-bg text-white flex flex-col items-center justify-center px-6 hide">
      <h1 className='text-2xl font-light tracking-wide mb-6'>
        Your Life in Weeks
      </h1>

      <LifeGrid dob="2005-08-19" />


      <p className='text-xs text-gray-500 mt-6'>
        Each dot represents one week
      </p>

    </main> */}

    </Routes>
    </BrowserRouter>
  )
}

export default App;