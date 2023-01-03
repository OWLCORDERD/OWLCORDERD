import React from 'react'
import "./introduce.css";
import {FaLocationArrow} from "react-icons/fa"
import {Link} from "react-router-dom"

const Introduce = () => {

  return (
    <div className = "Introduce-container">
        <div className = "Introduce-section">

          <div className = "Introduce-comma">
            <h1>'</h1>
            <h1>'</h1>
          </div>
          
            <div className = "Introduce-content">

              <div className = "static-title">
                한
              </div>

              <ul className = "dynamic-subtitle">
                <li><span>프론트앤드</span></li>
                <li><span>웹 퍼블리셔</span></li>
                <li><span>웹 디자이너</span></li>
              </ul>

              <div className = "static-title">
                개발자를 소개합니다.
              </div>
            </div>

            <div className="Introduce-menu">

              <ul className = "Introduce-list">
                <li>
                  <div className = "Chapter-num">01</div>
                  <span className = "Chapter-title">기술</span>
                  <h1 className = "Chapter-Eng">Technology</h1>
                  <Link to = '/Technology'>
                    <div className = "arrow">
                      <FaLocationArrow/>
                    </div>
                  </Link>
                </li>
                <li>
                  <div className = "Chapter-num">02</div>
                  <span className = "Chapter-title">프로필</span>
                  <h1 className = "Chapter-Eng">profile</h1>
                  <div className = "arrow">
                    <FaLocationArrow/>
                  </div>
                </li>
                <li>
                  <div className = "Chapter-num">03</div>
                  <span className = "Chapter-title">저장소</span>
                  <h1 className = "Chapter-Eng">repository</h1>
                  <div className = "arrow">
                    <FaLocationArrow/>
                  </div>
                </li>
              </ul>

            </div>

        </div>
    </div>
  )
}

export default Introduce