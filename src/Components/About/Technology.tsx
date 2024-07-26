import React, { useState } from 'react';
import '../../asset/styles/technology.scss';
import { TechnologyType } from 'types/data';
import { getTechnology } from 'api/CommonService';
import useSWR from 'swr';
import FetchLoading from 'CustomHook/FetchLoading';

function Technology() {
  const fetcher = async () => {
    const data = await getTechnology();

    return data;
  };

  const { data, isLoading, error } = useSWR('api/technology', fetcher);

  const [tab, setTab] = useState<string>('Develop');

  const DevelopData = data?.filter((item: TechnologyType) => item.type === 'develop');

  const DesignData = data?.filter((item: TechnologyType) => item.type === 'design');

  if (isLoading)
    return (
      <section className="DevelopSkills-container">
        <div className="DevelopSkills-wrap">
          <div className="DevelopSkill-header">
            <div className="DevelopSkill-Index">
              <div className="Index-title">
                <h1>Development Skills</h1>
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
            <FetchLoading />
          </div>
        </div>
      </section>
    );

  return (
    <section className="DevelopSkills-container">
      <div className="DevelopSkills-wrap">
        <div className="DevelopSkill-header">
          <div className="DevelopSkill-Index">
            <div className="Index-title">
              <h1>Development Skills</h1>
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
          {tab === 'Develop'
            ? DevelopData?.map(item => (
                <div className="skill-item" key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.svgIcon} alt="TechImg" />
                  <p>{item.info}</p>
                </div>
              ))
            : DesignData?.map(item => (
                <div className="skill-item" key={item.id}>
                  <h2>{item.title}</h2>
                  <img src={item.svgIcon} alt="TechImg" />
                  <p>{item.info}</p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;
