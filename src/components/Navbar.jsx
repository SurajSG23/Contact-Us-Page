import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <div>
      <div className="header">
        <div className="logo"></div>
        <div className="options">
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
      </div>
      <hr />
    </div>
  )
}
