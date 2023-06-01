import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ScrollTrigger, gsap } from 'gsap/all';
import { CommonService } from '../service';

interface advantage {
  id: number;
  title: string;
  info: string;
}

function Developer() {
  const [advanData, setAdvanData] = useState<advantage[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    CommonService.getAdvantage().then(res => {
      setAdvanData(res);
    });

    ScrollTrigger.create({
      trigger: '.Developer-container',
      start: '-10% top',
      end: '40% top',
      toggleClass: { targets: '.Developer-profile', className: 'active' },
    });
  }, []);
  return (
    <div className="Developer-container">
      <div className="Developer-header">
        <div className="Developer-Index">
          <div className="Index-title">
            <h2>Developer</h2>
          </div>

          <div className="Index-subTitle">
            <p>저는 개발할때, 아래 3가지의 강점을 가지고 있습니다.</p>
          </div>
        </div>

        <div className="Advantages-contents">
          <div className="Advantages-title">
            <h2>Advantages</h2>
          </div>

          <div className="Advantages-info">
            {advanData.map(item => (
              <div className="Advantage-item" key={item.id}>
                <div className="Advantage-titleBox">
                  <h2 className="title-Index">0{item.id}</h2>
                  <h2 className="title">{item.title}</h2>
                </div>

                <div className="Advantage-info">
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Developer-profile">
        <div className="profile-img" />
        <a
          href="https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344"
          target="_blank"
          className="view-report"
          rel="noreferrer"
        >
          이력서 보기
        </a>
        <div className="profile-Repository">
          <h2 className="Repository-title">code repository</h2>
          <div className="Repository">
            <a href="https://github.com/OWLCORDERD" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developer;
