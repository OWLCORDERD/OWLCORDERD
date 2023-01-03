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

  return (
    <>
    <MainNav/>

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

    </>
  )
}

export default MainSection