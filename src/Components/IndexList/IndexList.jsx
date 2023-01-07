import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './indexlist.css'
import {FaLocationArrow} from "react-icons/fa"

const IndexList = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/IndexList')
    .then((res)=> res.json())
    .then((data)=> setData(data))
  },[])
  
  return (
    <div className = "IndexList-container">

      {data.map((item)=>{
        return(
        <div className = "IndexList-box" key={item.id}>

          <div className = "Index-ImageBox">
            <img src = {item.chapterImg} alt = ""/>
          </div>

          <div className = "Index-ContentBox">
            <div className = "Index-titleBox">
              <div className = "Index-chapter">
              <h1>{item.chapter}</h1>
              </div>

              <div className = "Index-title">
                <h1>{item.title}</h1>
                <p>{item.title_KOR}</p>
              </div>
            </div>

            <div className = "Index-ListBox">
              <ul>
                <li>
                  <FaLocationArrow/>
                  <h1>{item.list_first}</h1>
                </li>

                <li>
                  <FaLocationArrow/>
                  <h1>{item.list_second}</h1>
                </li>

                <li>
                  <FaLocationArrow/>
                  <h1>{item.list_third}</h1>
                </li>
              </ul>
            </div>
          </div>

        </div>
        )
      })}
    </div>
  )
}

export default IndexList