import React from 'react'
import './navigator.css'

const Navigator = () => {
  return (
    <div className = "Navigator-container">
        <ul>
            <li>
                <a href = "/" className = "active">HOME</a>
            </li>

            <li>
                <a href = "/ABOUT">ABOUT</a>
            </li>

            <li>
                <a href = "/TECHNOLOGY">TECHNOLOGY</a>
            </li>

            <li>
                <a href = "/PROFILE">PROFILE</a>
            </li>
        </ul>
    </div>
  )
}

export default Navigator