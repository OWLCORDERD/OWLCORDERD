import React, { useEffect, useState } from 'react';
import '../../asset/styles/technology.scss';
import { TechnologyType, getTechnology } from 'api/CommonService';

function Technology() {
  const fetchFailed = [
    {
      id: 1,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 2,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 3,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 4,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 5,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 6,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 7,
      title: 'Data Fetch Failed',
      info: '',
    },
    {
      id: 8,
      title: 'Data Fetch Failed',
      info: '',
    },
  ];
  const [TechData, setTechData] = useState<TechnologyType[]>([]);

  const [tab, setTab] = useState<string>('Develop');

  const DevelopData = TechData.filter((item: TechnologyType) => item.type === 'develop');

  const DesignData = TechData.filter((item: TechnologyType) => item.type === 'design');

  useEffect(() => {
    getTechnology().then(res => setTechData(res));
  }, []);

  return (
    <section className="Technology-container">
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

        <div className="DevelopSkill-contents">
          {tab === 'Develop' && TechData !== undefined
            ? DevelopData.map(item => (
                <div className="skill-item" key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.svgIcon} alt="TechImg" />
                  <p>{item.info}</p>
                </div>
              ))
            : DesignData.map(item => (
                <div className="skill-item" key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.svgIcon} alt="TechImg" />
                  <p>{item.info}</p>
                </div>
              ))}
          {TechData.length === 0
            ? fetchFailed.map(item => (
                <div className="skill-item" key={item.id}>
                  <h2>{item.title}</h2>
                  <img src="" alt="TechImg" />
                  <p>{item.info}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}

export default Technology;
