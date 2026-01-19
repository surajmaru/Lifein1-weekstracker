    import LifeGrid from './LifeGrid.jsx';
    import { useState } from 'react';
    import { useNavigate } from "react-router-dom";

    
    export default function Home(){
      const navigate = useNavigate();


      const [birth, setBirth] = useState("2005-08-19");

      return(
      <>
        <div className='home-div'>
        <div className='home-div-2'>

        <div className='home-top'>
          <a href='https://suraj-dev.vercel.app/' target='_blank'><img src='/self.png' className='portfolioImg' /></a>
          <div className='lifein1-p'>Lifein1</div>
        </div>

        <button></button>
        <button>Understand</button>

        <button className='top-btn' onClick={() => navigate("/create")}>Create your own!</button>
        </div>      
        </div>

        
        <div className='home-div2'>

        <p className='heading-p'>Time, made visible.</p>
        

        <div className='content-div'>

        <div className='content-desc-div'>
          <p className='content-desc-1'>Visualize your lifetime</p>
          <p className='content-desc-2'>with <span>Lifein1</span></p>
          <p className='content-desc-3'>~3,952 Weeks</p>
          <p className='content-desc-4'>Over the span of your lifetime <span>(76 years)</span></p>
          <p className='content-desc-5'>Make them count!</p>


          <button className='top-btn-2' onClick={() => navigate("/create")}>Create your own!</button>
        </div>
        
      

          <LifeGrid dob={birth} />

          

        </div>

        </div>
        </>
        )
    }