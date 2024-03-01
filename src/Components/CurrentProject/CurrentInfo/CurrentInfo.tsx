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
  });

  /*
  const [loading, setLoading] = useState<boolean>(true);
  */

  useEffect(() => {
    if (currentData) {
      setCurrentProject({
        title: currentData.title,
        subTitle: currentData.subTitle,
        image: currentData.main_Banner,
        type: currentData.type,
        info: currentData.info,
      });
    }

    /*
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    */
  }, [currentData]);

  return (
    <div className="CurrentInfo-container">
      <div className="Project-ImgBox">
        <img src={currentProject.image} alt="mainImg" />
      </div>

      <div className="Project-infoBox">
        <h2 className="Project-subTitle">{currentProject.type}</h2>
        <h1 className="Project-title">
          {currentProject.subTitle}, {currentProject.title}
        </h1>

        <p className="Project-info">{currentProject.info}</p>
      </div>
    </div>
  );
}

export default CurrentBanner;
