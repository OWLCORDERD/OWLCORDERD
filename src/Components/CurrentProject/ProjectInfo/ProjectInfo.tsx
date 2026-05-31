import React, { useState, useEffect, useMemo } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from 'types/data';

interface propsDataType {
  currentData: ProjectType | null;
}

function CurrentBanner({ currentData }: propsDataType) {
  const currentProject = useMemo(() => {
    if (currentData !== null) {
      return {
        title: currentData.title,
        subTitle: currentData.subTitle,
        date: currentData.date,
        type: currentData.type,
        info: currentData.info,
        siteUrl: currentData.siteUrl,
        figmaUrl: currentData.figmaUrl,
        video: currentData.video,
      };
    }

    return {
      title: '',
      subTitle: '',
      date: '',
      type: '',
      info: '',
      siteUrl: '',
      figmaUrl: '',
      video: '',
    };
  }, [currentData]);

  return (
    <div className="project-info">
      <div className="project-detail">
        <div className="project-video">
          <div className="title">
            <h1>{currentProject.title} 프로젝트</h1>
          </div>
          <div className="project-banner">
            {currentProject.video ? (
              <video src={currentProject.video} muted loop controls />
            ) : (
              <img src={currentData?.projectBanner} alt={`${currentProject.title} 프로젝트 배너 이미지`} />
            )}
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-item">
            <div className="title">
              <h1>프로젝트명</h1>
            </div>
            <div className="detail-txt">
              <p>{`${currentProject.title}, ${currentProject.subTitle}`}</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="title">
              <h1>개발 기간</h1>
            </div>
            <div className="detail-txt">
              <p>{currentProject.date}</p>
            </div>
          </div>

          {currentProject.siteUrl && currentProject.figmaUrl && (
            <>
              <div className="detail-item">
                <div className="title">
                  <h1>Url</h1>
                </div>
                <div className="detail-txt">
                  <a href={currentProject.siteUrl}>
                    <span>{currentProject.siteUrl}</span>
                    <FiArrowUpRight color="#fff" />
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="title">
                  <h1>Design</h1>
                </div>
                <div className="detail-txt">
                  <a href={currentProject.figmaUrl}>
                    <span>Figma</span>
                    <FiArrowUpRight color="#fff" />
                  </a>
                </div>
              </div>
            </>
          )}

          <div className="detail-item">
            <div className="title">
              <h1>프로젝트 유형</h1>
            </div>
            <div className="detail-txt">
              <p>{currentProject.type}</p>
            </div>
          </div>

          <div className="detail-item skills">
            <div className="title">
              <h1>기술 스택</h1>
            </div>
            <ul className="Skills-list">
              {currentData?.useTech.map(tech => (
                <li>
                  <div className="Skill-item">
                    <span>{tech}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="detail-item desc">
            <div className="title">
              <h1>프로젝트 개요</h1>
            </div>
            <div className="detail-txt">
              <p>{currentProject.info}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="page-preview">
        <div className="preview-titleWrap">
          <div className="title">
            <h1>Page Preview</h1>
          </div>

          <div className="slide-control">
            <div className="prev-button" ref={prevRef}>
              <IoIosArrowBack />
            </div>
            <div className="next-button" ref={nextRef}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>

        <div className="preview-slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides
            loop
            loopAdditionalSlides={2}
            navigation={{ nextEl: '.next-button', prevEl: '.prev-button' }}
            modules={[Navigation]}
          >
            {currentData?.images.map(imageUrl => (
              <SwiperSlide>
                <div className="preview-image">
                  <img src={imageUrl} alt={`${currentData?.title} 프로젝트 페이지 이미지`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
    </div>
  );
}

export default CurrentBanner;
