import React from 'react'
import "./main.css"
import BannerSection from '../BannerSection/BannerSection'
import PreviewSection from "../About/PreviewSection"
import ProfileSection from "../About/ProfileSection"
import {useEffect, useRef} from "react"
import AsideNav from '../Navigator/AsideNav'
import LocomotiveScroll from "locomotive-scroll"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {gsap} from "gsap"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import PortFolio from '../PortFolio/PortFolio'

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
    <AsideNav/>

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
          <ProfileSection/>
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