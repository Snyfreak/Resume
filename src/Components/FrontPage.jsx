import "../Styles/FrontPageStyle.css"
import { Link } from "react-router-dom"

import React from 'react'
import frontImg from "../images/frontimg.jpg"

export const FrontPage = () => {
  return (
    <div className="front">FrontPage
        <div className="mask">
            <img src={frontImg} alt="" className="into-img" />
        </div>

        <div className="content">
            <p>h1 i am a free lancer</p>
            <h1> react developer</h1>
            <Link to="/Experience"  
            className="btn">Experience</Link>


             <Link to="/Contact"  
                className="btn-light">Contact</Link>
        </div>
    </div>
  )
}
