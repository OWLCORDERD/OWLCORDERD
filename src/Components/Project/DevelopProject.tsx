import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import '../../asset/styles/project.scss';
import { ScrollTrigger, gsap } from 'gsap/all';
import { project } from '../ProjectSlide/ProjectSlide';
import PCImg from '../../asset/Image/IMac_vector.png';

function DevelopProject() {
  const [projectDB, setProjectDB] = useState<project[]>([]);

  const projectRef = useRef(null);
  const iyouRef = useRef(null);

  const iyou = projectDB.filter(item => item.SiteTitle === 'IYOU');
  const nhmc = projectDB.filter(item => item.SiteTitle === 'NHMC');
  const owlstore = projectDB.filter(item => item.SiteTitle === 'OWL STORE');
  const portfolio = projectDB.filter(item => item.SiteTitle === 'Portfolio Site');

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  if (projectRef.current) {
    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '-50% top',
      end: '20% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-iyou .Project-infoBox' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '-50% top',
      end: '20% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-iyou .Project-Img' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '20% top',
      end: '40% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-nhmc .Project-infoBox' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '20% top',
      end: '40% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-nhmc .Project-Img' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '40% top',
      end: '60% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-owlstore .Project-Img' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '40% top',
      end: '60% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-owlstore .Project-infoBox' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '60% top',
      end: '80% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-portfolio .Project-Img' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '60% top',
      end: '80% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-portfolio .Project-infoBox' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: 'top top',
      end: '100% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-wrap' },
    });
  }

  useEffect(() => {
    axios
      .get('http://localhost:4000/WorkSiteList')
      .then(res => res.data)
      .then(data => setProjectDB(data));
  }, []);

  return (
    <div className="DevelopProject-container" ref={projectRef}>
      <div className="DevelopProject-wrap">
        {iyou.map(item => (
          <div className="DevelopProject-iyou" key={item.id}>
            <div className="Project-infoBox">
              <div className="Project-type">{item.type}</div>
              <div className="Project-title">
                <h2>{item.SiteTitle}</h2>
              </div>
              <ul className="Project-status">
                <li className="made-status">{item.madeState}</li>
                <li className="design-status">{item.designState}</li>
              </ul>
              <div className="Project-info">
                <p>{item.SiteInfo}</p>
              </div>
            </div>

            <div className="Project-ImgBox">
              <div className="IMAC-Img">
                <img src={PCImg} alt="IMACImg" />
              </div>

              <div className="Project-Img">
                <span />
                <img src={item.SiteImg} alt="SiteImg" />
              </div>
            </div>
          </div>
        ))}

        {nhmc.map(item => (
          <div className="DevelopProject-nhmc" key={item.id}>
            <div className="Project-infoBox">
              <div className="Project-type">{item.type}</div>
              <div className="Project-title">
                <h2>{item.SiteTitle}</h2>
              </div>
              <ul className="Project-status">
                <li className="made-status">{item.madeState}</li>
                <li className="design-status">{item.designState}</li>
              </ul>
              <div className="Project-info">
                <p>{item.SiteInfo}</p>
              </div>
            </div>

            <div className="Project-ImgBox">
              <div className="Project-Img">
                <img src={item.SiteImg} alt="SiteImg" />
              </div>
            </div>
          </div>
        ))}

        {owlstore.map(item => (
          <div className="DevelopProject-owlstore" key={item.id}>
            <div className="Project-infoBox">
              <div className="Project-type">{item.type}</div>
              <div className="Project-title">
                <h2>{item.SiteTitle}</h2>
              </div>
              <ul className="Project-status">
                <li className="made-status">{item.madeState}</li>
                <li className="design-status">{item.designState}</li>
              </ul>
              <div className="Project-info">
                <p>{item.SiteInfo}</p>
              </div>
            </div>

            <div className="Project-ImgBox">
              <div className="Project-Img">
                <img src={item.SiteImg} alt="SiteImg" />
              </div>
            </div>
          </div>
        ))}

        {portfolio.map(item => (
          <div className="DevelopProject-portfolio" key={item.id}>
            <div className="Project-infoBox">
              <div className="Project-type">{item.type}</div>
              <div className="Project-title">
                <h2>{item.SiteTitle}</h2>
              </div>
              <ul className="Project-status">
                <li className="made-status">{item.madeState}</li>
                <li className="design-status">{item.designState}</li>
              </ul>
              <div className="Project-info">
                <p>{item.SiteInfo}</p>
              </div>
            </div>

            <div className="Project-ImgBox">
              <div className="Project-Img">
                <img src={item.SiteImg} alt="SiteImg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DevelopProject;
