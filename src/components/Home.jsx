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
          <div data-aos="fade-down" data-aos-duration="1500">
          <a href='https://suraj-dev.vercel.app/' target='_blank'><img src='/self.png' className='portfolioImg' /></a>
          </div>
          <div data-aos="fade-down" data-aos-duration="2000">
          <div className='lifein1-p' >Lifein1</div>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-duration="2500">
        <button className='top-btn' onClick={() => navigate("/create")}>Create your own!</button>
        </div>

        </div>      
        </div>

        
        <div className='home-div2'>

        <p className='heading-p' data-aos="fade-down" data-aos-duration="1500">Time, made visible.</p>
        

        <div className='content-div'>

        <div className='content-desc-div'>
          <p className='content-desc-1' data-aos="fade-down" data-aos-duration="1800">Visualize your lifetime</p>
          <p className='content-desc-2' data-aos="fade-down" data-aos-duration="2100">with <span>Lifein1</span></p>
          <p className='content-desc-3' data-aos="fade-down" data-aos-duration="2400">~3,952 Weeks</p>
          <p className='content-desc-4' data-aos="fade-down" data-aos-duration="2700">Over the span of your lifetime <span>(76 years)</span></p>
          <p className='content-desc-5' data-aos="fade-down" data-aos-duration="3000">Make them count!</p>


        <div data-aos="fade-down" data-aos-duration="3000">
          <button className='top-btn-2' onClick={() => navigate("/create")}>Create your own!</button>
        </div>
        </div>
        
      

          <LifeGrid dob={birth} />

          

        </div>

        </div>

        <div className="spacer-2"></div>
        </>
        )
    }