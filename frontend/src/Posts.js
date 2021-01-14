import React from 'react'
import logo from './logo.svg'

function Posts() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/catshark.jpg`}
      width="300" 
      height="300" 
      alt="Cat shark" 
    />  
      <h1>Name...</h1>
      <div>Address...</div>
    </div>
  )
}

export default Posts