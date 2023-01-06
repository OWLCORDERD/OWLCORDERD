import React from 'react'
import "./introduce.css";
import {FaLocationArrow} from "react-icons/fa"
import {Link} from "react-router-dom"
import IntroduceVideo from "../../../asset/video/banner-video.mp4"
import ProfileImg from "../../../asset/Image/프로필 사진.jpg"
import { ScrollTrigger } from 'gsap/all';
import { gsap } from 'gsap/all';
import { useEffect } from 'react';
import { useRef } from 'react';

const Introduce = () => {
  
  const videoRef = useRef(null);

  let test = document.querySelectorAll('.Introduce-section');

  let test2 = document.querySelectorAll('.Introduce-container');

  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.to('.Video-background',{
      width : '100%',
      duration : 1,
      scrollTrigger : {
        trigger : test,
        start : 'top top',
        end : '20% top',
        scrub : 1
      }
    })

    tl.to('.Introduce-hr',{
      height : '0',
      transitionDuration : 2,
      scrollTrigger : {
        trigger : test2,
        start : '30% top',
        end : 'center bottom',
        scrub : 1
      }
    })

    tl.to('.Introduce-profile',{
      opacity : 1,
      transitionDuration : 0.5,
      scrollTrigger : {
        trigger : test2,
        start : '30% top',
        end : 'center bottom',
        scrub : 1
      }
    })

    tl.to('.Introduce-titleBox',{
      opacity : 1,
      transitionDuration : 0.5,
      scrollTrigger : {
        trigger : test2,
        start : '30% top',
        end : 'center bottom',
        scrub : 1
      }
    })

    tl.to('.scroll-Massage', {
      opacity : 0,
      translateY : -100,
      duration : 1,
      scrollTrigger : {
          trigger : test2,
          start : '20% top',
          end : '30% top',
          scrub : true
      }
  })

  },[])

  return (
    <div className = "Introduce-container">
        <div className = "Introduce-section">

          <div className = "Video-background">
            <video src = {IntroduceVideo} muted loop autoPlay/>
          </div>

          <div className = "Introduce-Box">

            <div className = "Introduce-AboutTitle">
              <h1>About This Page</h1>
            </div>

            <div className = "Introduce-hr">
              <div className = "scroll-Massage">
                <h1>Scroll-Down</h1>
              </div>
            </div>

            <div className = "Introduce-profile">
              <img src = {ProfileImg} alt = ""/>
            </div>

            <div className = "Introduce-hr"></div>

            <div className = "Introduce-titleBox">
              <div className = "Introduce-content">

                <ul className = "dynamic-subtitle">
                  <li><span>프론트앤드</span></li>
                  <li><span>웹 퍼블리셔</span></li>
                  <li><span>웹 디자이너</span></li>
                </ul>

                <div className = "static-title">
                  개발자와 프로젝트들을 소개합니다.
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Introduce