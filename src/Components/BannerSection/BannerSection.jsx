import React, { useRef, useState, useEffect } from 'react'
import "./bannerSection.css"
import {motion} from "framer-motion"
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/all'

const BannerSection = () => {

    const imgRef = useRef(null);

    useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    tl.to(imgRef.current, {
       opacity : 0,
       x : 0,
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

    tl.fromTo('.Banner-PreviewImg', {
        opacity : 1,
        width : '10rem',
        transitionDuration : 1,
    },
    {
        opacity : 0,
        width : 0,
        transitionDuration : 1,
        scrollTrigger : {
            trigger : '.Banner-PreviewImg',
            start : 'center center',
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

        <div className = "BannerAbout-section">

        <div className = "Banner-box">

        <div className = "Banner-contentsBox">

            <div className = "Banner-content">
                <div className = "Maintxt-Box">
                <motion.div className = "Solid-Maintxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>F</motion.h1>
                    <motion.h1 variants={textAnimated}>R</motion.h1>
                    <motion.h1 variants={textAnimated}>O</motion.h1>
                    <motion.h1 variants={textAnimated}>N</motion.h1>
                    <motion.h1 variants={textAnimated}>T</motion.h1>
                </motion.div>
                <motion.div className = "Solid-Maintxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>N</motion.h1>
                    <motion.h1 variants={textAnimated}>D</motion.h1>
                </motion.div>
                <motion.div className = "Solid-Maintxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>D</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>S</motion.h1>
                    <motion.h1 variants={textAnimated}>I</motion.h1>
                    <motion.h1 variants={textAnimated}>G</motion.h1>
                    <motion.h1 variants={textAnimated}>N</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>R</motion.h1>
                </motion.div>
                </div>

                <div className = "Subtxt-Box">
                <motion.div className = "Solid-Subtxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>F</motion.h1>
                    <motion.h1 variants={textAnimated}>R</motion.h1>
                    <motion.h1 variants={textAnimated}>O</motion.h1>
                    <motion.h1 variants={textAnimated}>N</motion.h1>
                    <motion.h1 variants={textAnimated}>T</motion.h1>
                </motion.div>

                <motion.div className = "Solid-Subtxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>N</motion.h1>
                    <motion.h1 variants={textAnimated}>D</motion.h1>
                </motion.div>

                <motion.div className = "Solid-Subtxt" variants={textBox} animate = "animate" initial = "initial">
                    <motion.h1 variants={textAnimated}>D</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>S</motion.h1>
                    <motion.h1 variants={textAnimated}>I</motion.h1>
                    <motion.h1 variants={textAnimated}>G</motion.h1>
                    <motion.h1 variants={textAnimated}>N</motion.h1>
                    <motion.h1 variants={textAnimated}>E</motion.h1>
                    <motion.h1 variants={textAnimated}>R</motion.h1>
                </motion.div>
                </div>
            </div>
            
        </div>

        <div className = "scroll-box">

            <div className = "Scroll-txt">
                <h1>PRIVIEW DEVELOPER</h1>
            </div>
            
            <div className = "scroll-arrow">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div className = "Owl-ImageBox" ref = {imgRef}>
        </div>

        </div>

        <div className="Banner-PreviewImg">
        </div>

        </div>
    </div>
  )
}

export default BannerSection