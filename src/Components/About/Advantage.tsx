import React, { useEffect, useState, useRef } from 'react';
import { ScrollTrigger, gsap } from 'gsap/all';
import { FaHammer } from 'react-icons/fa';
import { CommonService } from '../../api';

interface advantage {
  id: number;
  title: string;
  info: string;
}

const advantageSvg = [
  {
    id: 1,
    icon: () => (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M42 6C23.2422 6 8 21.2422 8 40C8 58.7578 23.2422 74 42 74C49.4219 74 56.2812 71.6094 61.875 67.5625L88.1875 93.8125L93.8125 88.1875L67.8125 62.125C72.9219 56.1719 76 48.4453 76 40C76 21.2422 60.7578 6 42 6ZM42 10C58.5938 10 72 23.4062 72 40C72 56.5938 58.5938 70 42 70C25.4062 70 12 56.5938 12 40C12 23.4062 25.4062 10 42 10Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: 2,
    icon: () => (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1168_29)">
          <rect x="5" y="50" width="20" height="50" fill="white" />
          <rect x="40" y="70" width="20" height="30" fill="white" />
          <rect x="75" y="15" width="20" height="85" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_1168_29">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    icon: () => (
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 10C26.0666 10 6.66663 26.4167 6.66663 46.6667C6.66663 57.8933 12.6444 67.9283 22.0377 74.6549C22.2776 79.7749 21.4842 86.8446 14.4205 90.1042L14.4075 90.1107C14.0919 90.2307 13.8202 90.4437 13.6284 90.7216C13.4366 90.9995 13.3337 91.329 13.3333 91.6667C13.3333 92.1087 13.5089 92.5326 13.8214 92.8452C14.134 93.1577 14.5579 93.3333 15 93.3333C15.0397 93.3333 15.0774 93.327 15.1171 93.3268C15.1258 93.3269 15.1345 93.3269 15.1432 93.3268C23.2566 93.2748 30.1442 88.8901 34.8958 84.2578C36.4025 82.7878 38.5029 82.0644 40.5729 82.4544C43.6062 83.0311 46.76 83.3333 50 83.3333C73.9333 83.3333 93.3333 66.9167 93.3333 46.6667C93.3333 26.4167 73.9333 10 50 10Z"
          fill="white"
        />
      </svg>
    ),
  },
];

function Advantage() {
  const [advanData, setAdvanData] = useState<advantage[]>([]);

  const fetchFailed = [
    {
      id: 1,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 2,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 3,
      title: 'Data Fetch Failed',
      info: '',
    },
  ];

  const AdctnRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    CommonService.getAdvantage().then(res => {
      setAdvanData(res);
    });

    /*
    const tl = gsap.timeline();

    tl.fromTo(
      '.Advantage-Index',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: AdctnRef.current,
          start: '-60% top',
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    );

    tl.fromTo(
      '.Advantages-list',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: AdctnRef.current,
          start: '-50% top',
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    );
    */
  }, []);
  return (
    <div className="Advantage-container" ref={AdctnRef}>
      <div className="Advantage-Index">
        <div className="Index-title">
          <h2>Development Advantage</h2>
        </div>

        <div className="Index-subTitle">
          <p>개발자의 역량 및 강점 3가지를 소개합니다.</p>
        </div>
      </div>

      <div className="Advantages-contents">
        <div className="Advantages-list">
          {advanData.length === 0
            ? fetchFailed.map(item => (
                <div className="Advantage-item" key={item.id}>
                  <div className="Advantage-icon">
                    <FaHammer color="#fff" fontSize="2.5rem" />
                  </div>
                  <div className="Advantage-titleBox">
                    <h2 className="title-Index">0{item.id}</h2>
                    <h2 className="title">{item.title}</h2>
                  </div>

                  <div className="Advantage-info">
                    <p>{item.info}</p>
                  </div>
                </div>
              ))
            : advanData.map(item => (
                <div className="Advantage-item" key={item.id}>
                  <div className="Advantage-icon">{advantageSvg[item.id - 1]?.icon()}</div>
                  <div className="Advantage-titleBox">
                    <h2 className="title-Index">0{item.id}</h2>
                    <h2 className="title">{item.title}</h2>
                  </div>

                  <div className="Advantage-info">
                    <p>{item.info}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Advantage;
