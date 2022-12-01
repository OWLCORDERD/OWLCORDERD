import React, { useRef, useState, useEffect } from 'react'
import "./bannerSection.css"
import {FaArrowDown} from "react-icons/fa"
import BoxImg from "../../asset/Image/background.jpg"
import Navigator from '../Navigator/Navigator'
import AboutSection from '../AboutSection/AboutSection'
import LocomotiveScroll from "locomotive-scroll"

const BannerSection = () => {

    window.addEventListener('scroll', function(){
        let co = window.scrollX;

        console.log(co);

        const owl = document.querySelector('.Owl-ImageBox');
        console.log(co);

        if(co > 30){
            owl.classList.add('active')
        }else{
            owl.classList.remove('active')
        }
    })

    const boxRef = useRef(null);


    useEffect(()=>{
      if(boxRef) {
        new LocomotiveScroll({
          el : boxRef.current,
          smooth : true,
          direction : "horizontal"
        })
      }
    })

  return (
    <div className= "BannerSection-container">

        <div className = "BannerAbout-section" data-scroll-container ref={boxRef}>

        <div className = "Banner-box">

        <div className = "Banner-contentsBox">

            <div className = "Banner-content">
                <div className = "Solid-Maintxt" data-scroll data-scroll-speed={5}>
                    <h1>FRONT END DESIGNER</h1>
                </div>

                <div className = "Solid-Subtxt" data-scroll data-scroll-speed={5}>
                    <h1>FRONT END DESIGNER</h1>
                </div>
            </div>
            
        </div>

        <div className = "scroll-box" data-scroll data-scroll-speed={-1}>
            <div className = "scroll-arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className = "Scroll-txt">
                <h1>PRIVIEW DEVELOPER</h1>
            </div>
        </div>

        <div className = "Owl-ImageBox">
        </div>

        </div>

        <AboutSection />
        </div>
    </div>
  )
}

export default BannerSection