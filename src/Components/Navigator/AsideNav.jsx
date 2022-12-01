import React from 'react'
import "./navigator.css"
import {GiOwl} from "react-icons/gi"

const asideNav = () => {
  return (
    <div className = "aside-navigator">
        <div className = "logo-icon">
            <GiOwl/>
        </div>

        <div className = "asideNav-comment">
            <h1>OWLCODERD DEVELOPER</h1>
        </div>
    </div>
  )
}

export default asideNav