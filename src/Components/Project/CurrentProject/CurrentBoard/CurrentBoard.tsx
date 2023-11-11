import { projectDB } from 'pages/Project';
import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

interface titleProps {
  currentData: projectDB | null;
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
      id: 1,
      name: 'Main Page Function Chapter.1',
      img: currentData?.mainImg,
    },
    {
      id: 2,
      name: 'Main Page Function Chapter.2',
      img: currentData?.mainImg2,
    },
    {
      id: 3,
      name: 'Main Page Function Chapter.3',
      img: currentData?.mainImg3,
    },
  ];

  const subPage = [
    {
      id: 4,
      name: 'Sub Page Function Chapter.1',
      img: currentData?.subImg,
    },
    {
      id: 5,
      name: 'Sub Page Function Chapter.2',
      img: currentData?.subImg2,
    },
    {
      id: 6,
      name: 'Sub Page Function Chapter.3',
      img: currentData?.subImg3,
    },
    {
      id: 7,
      name: 'Sub Page Function Chapter.4',
      img: currentData?.subImg4,
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
            <a href="/Project-Mainpage" className="mainPage">
              - Main
            </a>
          </li>
          <li>
            <a href="/Project-Subpage" className="subPage">
              - SubPage
            </a>
          </li>
        </ul>
      </div>

      <div className="Project-Board">
        <div className="Main-Board" ref={mainRef}>
          <h1 className="Main-title">Main page</h1>
          {mainPage.map(item => (
            <div className="Board-item" key={item.id}>
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
            <div className="Board-item" key={item.id}>
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
