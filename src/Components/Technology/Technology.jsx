import {React, useEffect} from 'react'
import "./technology.css"
import Navigator from '../Navigator/Navigator'
import {gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Data from "../../textData.json"
import FigmaTech from './FigmaTech'
import FrontTech from './FrontTech'

const Technology = () => {

    const technology = "technology";

useEffect(()=>{

    const dynamicTxt1 = document.querySelector('.Technology-dynamicTxt');
    const dynamicTxt2 = document.querySelector('.Technology-dynamicTxt-2');
    const dynamicTxt3 = document.querySelector('.Technology-dynamicTxt-3');

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.to('.dynamicTxt-span',{
        top : '100%',
        duration : 1,
        scrollTrigger : {
            trigger : dynamicTxt1,
            start : '-100% top',
            end : '30% top',
            scrub : 1
        }
    })

    tl.to('.dynamicTxt-span-2',{
        top : '100%',
        duration : 1,
        scrollTrigger : {
            trigger : dynamicTxt2,
            start : '-110% top',
            end : '30% top',
            scrub : 1
        }
    })

    tl.to('.dynamicTxt-span-3',{
        top : '100%',
        duration : 1,
        scrollTrigger : {
            trigger : dynamicTxt3,
            start : '-110% top',
            end : '30% top',
            scrub : 1
        }
    })
})


  return (
    <div className = "Technology-container">

        <FrontTech gsap = {gsap} ScrollTrigger = {ScrollTrigger}/>

        <section>
            <Navigator title = {technology}/>

            <div className = "Technology-Introduce">
                <div className = "Technology-subtitle">
                    <div className = "Technology-dynamicTxt">
                        <span className = "dynamicTxt-span">Introduce Developer Skills</span>
                    </div>

                    <div className = "Technology-dynamicTxt-2">
                        <span className = "dynamicTxt-span-2">SOLO PROJECT</span>
                    </div>

                    <div className = "Technology-dynamicTxt-3">
                        <span className = "dynamicTxt-span-3">WEB PUBLISHING FRONT END</span>
                    </div>
                </div>
            </div>

            <FigmaTech jsonDB = {Data} gsap = {gsap} ScrollTrigger = {ScrollTrigger}/>
        </section>
    </div>
  )
}

export default Technology