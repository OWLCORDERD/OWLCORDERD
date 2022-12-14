import React, { useRef, useState, useEffect } from 'react'
import "./bannerSection.css"
import {motion} from "framer-motion"
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/all'
import BannerVideo from "../../asset/video/banner-video.mp4"

const BannerSection = () => {

    const imgRef = useRef(null);

    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to(imgRef.current, {
       opacity : 0,
       y : 0,
       width : 0,
       scrollTrigger : {
        trigger : imgRef.current,
        start : 'center center',
        scrub : true
       } 
    })

    tl.to('.Banner-content', {
        opacity : 0,
        translateX : -100,
        duration : 2,
        scrollTrigger : {
            trigger : '.Banner-content',
            start : 'top top',
            scrub : true
        }
    })
}, [])

    const textBox = {
        initial : {
            opacity : 1
        },
        animate : {
            opacity : 1,
            transition : {
                staggerChildren : 0.5,
                duration : 2
            }
        }
    }

    const textAnimated = {
        initial : {
            opacity : 0,
            y : 100
        },
        animate : {
            opacity : 1,
            y : 0,
            transition : {
                duration : 1
            }
        }
    }

  return (
    <div className= "BannerSection-container">

        <div className = "Banner-box">

            <div className = "Banner-contentsBox">

            <div className = "Banner-content">
                <div className = "Maintxt-Box">
                <motion.div className = "Solid-Maintxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>O</motion.h1>
                    <motion.h1 variants={textAnimated}>W</motion.h1>
                    <motion.h1 variants={textAnimated}>L</motion.h1>
                    <motion.h1 variants={textAnimated}>C</motion.h1>
                    <motion.h1 variants={textAnimated}>O</motion.h1>
                    <motion.h1 variants={textAnimated}>D</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>R</motion.h1>
                    <motion.h1 variants={textAnimated}>D</motion.h1>
                </motion.div>
                </div>

                <div className = "Subtxt-Box">
                <motion.div className = "Solid-Subtxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>P</motion.h1>
                    <motion.h1 variants={textAnimated}>R</motion.h1>
                    <motion.h1 variants={textAnimated}>O</motion.h1>
                    <motion.h1 variants={textAnimated}>F</motion.h1>
                    <motion.h1 variants={textAnimated}>I</motion.h1>
                    <motion.h1 variants={textAnimated}>L</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                </motion.div>

                <motion.div className = "Solid-Subtxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>S</motion.h1>
                    <motion.h1 variants={textAnimated}>I</motion.h1>
                    <motion.h1 variants={textAnimated}>T</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                </motion.div>
                </div>
            </div>
            
        </div>

        <div className = "Owl-ImageBox" ref = {imgRef}>
            <video src = {BannerVideo} autoPlay muted loop/>
        </div>

        <div className = "Banner-SubContent">
            <p>I am a job seeker majoring       
            in web publishing and front end development.</p>
        </div>

        </div>

    </div>
  )
}

export default BannerSection