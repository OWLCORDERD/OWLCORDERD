import React, { useEffect, useState, useRef } from 'react';
import { IoLogoFigma } from 'react-icons/io5';
import { MdWebAsset } from 'react-icons/md';
import '../../asset/styles/project.scss';
import { ScrollTrigger, gsap } from 'gsap/all';
import { projectDB } from './ProjectSlide';
import { CommonService } from '../service';

function DevelopProject() {
  const [projectDB, setProjectDB] = useState<projectDB[]>([]);

  const projectRef = useRef(null);

  const iyou = projectDB.filter(item => item.SiteTitle === 'IYOU');
  const nhmc = projectDB.filter(item => item.SiteTitle === 'NHMC');
  const owlstore = projectDB.filter(item => item.SiteTitle === 'OWL STORE');
  const portfolio = projectDB.filter(item => item.SiteTitle === 'Portfolio Site');

  gsap.registerPlugin(ScrollTrigger);

  if (projectRef.current) {
    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '-50% top',
      end: '20% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-iyou' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '20% top',
      end: '40% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-nhmc' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '40% top',
      end: '60% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-owlstore' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: '60% top',
      end: '80% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-portfolio' },
    });

    ScrollTrigger.create({
      trigger: projectRef.current,
      start: 'top top',
      end: '100% top',
      toggleClass: { className: 'active', targets: '.DevelopProject-wrap' },
    });
  }

  useEffect(() => {
    CommonService.getWorkSiteList().then(res => {
      setProjectDB(res);
    });
  }, []);

  return (
    <div className="DevelopProject-container" ref={projectRef}>
      <div className="DevelopProject-wrap">
        <div className="DevelopProject-iyou" key={iyou[0]?.id}>
          <div className="Project-infoBox">
            <div className="Project-type">{iyou[0]?.type}</div>
            <div className="Project-title">
              <h2>{iyou[0]?.SiteTitle}</h2>
            </div>
            <ul className="Project-status">
              <li className="made-status">{iyou[0]?.madeState}</li>
              <li className="design-status">{iyou[0]?.designState}</li>
            </ul>
            <div className="Project-info">
              <p>{iyou[0]?.SiteInfo}</p>
            </div>

            <div className="Project-view">
              <a
                href="https://www.figma.com/file/3T5r81YtQ02zXhhtNsTDll/I'YOU-PROJECT?type=design&node-id=0%3A1&t=OAZ5nCafg5rKbsN3-1"
                className="view-figma"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFigma />
                FIGMA
              </a>

              <a href="https://iuprofile.netlify.app/" className="view-site" target="_blank" rel="noreferrer">
                <MdWebAsset />
                View Site
              </a>
            </div>
          </div>

          <div className="Project-ImgBox">
            <div className="IMAC-Img">
              <img src={`${process.env.PUBLIC_URL}/Images/IMAC_vector.png`} alt="IMACImg" />
            </div>

            <div className="Project-Img">
              <span />
              <img src={iyou[0]?.SiteImg} alt="SiteImg" />
            </div>
          </div>
        </div>

        <div className="DevelopProject-nhmc" key={nhmc[0]?.id}>
          <div className="Project-infoBox">
            <div className="Project-type">{nhmc[0]?.type}</div>
            <div className="Project-title">
              <h2>{nhmc[0]?.SiteTitle}</h2>
            </div>
            <ul className="Project-status">
              <li className="made-status">{nhmc[0]?.madeState}</li>
              <li className="design-status">{nhmc[0]?.designState}</li>
            </ul>
            <div className="Project-info">
              <p>{nhmc[0]?.SiteInfo}</p>
            </div>

            <div className="Project-view">
              <a
                href="https://www.figma.com/file/vupgYgR0OvCivnaUTCRNei/NHMC-PROJECT?type=design&node-id=0%3A1&t=PrHXsSv66QUrD5Qj-1"
                className="view-figma"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFigma />
                FIGMA
              </a>

              <a href="https://nhmc.netlify.app/" className="view-site" target="_blank" rel="noreferrer">
                <MdWebAsset />
                View Site
              </a>
            </div>
          </div>

          <div className="Project-ImgBox">
            <div className="IMAC-Img">
              <img src={`${process.env.PUBLIC_URL}/Images/IMAC_vector.png`} alt="IMACImg" />
            </div>

            <div className="Project-Img">
              <img src={nhmc[0]?.SiteImg} alt="SiteImg" />
            </div>
          </div>
        </div>

        <div className="DevelopProject-owlstore" key={owlstore[0]?.id}>
          <div className="Project-infoBox">
            <div className="Project-type">{owlstore[0]?.type}</div>
            <div className="Project-title">
              <h2>{owlstore[0]?.SiteTitle}</h2>
            </div>
            <ul className="Project-status">
              <li className="made-status">{owlstore[0]?.madeState}</li>
              <li className="design-status">{owlstore[0]?.designState}</li>
            </ul>
            <div className="Project-info">
              <p>{owlstore[0]?.SiteInfo}</p>
            </div>

            <div className="Project-view">
              <a
                href="https://www.figma.com/file/InDebQfEyMfUxDzWjaY6I6/OWL-STORE?type=design&t=PrHXsSv66QUrD5Qj-1"
                className="view-figma"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFigma />
                FIGMA
              </a>
            </div>
          </div>

          <div className="Project-ImgBox">
            <div className="IMAC-Img">
              <img src={`${process.env.PUBLIC_URL}/Images/IMAC_vector.png`} alt="IMACImg" />
            </div>

            <div className="Project-Img">
              <img src={owlstore[0]?.SiteImg} alt="SiteImg" />
            </div>
          </div>
        </div>

        <div className="DevelopProject-portfolio" key={portfolio[0]?.id}>
          <div className="Project-infoBox">
            <div className="Project-type">{portfolio[0]?.type}</div>
            <div className="Project-title">
              <h2>{portfolio[0]?.SiteTitle}</h2>
            </div>
            <ul className="Project-status">
              <li className="made-status">{portfolio[0]?.madeState}</li>
              <li className="design-status">{portfolio[0]?.designState}</li>
            </ul>
            <div className="Project-info">
              <p>{portfolio[0]?.SiteInfo}</p>
            </div>

            <div className="Project-view">
              <a
                href="https://www.figma.com/file/WXD3wVGJRH56Xz9ViV1KTO/%5BOWLCODERD%5DPROFILE-SITE?type=design&t=PrHXsSv66QUrD5Qj-1"
                className="view-figma"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFigma />
                FIGMA
              </a>
            </div>
          </div>

          <div className="Project-ImgBox">
            <div className="IMAC-Img">
              <img src={`${process.env.PUBLIC_URL}/Images/IMAC_vector.png`} alt="IMACImg" />
            </div>

            <div className="Project-Img">
              <img src={portfolio[0]?.SiteImg} alt="SiteImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopProject;
