import React from 'react'
import mikeImage from '../assets/me.jpg'
import eagleimage from '../assets/eagle.png'

const Home = () => {
  return (
    <>
        {/* <h1 class="welcome-container">Welcome to my portfolio!</h1> */}
        <div class="image-container">    
          <h2>Full Stack Web Developer by day!  Debugger by night! </h2>
          <h2>Hi, I'm Michael Rogers </h2>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                   <img class="mike-image" src={mikeImage} alt="Image of Mike" width="300px" height="300px"/>
              </div>
              <div class="flip-card-back">
                     <img class="mike-image" src={eagleimage} alt="Image of Mike" width="300px" height="300px"/>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home