import React from 'react'
import "./main.css"
import AboutSection from '../AboutSection/AboutSection'
import BannerSection from '../BannerSection/BannerSection'
import {useEffect, useRef} from "react"
import AsideNav from '../Navigator/AsideNav'
import LocomotiveScroll from "locomotive-scroll"

const MainSection = () => {

  return (
    <>
    <AsideNav/>

    <section>
    <BannerSection/>
    </section>
    </>
  )
}

export default MainSection