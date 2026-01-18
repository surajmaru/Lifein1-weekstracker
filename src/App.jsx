import { useState } from 'react'
import './App.css'
import LifeGrid from './components/LifeGrid.jsx';
import "./homePage.css"
import Home from './components/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    
    {/* dots page */}
    <main className="min-h-screen bg-bg text-white flex flex-col items-center justify-center px-6 hide">
      <h1 className='text-2xl font-light tracking-wide mb-6'>
        Your Life in Weeks
      </h1>

      <LifeGrid dob="2005-08-19" />


      <p className='text-xs text-gray-500 mt-6'>
        Each dot represents one week
      </p>

    </main>
    </>
  )
}

export default App;