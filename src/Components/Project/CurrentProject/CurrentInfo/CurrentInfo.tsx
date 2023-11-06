import { projectDB } from 'pages/Project';
import React from 'react';
import { AiFillLike } from 'react-icons/ai';

interface propsDataType {
  currentData: projectDB;
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

      <ul className="Count-menu">
        <li>
          <div className="view-count">
            <span>조회수</span>
            <span>0</span>
          </div>
        </li>

        <li>
          <div className="like-count">
            <AiFillLike fontSize="1rem" />
            <span>0</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CurrentBanner;
