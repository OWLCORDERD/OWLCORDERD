import React from 'react'
import "./main.css"
import BannerSection from '../BannerSection/BannerSection'
import PreviewSection from "../About/Preview/PreviewSection"
import IntroduceSection from "../About/Introduce/Introduce"
import {useEffect, useRef} from "react"
import MainNav from '../Navigator/MainNav'
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {gsap} from "gsap"

const MainSection = () => {
  
  useEffect(()=>{

    gsap.registerPlugin(ScrollTrigger);

    const innerWidth = window.innerWidth;
    const container = document.getElementById('container')
    const containerWidth = container.clientWidth;

    gsap.set('#scroll', { height : containerWidth})

    const scrollDistance = containerWidth - innerWidth;

    const timeline = gsap.timeline({
      smoothChildTiming : true,
      scrollTrigger : {
        horizontal : false,
        trigger : '#container',
        start : 0,
        scrub : 1,
        end : () => `+=${scrollDistance}`
      }
    })

    .to('#container', {
      duration : 100,
      x: -scrollDistance
    })

    timeline.to('#progressBar',{
      xPercent : 100,
      duration : 100
    }, 0)

  },[])

  return (
    <>
    <MainNav/>

    <div id = "scroll">
      <main id = 'main'>

      <div className = "container" id = "container">
        <section id = "section">
          <BannerSection/>
        </section>
        <section id = "section">
          <PreviewSection/>
        </section>
        <section id = "section">
          <IntroduceSection/>
        </section>
      </div>

      <div id = "progress">
      <div id = "progressBar"></div>
      </div>
      
      </main>
    </div>
    </>
  )
}

export default MainSection