    import LifeGrid from './LifeGrid.jsx';
    import { TOTAL_WEEKS, weeksLived } from '../utils/life.js';

    const lived = weeksLived("2005-08-19");
    const livedPercentage = Math.floor((lived / TOTAL_WEEKS) * 100);
    
    export default function Home(){
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

    <button className='top-btn'>Create your own!</button>
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


      <button className='top-btn-2'>Create your own!</button>
    </div>
    
    <main className="w-100 h-140 bg-bg text-white flex flex-col items-center justify-center px-6 py-6 rounded-2xl">
      <h1 className='text-2xl font-light tracking-wide mb-6'>
        21 Years Lived - {livedPercentage}% completed
      </h1>

      <LifeGrid dob="2005-08-19" />

      <p className='text-xs text-gray-500 mt-6'>
        Each dot represents one week
      </p>

    </main>

    </div>

    </div>
        </>
        )
    }