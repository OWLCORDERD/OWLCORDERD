import React, { useState, useEffect, useRef, SetStateAction } from 'react';
import { ProjectType } from 'api/CommonService';
import { FiArrowUpRight } from 'react-icons/fi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoPlayCircle } from 'react-icons/io5';

interface propsDataType {
  currentData: ProjectType | null;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
  responsiveMatches: boolean;
}

gsap.registerPlugin(ScrollTrigger);

function CurrentBanner({ currentData, setOpen, open, responsiveMatches }: propsDataType) {
  const [currentProject, setCurrentProject] = useState({
    title: '',
    subTitle: '',
    image: '',
    type: '',
    info: '',
    siteUrl: '',
    date: '',
    figmaUrl: '',
  });

  const infoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const playRef = useRef<HTMLButtonElement>(null);

  const openVideo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setOpen(!open);
  };

  useEffect(() => {
    if (currentData) {
      setCurrentProject({
        title: currentData.title,
        subTitle: currentData.subTitle,
        date: currentData.date,
        image: currentData.projectBanner,
        type: currentData.type,
        info: currentData.info,
        siteUrl: currentData.siteUrl,
        figmaUrl: currentData.figmaUrl,
      });
    }
  }, [currentData]);

  useEffect(() => {
    if (!responsiveMatches) {
      if (infoRef.current && imgRef.current) {
        gsap.to(imgRef.current, {
          width: '100%',

          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
          },
        });
      }
    }

    if (playRef.current) {
      gsap.to(playRef.current, {
        opacity: 1,

        scrollTrigger: {
          trigger: infoRef.current,
          start: '20% top',
          end: 'bottom bottom',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <div className="project-info" ref={infoRef}>
      <div className="project-detail">
        <div className="detail-info">
          <div className="detail-item">
            <div className="title">
              <h1>Project Name</h1>
            </div>
            <div className="detail-txt">
              <p>{`${currentProject.title}, ${currentProject.subTitle}`}</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="title">
              <h1>develop date</h1>
            </div>
            <div className="detail-txt">
              <p>{currentProject.date}</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="title">
              <h1>Url</h1>
            </div>
            <div className="detail-txt">
              <a href={currentProject.siteUrl}>
                <span>{currentProject.siteUrl}</span>
                <FiArrowUpRight color="#fff" />
              </a>
            </div>
          </div>

          <div className="detail-item">
            <div className="title">
              <h1>Design</h1>
            </div>
            <div className="detail-txt">
              <a href={currentProject.figmaUrl}>
                <span>Figma</span>
                <FiArrowUpRight color="#fff" />
              </a>
            </div>
          </div>

          <div className="detail-item">
            <div className="title">
              <h1>project Type</h1>
            </div>
            <div className="detail-txt">
              <p>{currentProject.type}</p>
            </div>
          </div>
        </div>

        <div className="project-desc">
          <p>{currentProject.info}</p>
        </div>
      </div>

      <div className="banner-img">
        <div className="project-img" ref={imgRef}>
          <img src={currentProject.image} alt={`${currentProject.title} 프로젝트 배너 이미지`} />
        </div>

        <button type="button" className="play-button" ref={playRef} onClick={openVideo}>
          <span>play video</span>
          <IoPlayCircle className="play-icon" />
        </button>
      </div>
    </div>
  );
}

export default CurrentBanner;
