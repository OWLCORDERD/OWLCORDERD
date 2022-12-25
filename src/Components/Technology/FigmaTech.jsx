import {React,useState, useEffect} from 'react'
import './technology.css'
import {TiLocationArrow} from "react-icons/ti"
import { useRef } from 'react'
import ReactTech from './ReactTech'

const FigmaTech = ({jsonDB, gsap, ScrollTrigger}) => {

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline();

    const figmaRef = useRef(null);

    const [test, setTest] = useState([]);
    
    const filterFigma = test.filter(test => test.Tool === "Figma");

    const ReactRef = useRef(null);

    useEffect(()=>{

        setTest(jsonDB.Project);

        ScrollTrigger.create({
            trigger : figmaRef.current,
            start : "-50% top",
            end : "bottom center",
            toggleClass : {targets : "#Figma-select", className : "active"}
        })

        ScrollTrigger.create({
            trigger : ReactRef.current,
            start : "top top",
            end : "bottom center",
            toggleClass : {targets : "#React-select", className : "active"}
        })
    
        tl.to('.Top-banner',{
            x : 500,
            direction : 2,
            scrollTrigger : {
                trigger : figmaRef.current,
                start : "-20% top",
                end : "center bottom",
                scrub : 1
            }
        })
    
        tl.to('.Bottom-banner',{
            x : -500,
            direction : 2,
            scrollTrigger : {
                trigger : figmaRef.current,
                start : "center center",
                end : "center bottom",
                scrub : 1
            }
        })

    })
  return (

    <section>
    <nav className = "Order-Nav">
        <ul>
            <li>
                <TiLocationArrow className="cursor" id = "Figma-select"/>
                <a href = "" id = "Figma-select">FIGMA</a>
            </li>

            <li>
                <TiLocationArrow className="cursor" id = "React-select"/>
                <a href = "" id = "React-select">React</a>
            </li>

            <li>
                <TiLocationArrow className="cursor"/>
                <a href = "">Notion</a>
            </li>
        </ul>
    </nav>

    <div className = "Technology-figma" ref = {figmaRef}>

        <div className = "figma-container">
            <div className = "figma-bannerTxt">
                <div className = "Top-banner">
                    <h1>Interface Design</h1>
                </div>

                <div className = "Bottom-banner">
                    <h1>UI Web design</h1>
                </div>
            </div>

            <div className="FigmaPJ-container">
            {filterFigma.map((item)=>{
                return(
                    <div className = "FigmaPJ-item">
                        <a href = {item.link} target = "_blank">
                        <div className = "PJ-imgBox">
                            <img src = {item.ProjectImg} alt = ""/>
                        </div>

                        <div className = "PJ-contentBox">
                            <div className = "PJ-title">
                                <h1>{item.ProjectName}</h1>
                                <p>{item.SubHeading}</p>
                                <p>#{item.Tech}</p>
                            </div>

                            <div className = "PJ-Tool">
                                <img src = {item.ToolImg} alt = ""/>
                            </div>
                        </div>
                        </a>
                    </div>
                )
            })}
            </div>
        </div>
    </div>

    <ReactTech propsDB = {jsonDB} ReactRef = {ReactRef}/>
    </section>
  )
}

export default FigmaTech