import React, { useState, useEffect } from 'react';
import { ProjectType } from 'api/CommonService';

interface propsDataType {
  currentData: ProjectType | null;
}

function CurrentBanner({ currentData }: propsDataType) {
  const [currentProject, setCurrentProject] = useState({
    title: '',
    subTitle: '',
    image: '',
    type: '',
    info: '',
    siteUrl: '',
  });

  useEffect(() => {
    if (currentData) {
      setCurrentProject({
        title: currentData.title,
        subTitle: currentData.subTitle,
        image: currentData.main_Banner,
        type: currentData.type,
        info: currentData.info,
        siteUrl: currentData.siteUrl,
      });
    }
  }, [currentData]);

  return (
    <div className="CurrentInfo-container">
      <div className="Project-ImgBox">
        <img src={currentProject.image} alt={`${currentProject.title} 프로젝트 메인 이미지`} />
      </div>

      <div className="Project-infoBox">
        <h2 className="Project-subTitle">{currentProject.type}</h2>
        <h1 className="Project-title">
          {currentProject.subTitle}, {currentProject.title}
        </h1>

        <p className="Project-info">{currentProject.info}</p>

        <a href={currentProject.siteUrl} target="_blank" rel="noreferrer" className="viewPage-button">
          페이지 접속
        </a>
      </div>
    </div>
  );
}

export default CurrentBanner;
