import React from 'react';
import MainNav from '../Navigator/MainNav';

function ProjectBanner() {
  return (
    <div className="Project-Banner">
      <MainNav />
      <div className="bg-video">
        <video src={`${process.env.PUBLIC_URL}/video/Project-Banner.mp4`} autoPlay muted loop />
      </div>
      <div className="Project-Index">
        <div className="Index-contentBox">
          <div className="Index-title">
            <h2>Develop Project</h2>
          </div>

          <div className="Dynamic-TxtBox">
            <ul className="Dynamic-txt">
              <li>FRONT-END</li>
              <li>PUBLISHING</li>
            </ul>

            <div className="Static-txt">
              <h2>프로젝트를 소개합니다.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBanner;
