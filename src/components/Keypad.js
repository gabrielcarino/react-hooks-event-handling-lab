import React from 'react';

function Keypad () {
  const handleChange = () => {
    console.log("Entering password...")
  }
  return (
    <input onChange={handleChange} type="password" />
  )
}

export default Keypad;