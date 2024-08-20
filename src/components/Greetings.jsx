import React from 'react'

function Greetings() {
  const greetingStyle = {
    color: 'Blue',
    fontSize: '2.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'80vh', 
   };
   
  return (
    <div> <h1 style={greetingStyle}>Hello, Welcome to my React app </h1> </div>
  )
}

export default Greetings