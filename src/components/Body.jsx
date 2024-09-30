import React, { useState } from 'react'
import './body.css'
import { MdOutlineMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Body() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [text,setText]=useState("");
  const onViaCallSubmit = (event) => {
    event.preventDefault()
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }
  return (
    <div className='body'>
      <div className="top">
        <h1>CONTACT US</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="option2">
            <button><MdOutlineMessage />VIA SUPPORT CHAT</button>
            <button><MdCall />VIA CALL</button>
          </div>
          <div className="email">
            <button> <MdEmail />VIA EMAIL FORM</button>
          </div>
          <form onSubmit={onViaCallSubmit}>
            <div className="form-container">
              <label htmlFor="name">Name</label>
              <input type="text" name='name' placeholder='Suraj S G' />
            </div>
            <div className="form-container">
              <label htmlFor="name">Email</label>
              <input type="email" name='email' placeholder='example@gmail.com' />
            </div>
            <div className="form-container">
              <label htmlFor="name">Text</label>
              <textarea name="text" id=""></textarea>
            </div>
            <button id="submit">Submit</button>
          </form>
          <div className="diplay">
            <div>{ name}</div>
            <div>{ email}</div>
            <div>{text}</div>
          </div>
        </div>
        <div className="right"></div>
      </div>

    </div>
  )
}
