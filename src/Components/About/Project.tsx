import React, { useEffect, useState } from 'react';
import { ProjectType, getProject } from 'api/CommonService';
import { Link } from 'react-router-dom';
import 'asset/styles/project.scss';

function Project() {
  const [projectDB, setProjectDB] = useState<ProjectType[]>([]);

  useEffect(() => {
    getProject().then(res => setProjectDB(res));
  }, []);
  return (
    <section className="Project-container">
      <div className="Project-header">
        <div className="Project-titleBox">
          <span>포트폴리오 프로젝트들을 소개합니다.</span>
          <h1>Project</h1>
        </div>

        <div className="Project-icon">
          <svg viewBox="0 0 171 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M56.1945 1C68.7509 1 78.89 11.1864 78.89 23.8013C78.89 36.4162 68.7509 46.6026 56.1945 46.6026C43.6381 46.6026 33.4989 36.3487 33.4989 23.8013C33.4989 11.2538 43.6381 1 56.1945 1ZM126.43 101.582C129.317 101.582 131.667 103.066 131.667 104.955C131.667 106.844 129.317 108.328 126.43 108.328C123.542 108.328 121.192 106.844 121.192 104.955C121.192 103.066 123.542 101.582 126.43 101.582ZM99.9069 75.0704L97.2881 82.5584C94.6023 76.9593 91.9164 71.5625 89.8349 67.8523C87.5519 62.9952 83.9931 58.8802 79.5615 55.9794C75.1298 53.0787 69.8252 51.3922 64.1849 51.3922H29.3358C13.6907 51.3247 1 64.2095 1 79.7926V122.899C1 129.51 6.30458 134.839 12.8849 134.839H148.991L170.209 75.0704H99.9069ZM144.358 128.228H59.1489V124.383C59.1489 118.447 54.3144 113.59 48.4055 113.59H22.1512V84.3798C22.1512 82.8957 23.3598 81.7489 24.7699 81.7489C26.18 81.7489 27.3886 82.9632 27.3886 84.3798V108.26H48.3383C56.6645 108.26 63.5134 114.669 64.3192 122.899H89.902L104.473 81.7489H160.809L144.358 128.228Z"
              fill="white"
              stroke="white"
            />
          </svg>
        </div>
      </div>

      <div className="Project-List">
        <ul className="card-List">
          {projectDB.map(project => (
            <li className="Project-card">
              <Link to={`/Project/${project.id}`} state={{ projectDB: project }} key={project.id}>
                <div className="Project-Banner">
                  <div className="Project-titleBox">
                    <h2 className="title">{project.title}</h2>
                    <p className="subTitle">{project.subTitle}</p>
                  </div>

                  <div className="Project-info">
                    <p>{project.info}</p>
                  </div>
                </div>

                <div className="Banner-imgBox">
                  <img src={project.projectBanner} alt={`${project.title} 프로젝트 이미지`} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Project;
