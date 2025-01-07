import { Card } from '@mui/material';
import '../componentsStyle/Card.css'
import { Link } from 'react-router-dom';
import imgdoc from '/img/doc1.webp'
import imgyout from '/img/yt.jpg'
import ytLogo from '/icons/ytt.png';
import chatLogo from '/icons/chat.png';
import coursLogo from '/icons/cors.png';
import imgCours from '/img/cors.webp'

import Button from './Button';
const LearnSection = () => {
  return (
    <>
        <p className="font-general uppercase md:text-[50px] flex justify-center pt-36">
          <b>Start your learning journey</b> 
        </p>
    <section id="learn-section" className="learn-section flex gap-10 justify-center items-center mt-24">
      <div className="card flex-col">
        <img src={imgyout} alt="img youtube" className='absolute top-0' />
        <img src={ytLogo} alt="" className='absolute h-14 w-14 -left-6 -top-6' />
        <h3 className='pt-44' >Explore Informative Videos</h3>
        <Link to="/youtube">
            <Button text="Start now" custemStyle="flex-center gap-2 bg-red-400 rounded-full px-24 py-3" ></Button>
        </Link>
      </div>
      <div className="card flex-col">
        <img src={imgdoc} alt="" className='absolute top-0' />
        <img src={chatLogo} alt="" className='absolute h-14 w-14 -left-4 -top-4' />
        <h3 className='pt-44'>Quick and Easy Summaries</h3>
        <Link to="/document">
            <Button text="Start now" custemStyle="flex-center gap-2 bg-red-400 rounded-full px-24 py-3"></Button>
        </Link>
      </div>
      <div className="card flex-col">
      <img src={imgCours} alt="" className='absolute top-0' />
      <img src={coursLogo} alt="" className='absolute h-14 w-14 -left-7 -top-7 w-20 h-20' />
        <h3 className='pt-44'>Unlock Free Courses</h3>
        <Link to="/course">
            <Button text="Start now" custemStyle=" flex-center gap-2 bg-red-400 rounded-full px-24 py-3"></Button>
        </Link>
        
      </div>

      <Card />
    </section>
    </>
  );
};

export default LearnSection;
