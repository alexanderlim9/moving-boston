import React from 'react'

const strokeStyle = {vectorEffect: 'non-scaling-stroke'}

const HamburgerIcon = (props) => (
  <svg
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid'
    width='100%'
    height='100%'
  >
    <path d='M5 7.5H20' stroke={props.strokeColor} style={strokeStyle} />
    <path d='M5 12.5H20' stroke={props.strokeColor} style={strokeStyle} />
    <path d='M5 17.5H20' stroke={props.strokeColor} style={strokeStyle} />
  </svg>
)

export default HamburgerIcon
