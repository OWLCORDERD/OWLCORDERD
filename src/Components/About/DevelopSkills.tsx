import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface techData {
  id: number;
  TechTitle: string;
  TechImg: string;
  TechInfo: string;
  Type: string;
}

function DevelopSkills() {
  const [TechData, setTechData] = useState<techData[]>([]);

  const [tab, setTab] = useState<string>('Develop');

  const DevelopData = TechData.filter((item: techData) => item.Type === 'Develop');

  const DesignData = TechData.filter((item: techData) => item.Type === 'Design');

  useEffect(() => {
    axios
      .get('http://localhost:4000/Technology')
      .then(res => res.data)
      .then(data => setTechData(data));
  }, []);

  return (
    <div className="DevelopSkills-container">
      <div className="DevelopSkill-header">
        <div className="DevelopSkill-Index">
          <div className="Index-title">
            <h2>Development Skills</h2>
          </div>
        </div>

        <div className="Skills-TabMenu">
          <ul>
            <li className={tab === 'Develop' ? 'active' : ''}>
              <button type="button" onClick={() => setTab('Develop')}>
                Develop
              </button>
            </li>

            <li className={tab === 'Design' ? 'active' : ''}>
              <button type="button" onClick={() => setTab('Design')}>
                Design
              </button>
            </li>
          </ul>
        </div>
      </div>

      {tab === 'Develop' ? (
        <div className="DevelopSkill-contents">
          {DevelopData.map(item => (
            <div className="skill-item" key={item.id}>
              <h2>{item.TechTitle}</h2>
              <img src={item.TechImg} alt="TechImg" />
              <p>{item.TechInfo}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="DevelopSkill-contents">
          {DesignData.map(item => (
            <div className="skill-item" key={item.id}>
              <h2>{item.TechTitle}</h2>
              <img src={item.TechImg} alt="TechImg" />
              <p>{item.TechInfo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DevelopSkills;
