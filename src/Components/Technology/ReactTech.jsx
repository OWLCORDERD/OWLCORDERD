import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./technology.css"

const ReactTech = ({propsDB, ReactRef}) => {

    const [ReactPJ, setReactPJ] = useState([]);

    const ReactFilter = ReactPJ.filter(ReactPJ => ReactPJ.Tool === "React");

    useEffect(()=>{
        setReactPJ(propsDB.Project);
        console.log(ReactFilter);
    })

  return (
    <section>
    <div className = "Technology-React" ref={ReactRef}>
        <div className="ReactPJ-container">

        {ReactFilter.map((item)=>{
        return(
        <div className = "ReactPJ-item">
            <div className = "ReactPJ-ImgBox">
                <img src = {item.Banner} alt = ""/>
                <a href = {item.Link} alt = "">View Page</a>
            </div>

            <div className = "ReactPJ-ContentBox">
                <div className = "ReactPJ-info">
                    <h1 className = "PJ-Name">{item.ProjectName}</h1>
                    <p className = "PJ-SubName">{item.SubHeading}</p>
                    <span></span>
                    <div className = "ReactPJ-Tech">
                        <p>#{item.Tech}</p>
                        <p>#{item.Tech2}</p>
                        <p>#{item.Tech3}</p>
                        <p>#{item.Tech4}</p>
                    </div>
                </div>

                <div className = "Banner-content">
                    <h1>React Project</h1>
                </div>
            </div>
        </div>
        )
        })}

        </div>
    </div>
    </section>
  )
}

export default ReactTech