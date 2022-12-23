import {React,useState, useEffect,useRef} from 'react'
import './technology.css'
import Data from "../../textData.json";
import {FaReact} from "react-icons/fa"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiJavascript} from "react-icons/si"

const FrontTech = ({gsap, ScrollTrigger}) => {

const [reactContent, setReactContent] = useState([]);
const [HtmlContent, setHtmlContent] = useState([]);
const [JSContent, setJSContent] = useState([]);
const [CSSContent, setCSSContent] = useState([]);

const bannerRef = useRef(null);
const FrontRef = useRef(null);

gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

useEffect(()=>{
    setReactContent(Data.TECHNOLOGY.React);
    setHtmlContent(Data.TECHNOLOGY.Html5);
    setJSContent(Data.TECHNOLOGY.Js);
    setCSSContent(Data.TECHNOLOGY.CSS);
})

useEffect(()=>{
    tl.fromTo('.nav-title',
        {
        fontSize : "6rem",
        letterSpacing : "1rem",
        y : "-90%",
        opacity : 0,
        duration : 1,
        },
        {
        fontSize : "3rem",
        letterSpacing : 0,
        y : 0,
        opacity : 1,
        scrollTrigger : {
        trigger : bannerRef.current,
        start : "top top",
        end : "bottom top",
        scrub : true
        }
    });
    

    tl.to('.banner-title',
        {
        y : 300,
        fontSize : '3rem',
        opacity : 0,
        duration : 1,
        scrollTrigger : {
            trigger : bannerRef.current,
            start : "top top",
            end : "bottom center",
            scrub : 1
        }
    })

    tl.to('.banner-subtitle',
        {
        y : 100,
        opacity : 0,
        duration : 1,
        scrollTrigger : {
        trigger : bannerRef.current,
        start : "top top",
        end : "bottom center",
        scrub : 1
        }
    })

    tl.fromTo('.FrontTECH-title', {
        y : -200,
        opacity : 0,

        },
        {
        y : 0,
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : '.FrontTECH-txtBox',
            start : 'top center',
            end : 'bottom center',
            scrub : true
        }
    })

    tl.fromTo('.TECH-Box', {
        y : 100,
        opacity : 0
    },
    {
        y : 0,
        opacity : 1,
        duration : 1,
        scrollTrigger : {
            trigger : FrontRef.current,
            start : "-40% top",
            end : "bottom bottom",
            scrub : 1
        }
    })
})

  return (
    <section>
    <div className = "Technology-banner">

        <div className = "TechBanner-contents" ref = {bannerRef}>
            <div className = "banner-title">
                <span>TECHNOLOGY</span>
            </div>

            <div className = "banner-subtitle">
                <span>Development Stack</span>
            </div>
        </div>

        <div className = "banner-background">
            <div className = "FrontTECH-container">

                <div className = "FrontTECH-txtBox">
                    <div className = "FrontTECH-title">
                        <span>FRONT-END TECHNOLOGY</span>
                    </div>
                </div>

                <div className = "FrontTECH-GridBox" ref = {FrontRef}>

                    <div className = "TECH-Box">
                        <div className = "TECH-BoxTitle">
                            <h1 className = "BoxTitle-Num">1</h1>
                            <div className = "BoxTitle-txt">
                            <p>{reactContent.title}</p>
                            </div>
                        </div>

                        <div className = "Box-icon">
                        <FaReact className = "TECH-icon"/>
                        </div>

                        <div className = "TECH-Part">
                            <h1>{reactContent.TechPart1}</h1>
                            <h1>{reactContent.TechPart2}</h1>
                            <h1>{reactContent.TechPart3}</h1>
                        </div>

                        <div className = "TECH-SubHeading">
                            <h1>{reactContent.PartHeading}</h1>
                            <h1>{reactContent.PartHeading2}</h1>
                            <h1>{reactContent.PartHeading3}</h1>
                        </div>
                    </div>

                    <div className = "TECH-Box">
                        <div className = "TECH-BoxTitle">
                            <h1 className = "BoxTitle-Num">2</h1>
                            <div className = "BoxTitle-txt">
                            <p>{HtmlContent.title}</p>
                            </div>
                        </div>

                        <div className = "Box-icon">
                        <AiFillHtml5 className = "TECH-icon"/>
                        </div>

                        
                        <div className = "TECH-Part">
                            <h1>{HtmlContent.TechPart1}</h1>
                            <h1>{HtmlContent.TechPart2}</h1>
                            <h1>{HtmlContent.TechPart3}</h1>
                        </div>

                        <div className = "TECH-SubHeading">
                            <h1>{HtmlContent.PartHeading}</h1>
                            <h1>{HtmlContent.PartHeading2}</h1>
                            <h1>{HtmlContent.PartHeading3}</h1>
                        </div>
                    </div>

                    <div className = "TECH-Box">

                        <div className = "TECH-BoxTitle">
                            <h1 className = "BoxTitle-Num">3</h1>
                            <div className = "BoxTitle-txt">
                            <p>{JSContent.title}</p>
                            </div>
                        </div>

                        <div className = "Box-icon">
                            <SiJavascript className = "TECH-icon"/>
                        </div>

                        <div className = "TECH-Part">
                            <h1>{JSContent.TechPart1}</h1>
                            <h1>{JSContent.TechPart2}</h1>
                            <h1>{JSContent.TechPart3}</h1>
                        </div>

                        <div className = "TECH-SubHeading">
                            <h1>{JSContent.PartHeading}</h1>
                            <h1>{JSContent.PartHeading2}</h1>
                            <h1>{JSContent.PartHeading3}</h1>
                        </div>
                    </div>

                    <div className = "TECH-Box">

                        <div className = "TECH-BoxTitle">
                            <h1 className = "BoxTitle-Num">4</h1>
                            <div className = "BoxTitle-txt">
                            <p>{CSSContent.title}</p>
                            </div>
                        </div>

                        <div className="Box-icon">
                        <DiCss3 className = "TECH-icon"/>
                        </div>

                        <div className = "TECH-Part">
                            <h1>{CSSContent.TechPart1}</h1>
                            <h1>{CSSContent.TechPart2}</h1>
                            <h1>{CSSContent.TechPart3}</h1>
                        </div>

                        <div className = "TECH-SubHeading">
                            <h1>{CSSContent.PartHeading}</h1>
                            <h1>{CSSContent.PartHeading2}</h1>
                            <h1>{CSSContent.PartHeading3}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
</section>
  )
}

export default FrontTech