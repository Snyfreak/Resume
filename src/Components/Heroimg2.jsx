import "../Styles/Heroimg2Styles.css"

import React from 'react'

export const Heroimg2 = ({heading,text}) => {
  return (
    <div className="hero-img">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    
    </div>
  )
}
