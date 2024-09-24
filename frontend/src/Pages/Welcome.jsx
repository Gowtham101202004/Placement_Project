import React from 'react';
import './styledPage.css';
import TrainingLogo from '../images/WelcomePageImg.png';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const navigate=useNavigate(null);
  return (
    <>
        <div className="welcome-container">
          <div className="welcome-item1">
              <p>A Learning Platform</p>
              <h1>There Is Always<br/>A Way To Learn More</h1>
          </div>
          <div className="welcome-item2">
            <h2>Welcome to Language Learning</h2>
            <h3>Learn English Anytime, Anywhere!</h3>
            <p>Effortlessly master English with Language Learner’s expert guidance.<br/> 
              Unlock your potential with our expert training!</p>
            <button onClick={()=>navigate('/learn')}>Get Started</button>
          </div>
        </div>
        <div className="image-home-container">
          <img src={TrainingLogo} alt='Training Logo'/>
        </div>  
        <div>
          
        </div>
    </>
  )
}

export default Welcome