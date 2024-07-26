import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from 'types/data';

interface propsDataType {
  currentData: ProjectType | null;
}

function CurrentBanner({ currentData }: propsDataType) {
  const [currentProject, setCurrentProject] = useState({
    title: '',
    subTitle: '',
    type: '',
    info: '',
    siteUrl: '',
    date: '',
    figmaUrl: '',
    video: '',
  });

  useEffect(() => {
    if (currentData) {
      setCurrentProject({
        title: currentData.title,
        subTitle: currentData.subTitle,
        date: currentData.date,
        type: currentData.type,
        info: currentData.info,
        siteUrl: currentData.siteUrl,
        figmaUrl: currentData.figmaUrl,
        video: currentData.video,
      });
    }
  }, [currentData]);

  return (
    <div className="project-info">
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

      <div className="project-video">
        <div className="title">
          <h1>{currentProject.title} Project Video</h1>
        </div>
        <div className="project-banner">
          <video src={currentProject.video} muted loop controls />
        </div>
      </div>
    </div>
  );
}

export default CurrentBanner;
