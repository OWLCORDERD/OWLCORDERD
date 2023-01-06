import React, { useEffect, useRef, useState, useLayoutEffect} from 'react'
import "./preview.css"
import ScrollTrigger from 'gsap/ScrollTrigger'
import {gsap} from "gsap"
import ReactImg from '../../../asset/Image/react-background.png'
import FigmaImg from '../../../asset/Image/figma-background.png'
import AwsImg from '../../../asset/Image/aws-background.jpg'
import PtsImg from '../../../asset/Image/PhotoShop-back2.png'

const AboutSection = () => {

  const [PrevAbility, setPrevAbility] = useState('#React');

  return (
    <div className = "Preview-container">

      <div className = "Preview-title">
        <div className = "title-left">
          <h1>Development</h1>
        </div>

        <div className = "title-right">
          <h1>Ability</h1>
        </div>

        <ul className = "Preview-list">
          <li className = {PrevAbility === '#React' ? 'active' : ''}>
            <h1 onClick={()=>setPrevAbility('#React')}>#React</h1>
          </li>
          <li className = {PrevAbility === '#Figma' ? 'active' : ''}>
            <h1 onClick={()=>setPrevAbility('#Figma')}>#FIGMA</h1>
          </li>
          <li className = {PrevAbility === '#Aws' ? 'active' : ''}>
            <h1 onClick={()=>setPrevAbility('#Aws')}>#Aws</h1>
          </li>
          <li className = {PrevAbility === '#PhotoShop' ? 'active' : ''}>
            <h1 onClick={()=>setPrevAbility('#PhotoShop')}>#photoshop</h1>
          </li>
        </ul>
      </div>

      <div className = "Preview-React" id = {PrevAbility === '#React' ? 'active' : ''}>
        <div className = "Ability-content">
          <div className = "Ability-title">
            <h1>01</h1>
            <h1>React</h1>
          </div>

          <div className = "Ability-info">
            <p>Figma에서 완성한 UI/UX 디자인 툴을
            자바스크립트 라이브러리인 React를 사용해
            React Component, React Hooks
            등 지원하는 다양한 기능들을 활용하여
            SPA 형식의 간편하고 빠른 사이트를
            제작합니다.</p>
          </div>
        </div>

        <div className = "Ability-imgBox">
          <img src = {ReactImg} alt = ""/>
        </div>
      </div>

      <div className = "Preview-Figma" id = {PrevAbility === '#Figma' ? 'active' : ''}>
        <div className = "Ability-content">
          <div className = "Ability-title">
            <h1>02</h1>
            <h1>Figma</h1>
          </div>

          <div className = "Ability-info">
            <p>페이지 구상 단계에서 각 웹의 컴포넌트
            구조 컨테이너 UI 디자인 작업을 할때,
            FIGMA에서 지원하는 다양한 저작툴을  
            사용하여 다양한 샘플들을 제작합니다.
            </p>
          </div>
        </div>

        <div className = "Ability-imgBox">
          <img src = {FigmaImg} alt = ""/>
        </div>
      </div>

      <div className = "Preview-Aws" id = {PrevAbility === '#Aws' ? 'active' : ''}>
        <div className = "Ability-content">
          <div className = "Ability-title">
            <h1>03</h1>
            <h1>Aws Ec2</h1>
          </div>

          <div className = "Ability-info">
            <p>아마존 웹 서버에서 지원하는 Elastic 컴퓨트
            클라우드 시스템을 활용하여 서버 가상 PC를
            생성 하였습니다.
            <br></br>
            해당 가상 리눅스 서버를 활용하여 깃허브에
            커밋 된 완성된 웹페이지 Repository를
            서버 호스팅시켜 배포단계를 마무리하였으며,
            Mysql 서버 호스팅도 호스팅하여 백앤드 작업을 진행했습니다.
            </p>
          </div>
        </div>

        <div className = "Ability-imgBox">
          <img src = {AwsImg} alt = ""/>
        </div>
      </div>

      <div className = "Preview-PhotoShop" id = {PrevAbility === '#PhotoShop' ? 'active' : ''}>
        <div className = "Ability-content">
          <div className = "Ability-title">
            <h1>04</h1>
            <h1>PhotoShop</h1>
          </div>

          <div className = "Ability-info">
            <p>아마존 웹 서버에서 지원하는 Elastic 컴퓨트
            클라우드 시스템을 활용하여 서버 가상 PC를
            생성 하였습니다.
            <br></br>
            해당 가상 리눅스 서버를 활용하여 깃허브에
            커밋 된 완성된 웹페이지 Repository를
            서버 호스팅시켜 배포단계를 마무리합니다.
            </p>
          </div>
        </div>

        <div className = "Ability-imgBox">
          <img src = {PtsImg} alt = ""/>
        </div>
      </div>

      <div className = "Preview-subtitle">
        <h1>Preview</h1>
      </div>


    </div>
  )
  
}

export default AboutSection