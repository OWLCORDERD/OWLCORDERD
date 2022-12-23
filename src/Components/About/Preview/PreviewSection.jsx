import React, { useEffect, useRef, useState, useLayoutEffect} from 'react'
import "./preview.css"
import ScrollTrigger from 'gsap/ScrollTrigger'
import {gsap} from "gsap"
import CoderImg from "../../../asset/Image/coder.gif"

const AboutSection = () => {

  const ref = useRef(null);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

  tl.fromTo('.PreviewBox-subTxt',
    {
      opacity : 0,
      x : 500,
      transitionDuration : 1,
    },
    {
     opacity : 1,
     x : 0,
     duration : 2,
    scrollTrigger : {
        trigger : '.PreviewBox-subTxt',
        start : `+=200px`,
        end : `+=500px`,
        scrub : true
    }
  })

  tl.fromTo(ref.current,
  {
    opacity : 0,
    width : 0,
    x : -200
  },
  {
    opacity : 1,
    width : '35rem',
    transitionDelay : 1,
    x : 0,
    transitionDuration : 2,
    scrollTrigger : {
      trigger : ref.current,
      start : 'center center',
      scrub : true
    }
  })

  tl.fromTo('.PreviewBox-title',
    {
      opacity : 1,
      x : -300,
      transitionDuration : 1.5,
    },
    {
      opacity : 1,
      x : 50,
      transitionDuration : 1.5,
      scrollTrigger : {
        trigger : '.PreviewBox-title',
        start : 'center center',
        scrub : true
      }
    })


})

  return (
    <div className = "Preview-container" id = "AboutSection">
        <div className = "Preview-DeveloperBox">
          <div className = "Preview-textBox">
             <div className = "PreviewBox-title">
              <p>Preview</p>
              </div>

              <div className = "PreviewBox-subTitle">
              <h1>DEVELOPER</h1>
              </div>
          </div>

            <div className = "PreviewBox-contents" id = "PreviewId">
              <div className = "PreviewBox-Profile" ref = {ref}></div>

              <div className = "PreviewBox-subTxt" id = "subTxt">
                <h1>development ability</h1>
                <p>#React를 활용한 프론트앤드 개발 작업<br></br>
                 #Figma, PhotoShop 활용한 인터페이스 디자인<br></br>
                 #HTML, CSS3, Vanila javascript<br></br></p>
              </div>
            </div>
        </div>
    </div>
  )
  
}

export default AboutSection