import React from 'react'
import "./technology.css"
import background from "../../asset/Image/brain.jpg"
import Navigator from '../Navigator/Navigator'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useEffect } from 'react'

const Technology = () => {

const technology = "technology";

const bannerRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);

useEffect(()=>{
let tl = gsap.timeline();

tl.fromTo('.nav-title',
    {
    fontSize : "10rem",
    letterSpacing : "1rem",
    y : "-90%",
    duration : 1
    },
    {
    fontSize : "2rem",
    letterSpacing : 0,
    y : 0,
    scrollTrigger : {
        trigger : '.Technology-banner',
        start : "top top",
        end : "bottom top",
        scrub : true
    }
    });
    

    tl.to('.Technology-title',
    {
    y : -100,
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : '.Technology-banner',
        start : "top top",
        end : "bottom center",
        scrub : 1
    }
    })

    tl.to('.dynamicTxt-span',{
        top : '100%',
        duration : 1,
        scrollTrigger : {
            trigger : '.dynamicTxt-span',
            start : '-100% top',
            end : '30% top',
            scrub : 1
        }
    })
})

  return (
    <div className = "Technology-container">
        <section>
            <div className = "Technology-banner" ref = {bannerRef}>
                <img src = {background} alt = "" className = "Tech-backImg"/>
                <div className = "Technology-title">
                    <h1>Development Stack</h1>
                </div>
            </div>
        </section>

        <section>
            <div className = "Technology-section">
                <Navigator title = {technology}/>

                <div className = "Technology-subtitle">
                    <div className = "Technology-dynamicTxt">
                        <span className = "dynamicTxt-span">Introduce Developer Skills</span>
                    </div>

                    <div className = "Technology-dynamicTxt">
                        <span className = "dynamicTxt-span">WEB PUBLISHING FRONT END</span>
                    </div>

                    <div className = "Technology-dynamicTxt">
                        <span className = "dynamicTxt-span">SOLO PROJECT</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Technology