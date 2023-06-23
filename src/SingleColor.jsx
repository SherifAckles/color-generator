import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, i }) => {
  const [alert, setAlert] = useState(false)
  
// CONVERTING THE ARRAY RGB TO A STRING
  const bcg = rgb.join(',')
  console.log(bcg)
  return <h4>single color</h4>
}

export default SingleColor
