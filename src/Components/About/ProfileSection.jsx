import React from 'react'
import "./aboutSection.css";
import ProfileImg from "../../asset/Image/프로필 사진.jpg";

const ProfileSection = () => {

  return (
    <div className = "ProfileSection-container">
        <div className = "Profile-Itembox">

            <div className = "Profile-menuBox">
                <h1>profile</h1>
                <div className = "Menubox-Img">
                <img src = {ProfileImg} alt = ""/>
                </div>
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
        </div>
    </div>
  )
}

export default ProfileSection