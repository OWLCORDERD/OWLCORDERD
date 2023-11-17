import { projectDB } from 'pages/Project';
import React from 'react';

interface propsDataType {
  currentData: projectDB | null;
}

function CurrentBanner({ currentData }: propsDataType) {
  return (
    <div className="CurrentInfo-container">
      <div className="Project-ImgBox">
        <img src={currentData?.mainImg} alt="mainImg" />
      </div>

      <div className="Project-infoBox">
        <h2 className="Project-subTitle">{currentData?.type}</h2>
        <h1 className="Project-title">
          {currentData?.siteSubTitle}, {currentData?.siteTitle}
        </h1>

        <p className="Project-info">{currentData?.siteInfo}</p>
      </div>
    </div>
  );
}

export default CurrentBanner;
