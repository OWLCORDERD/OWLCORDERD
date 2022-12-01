import React, { useEffect, useRef, useState } from 'react'
import "./aboutSection.css"
import OwlImg from "../../asset/Image/profileImg.jpg"

const AboutSection = () => {

  return (
    <div className = "AboutSection-container">
        <div className = "About-DeveloperBox">
            <div className = "PreviewBox" id = "PreviewId">
              <div className = "PreviewBox-title">
              <p data-scroll data-scroll-speed={-5}>Preview</p>
              <h1 className = "strong-title" data-scroll data-scroll-sticky data-scroll-target = "#PreviewId">DEVELOPER</h1>
              <h1 data-scroll data-scroll-speed={-5}>WEB PUBLISHING</h1>
              <h1 data-scroll data-scroll-speed={-5}>FRONT-END</h1>
              </div>

              <div className = "PreviewBox-subtitle">
                <h1>개발자&디자이너</h1>
                <p>React를 활용한 프론트앤드 개발 작업 및<br></br>
                 Figma, PhotoShop 프로그램을 이용한<br></br>
                인터페이스 디자인, 웹 퍼블리싱 작업 가능</p>
              </div>

              <div className = "developer-imgbox">
                <img src = {OwlImg} alt = ""/>
              </div>
            </div>

          <div className = "About-content">
          <h1>WHY OWLCODER?</h1>

          <p>어릴 적 친구들이 올빼미와 눈매가 닮았다고 하여 의심하던 찰나, 
          한 친구가 페이스북 올빼미글에  저를 태그하였더니 좋아요수가 300개가 넘었고 
          그 뒤로 닮은꼴로 선정되었습니다. 
          <br></br>

          또 코딩이나 디자인 작업을 할때 밤을 자주 새고, 
          될때까지 하는 오기가 있어서 “올빼미 개발자”
          개발 닉네임으로 선택한 것 같습니다.</p>
        </div>
        </div>
    </div>
  )
  
}

export default AboutSection