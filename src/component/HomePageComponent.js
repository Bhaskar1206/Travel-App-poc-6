import React from 'react';
import './HeroSection.css'
import {Button} from '../component/Button'
function HomePageComponent(){
return(
    <div className="hero-container">
        {<video 
                src='./videos/video-1.mp4' 
                autoPlay
                loop
                muted>
            
        </video>}
       
        <h1>Welcome to The Home Page</h1>     
        <p>What are you waiting for</p>
        <div className="hero-btns">
            <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"    
            >GET STARTED<i className='far fa-play-circle'/>
            </Button>
            <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >KNOW ABOUT US
            </Button>
        </div>
    </div>
)
}
export default HomePageComponent;