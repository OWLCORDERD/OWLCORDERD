import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'asset/styles/swiper/swiper.css';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Navigation } from 'swiper/modules';
import { ProjectType } from 'types/data';

interface propsDataType {
  currentData: ProjectType | null;
}

function ProjectBoard({ currentData }: propsDataType) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="project-Board">
      <div className="project-Skills">
        <div className="title">
          <h2>use Develop Skills</h2>
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

      <div className="page-preview">
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
      </div>
    </div>
  );
}

export default ProjectBoard;
