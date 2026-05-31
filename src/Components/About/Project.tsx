import React, { useEffect, useState } from 'react';
import { getProject } from 'api/CommonService';
import { Link } from 'react-router-dom';
import 'asset/styles/project.scss';
import useSWR from 'swr';
import FetchLoading from 'CustomHook/FetchLoading';
import { ProjectType } from 'types/data';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaFolderOpen } from 'react-icons/fa';

function Project() {
  const fetcher = async () => {
    const res = await getProject();

    return res;
  };

  const { data, isLoading, error } = useSWR<ProjectType[]>('api/project', fetcher);

  if (isLoading)
    return (
      <section className="project-container">
        <div className="project-header">
          <div className="title-wrap">
            <h1 className="title">Portfolio Project</h1>
            <span className="desc">참여한 외주 프로젝트 및 개인 포트폴리오들을 소개합니다.</span>
          </div>

          <button type="button" className="view-more">
            + view more
          </button>
        </div>

        <div className="Project-List">
          <FetchLoading />
        </div>
      </section>
    );

  return (
    <section className="project-container">
      <div className="project-header">
        <div className="title-wrap">
          <h1 className="title">Project</h1>
          <span className="desc">참여 외주 프로젝트 및 개인 포트폴리오들을 소개합니다.</span>
        </div>

        <button type="button" className="view-more">
          + view more
        </button>
      </div>

      <div className="project-list">
        <div className="slide-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={2.5}
            breakpoints={{
              375: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 2.5,
              },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, type: 'progressbar', progressbarFillClass: 'custom-progressbar-fill' }}
            speed={1000}
          >
            {data?.map(project => (
              <SwiperSlide key={project.id}>
                <Link
                  to={`/Project/${project.id}`}
                  state={{ projectDB: project }}
                  onClick={() => sessionStorage.setItem('scrollY', window.pageYOffset.toString())}
                  className="project-item"
                >
                  <FaFolderOpen className="fold-icon" />
                  <div className="project-info">
                    <h2 className="title">{project.title}</h2>
                    <p className="sub-title">{project.subTitle}</p>

                    <span className="desc">{project.info}</span>

                    {project.useTech && project.useTech.length > 0 && (
                      <ul className="technology-list">
                        {project.useTech.slice(0, 3).map((tech, index) => (
                          <li key={tech}>{tech}</li>
                        ))}
                        <span className="other-count">+ {project.useTech.length - 3}</span>
                      </ul>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Project;
