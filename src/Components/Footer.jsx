import "../Styles/FooterStyles.css"
import {FaHome ,  FaPhone , FaMailBulk, FaLinkedin, FaFacebook} from "react-icons/fa"


import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
      
      
      <div className="footer-container"> 
        
        
        
         <div className="left"> 
            <div className="location">
                <p><FaHome  size={20} style={{color: "white", marginRight: "2rem"}}/>
                  India, New Delhi </p>  
                 </div> 

                 <div className="phone">
                    <h4><FaPhone size={20} style={{color: "white", marginRight:"2rem" }}/>
                     +91-9654160370</h4>  
                 </div>

                 <div className="email">
                 <h4>  <FaMailBulk size={20} style={{color: "white", marginRight:"2rem" }}/>
                     Shubhamjain3991@gmail.com  </h4> 
                 </div>
          </div>
        
        
          <div className="right">
            <FaLinkedin size={30} style={{color:"white"}}/>
            <FaFacebook size={30} style={{color:"white"}}/>
            <FaLinkedin size={30} style={{color:"white"}}/>

            
            </div>  
      </div>
      </div>
  )
}
