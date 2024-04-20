import { ProjectType } from 'api/CommonService';
import React, { useEffect, useState } from 'react';

interface propsDataType {
  currentData: ProjectType | null;
}

function ProjectBoard({ currentData }: propsDataType) {
  const [pageImages, setPageImages] = useState([]);

  useEffect(() => {
    if (currentData) {
      setPageImages(currentData.images);
    }
  }, [currentData]);
  return (
    <div className="project-Board">
      <div className="project-Skills">
        <div className="title">
          <h2>use Develop Skills</h2>
        </div>
        <ul className="Skills-list">
          <li>
            <div className="Skill-item">
              <span>{currentData?.useTech1}</span>
            </div>
          </li>

          <li>
            <div className="Skill-item">
              <span>{currentData?.useTech2}</span>
            </div>
          </li>

          <li>
            <div className="Skill-item">
              <span>{currentData?.useTech3}</span>
            </div>
          </li>

          <li>
            <div className="Skill-item">
              <span>{currentData?.useTech4}</span>
            </div>
          </li>

          {currentData?.useTech5 ? (
            <li>
              <div className="Skill-item">
                <span>{currentData?.useTech5}</span>
              </div>
            </li>
          ) : null}

          {currentData?.useTech6 ? (
            <li>
              <div className="Skill-item">
                <span>{currentData?.useTech6}</span>
              </div>
            </li>
          ) : null}
        </ul>
      </div>

      <div className="page-detail">
        {pageImages.map(image => (
          <div className="detail-img" key={image}>
            <img src={image} alt="페이지 이미지" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectBoard;
