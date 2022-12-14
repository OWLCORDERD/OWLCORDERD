import React from 'react'
import './navigator.css'
import {GiOwl} from "react-icons/gi"

const Navigator = (props) => {
  return (
        <nav className = "Introduce-navigator">
            <div className = "logo-icon">
                <GiOwl/>
            </div>

            <div className = "nav-title">
                <h1>{props.title}</h1>
            </div>

            <div className = "nav-comment">
                <h1>OWLCODERD DEVELOPER</h1>
            </div>
        </nav>
  )
}

export default Navigator