import { projectDB } from 'pages/Project';
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

interface titleProps {
  currentData: projectDB;
}

function CurrentBoard({ currentData }: titleProps) {
  const mainRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: mainRef.current,
      start: 'top top',
      end: 'bottom 5%',
      toggleClass: { targets: '.mainPage', className: 'active' },
    });

    ScrollTrigger.create({
      trigger: subRef.current,
      start: 'top top',
      end: 'bottom 5%',
      toggleClass: { targets: '.subPage', className: 'active' },
    });
  }, []);

  const mainPage = [
    {
      name: 'Main Page Function Chapter.1',
      img: currentData.mainImg,
    },
    {
      name: 'Main Page Function Chapter.2',
      img: currentData.mainImg2,
    },
    {
      name: 'Main Page Function Chapter.3',
      img: currentData.mainImg3,
    },
  ];

  const subPage = [
    {
      name: 'Sub Page Function Chapter.1',
      img: currentData.subImg,
    },
    {
      name: 'Sub Page Function Chapter.2',
      img: currentData.subImg2,
    },
    {
      name: 'Sub Page Function Chapter.3',
      img: currentData.subImg3,
    },
    {
      name: 'Sub Page Function Chapter.4',
      img: currentData.subImg4,
    },
  ];

  return (
    <div className="CurrentBoard-container">
      <div className="Project-category">
        <ul>
          <li>
            <span>Category</span>
          </li>
          <li>
            <a href="#" className="mainPage">
              - Main
            </a>
          </li>
          <li>
            <a href="#" className="subPage">
              - SubPage
            </a>
          </li>
        </ul>
      </div>

      <div className="Project-Board">
        <div className="Main-Board" ref={mainRef}>
          <h1 className="Main-title">Main page</h1>
          {mainPage.map(item => (
            <div className="Board-item">
              <div className="page-info">
                <h1>{item.name}</h1>
              </div>
              <div className="page-ImgBox">
                <img src={item.img} alt="projectImg" />
              </div>
            </div>
          ))}
        </div>

        <div className="Sub-Board" ref={subRef}>
          <h1 className="Main-title">Sub page</h1>
          {subPage.map(item => (
            <div className="Board-item">
              <div className="page-info">
                <h1>{item.name}</h1>
              </div>
              <div className="page-ImgBox">
                <img src={item.img} alt="projectImg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentBoard;
