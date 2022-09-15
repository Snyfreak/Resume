import React from 'react'
import "../Styles/FormStyles.css"


export const Form = () => {
  return (
   <div className='form'>
    <form action="">
        <label htmlFor="">your name</label>
        <input type="text" />
        
        <label htmlFor="">E-mail</label>
        <input type="email" />

        <label htmlFor="">subject</label>
        <input type="Subject" />

        <label htmlFor="">Message</label>
        <textarea  rows="6"
              placeholder='enter your message'></textarea>
        <button className='btn'>Submit</button>      


    </form>

   </div>
  )
}
