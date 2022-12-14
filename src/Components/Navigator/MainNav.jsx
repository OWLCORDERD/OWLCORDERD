import React from 'react'
import "./navigator.css"
import {GiOwl} from "react-icons/gi"

const MainNav = () => {
  return (
    <div className = "Main-navigator">
        <div className = "logo-icon">
            <GiOwl/>
        </div>

        <div className = "MainNav-comment">
            <h1>OWLCODERD DEVELOPER</h1>
        </div>
    </div>
  )
}

export default MainNav