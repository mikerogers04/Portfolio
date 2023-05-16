import React from 'react'
import error from '../assets/error.png'

const NotFound = () => {
  return (
    <>
        <img class="error-image" src={error} alt="404 page error" width="600px" height="600px"/>
        <h1 class="error-text">You broke the page, how could you? :(</h1>
    </>
  )
}

export default NotFound