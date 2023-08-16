import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import '../../asset/styles/projectSlide.scss';
import { CommonService } from '../service';

export interface projectDB {
  id: number;
  SiteTitle: string;
  SiteSubTitle: string;
  SiteInfo: string;
  SiteImg: string;
  SiteUrl: string;
  UseTech1: string;
  UseTech2: string;
  UseTech3: string;
  UseTech4: string;
  UseTech5: string;
  madeState: string;
  designState: string;
  type: string;
}

function ProjectSlide() {
  const [projectDB, setProjectDB] = useState<projectDB[]>([]);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [statusTitle, setStatusTitle] = useState<string>('first project');

  const beforeSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (currentSlide === 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (currentSlide === 3) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }

    if (currentSlide === 0) {
      setStatusTitle('second project');
    } else if (currentSlide === 1) {
      setStatusTitle('third project');
    } else if (currentSlide === 2) {
      setStatusTitle('portfolio');
    } else if (currentSlide === 3) {
      setStatusTitle('first project');
    }
  };

  useEffect(() => {
    CommonService.getWorkSiteList().then(res => {
      setProjectDB(res);
    });
  }, []);

  return (
    <div className="ProjectSlide-container">
      <div className="ProjectSlide-header">
        <div className="Slide-title">
          <h2>Project</h2>
        </div>

        <div className="slider-control">
          <button type="button" className="back-button" onClick={e => beforeSlide(e)}>
            <IoIosArrowBack />
          </button>
          <button type="button" className="front-button" onClick={e => nextSlide(e)}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="slider-wrap">
        <div className="slider-container" style={{ left: `-${currentSlide}00%`, transition: 'all 0.6s ease-in' }}>
          {projectDB.map(item => (
            <div className="slide-box">
              <div className="Project-Img">
                <img src={item.SiteImg} alt="" />
              </div>

              <div className="Project-contents">
                <div className="Project-title">
                  <h2>{item.SiteTitle}</h2>
                </div>

                <div className="Project-status">
                  <p>{item.SiteSubTitle}</p>

                  <div className="Made-state">
                    <span>{item.madeState}</span>
                  </div>
                </div>

                <div className="Project-tag">
                  <div className="tag">
                    <span>#{item.UseTech1}</span>
                    <span>#{item.UseTech2}</span>
                    <span>#{item.UseTech3}</span>
                    <span>#{item.UseTech4}</span>
                    <span>#{item.UseTech5}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-status">
        <div className="status-Box">
          <span className="status-bar" style={{ left: `calc(${currentSlide} * 25%)` }} />
          <div className="status-info" style={{ left: `calc(${currentSlide} * 25%)` }}>
            <h2>{statusTitle}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSlide;
