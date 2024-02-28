import { ProjectType } from 'api/CommonService';
import React from 'react';

interface propsDataType {
  currentData: ProjectType | null;
}

function ProjectSkills({ currentData }: propsDataType) {
  const figmaSvg = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8522 8.981H11.2642V0H15.8522C18.3282 0 20.3422 2.014 20.3422 4.49C20.3422 6.966 18.3282 8.981 15.8522 8.981ZM12.7352 7.51H15.8522C17.5172 7.51 18.8712 6.155 18.8712 4.491C18.8712 2.827 17.5162 1.472 15.8522 1.472H12.7352V7.51ZM12.7352 8.981H8.14823C5.67223 8.981 3.65823 6.967 3.65823 4.491C3.65823 2.015 5.67223 0 8.14823 0H12.7362V8.981H12.7352ZM8.14823 1.471C6.48323 1.471 5.12923 2.826 5.12923 4.49C5.12923 6.154 6.48323 7.51 8.14823 7.51H11.2652V1.471H8.14823ZM12.7352 16.49H8.14823C5.67223 16.49 3.65823 14.476 3.65823 12C3.65823 9.524 5.67223 7.51 8.14823 7.51H12.7362V16.49H12.7352ZM8.14823 8.981C6.48323 8.981 5.12923 10.336 5.12923 12C5.12923 13.664 6.48423 15.019 8.14823 15.019H11.2652V8.981H8.14823ZM8.17223 24C5.68323 24 3.65723 21.986 3.65723 19.51C3.65723 17.034 5.67123 15.02 8.14723 15.02H12.7352V19.461C12.7352 21.964 10.6882 24 8.17223 24ZM8.14823 16.49C7.34786 16.4911 6.58058 16.8095 6.01464 17.3754C5.4487 17.9414 5.13029 18.7086 5.12923 19.509C5.12923 21.174 6.49423 22.528 8.17323 22.528C9.87823 22.528 11.2662 21.152 11.2662 19.46V16.49H8.14823ZM15.8522 16.49H15.7542C13.2782 16.49 11.2642 14.476 11.2642 12C11.2642 9.524 13.2782 7.51 15.7542 7.51H15.8522C18.3282 7.51 20.3422 9.524 20.3422 12C20.3422 14.476 18.3282 16.49 15.8522 16.49ZM15.7552 8.981C14.0902 8.981 12.7362 10.336 12.7362 12C12.7362 13.664 14.0912 15.019 15.7552 15.019H15.8532C17.5182 15.019 18.8722 13.664 18.8722 12C18.8722 10.336 17.5162 8.981 15.8522 8.981H15.7552Z"
        fill="white"
      />
    </svg>
  );
  return (
    <div className="ProjectSkills-container">
      <div className="Design-menu">
        <div className="menu-title">
          <h2>ui design map</h2>
        </div>

        <a href={currentData?.figmaUrl} target="_blank" className="menu-button" rel="noreferrer">
          {figmaSvg()}
          <span>Figma</span>
        </a>
      </div>

      <div className="Skill-menu">
        <div className="menu-title">
          <h2>use Develop tech</h2>
        </div>
        <ul className="Skill-list">
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
    </div>
  );
}

export default ProjectSkills;
