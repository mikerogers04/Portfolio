import React from 'react'
import mikeImage from '../assets/me.jpg'

const Home = () => {
  return (
    <>
        <h1>Hi, I'm Michael Rogers</h1>
        <h1>Welcome to my portfolio!</h1>

        <h2>Full Stack Web Developer by day!</h2>
        <h2>Debugger by night!</h2>

        <img class="mike-image" src={mikeImage} alt="Image of Mike" width="300px" height="300px" border="4"/>

    </>
  )
}

export default Home