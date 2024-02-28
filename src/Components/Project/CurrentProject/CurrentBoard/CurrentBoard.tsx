import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { ProjectType } from 'api/CommonService';

interface titleProps {
  currentData: ProjectType;
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

  const mainPage =
    currentData && currentData.main_Part3
      ? [
          {
            id: 1,
            name: 'Main Page Banner',
            img: currentData.main_Banner,
          },
          {
            id: 2,
            name: 'Main Page Part.1',
            img: currentData.main_Part1,
          },
          {
            id: 3,
            name: 'Main Page Part.2',
            img: currentData.main_Part2,
          },
          {
            id: 4,
            name: 'Main Page Part.3',
            img: currentData.main_Part3,
          },
        ]
      : [
          {
            id: 1,
            name: 'Main Page Banner',
            img: currentData.main_Banner,
          },
          {
            id: 2,
            name: 'Main Page Part.1',
            img: currentData.main_Part1,
          },
          {
            id: 3,
            name: 'Main Page Part.2',
            img: currentData.main_Part2,
          },
        ];

  const subPage =
    currentData && currentData.sub_Part3
      ? [
          {
            id: 4,
            name: 'Sub Page Part.1',
            img: currentData.sub_Part1,
          },
          {
            id: 5,
            name: 'Sub Page Part.2',
            img: currentData.sub_Part2,
          },
          {
            id: 6,
            name: 'Sub Page Part.3',
            img: currentData.sub_Part3,
          },
          {
            id: 7,
            name: 'Sub Page Part.4',
            img: currentData.sub_Part4,
          },
        ]
      : [
          {
            id: 4,
            name: 'Sub Page Part.1',
            img: currentData.sub_Part1,
          },
          {
            id: 5,
            name: 'Sub Page Part.2',
            img: currentData.sub_Part2,
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
                <img src={item.img} alt="메인 페이지 이미지" />
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
                <img src={item.img} alt="서브 페이지 이미지" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentBoard;
