import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'asset/styles/swiper/swiper.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Navigation } from 'swiper/modules';
import { ProjectType, HistoryType } from 'types/data';
import { collection, getDoc, doc, getDocs } from 'firebase/firestore';
import { db } from 'api/firebase';
import { AiFillPicture } from 'react-icons/ai';
import { FaFilePdf } from 'react-icons/fa';

interface propsDataType {
  currentData: ProjectType | null;
}

function ProjectBoard({ currentData }: propsDataType) {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [historyList, setHistoryList] = useState<HistoryType[]>([]);

  const getHistoryList = async () => {
    const historyData: HistoryType[] = [];

    if (currentData !== null) {
      const currentId: string = currentData.id;

      const docRef = collection(db, 'EngineeringNotes');

      const docSnapShot = await getDocs(docRef);

      if (docSnapShot.empty) {
        return;
      }

      docSnapShot.forEach(doc => {
        const docData = {
          projectDocId: doc.data().id,
          title: doc.data().title,
          info: doc.data().info,
          technology: doc.data().technology,
          filePath: doc.data().filePath,
        };

        historyData.push(docData);
      });
    }

    const filterProjectHistory = historyData.filter(item => item.projectDocId === currentData?.id);

    setHistoryList(filterProjectHistory);
  };

  useEffect(() => {
    if (currentData && currentData.id) {
      getHistoryList();
    }
  }, [currentData]);

  return (
    <div className="project-Board">
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

        {currentData?.images && currentData.images.length > 0 ? (
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
              {currentData?.images?.map(imageUrl => (
                <SwiperSlide>
                  <div className="preview-image">
                    <img src={imageUrl} alt={`${currentData?.title} 프로젝트 페이지 이미지`} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="no-preview">
            <AiFillPicture />
            <p>미리보기 이미지가 없습니다.</p>
          </div>
        )}
      </div>

      <div className="history-list">
        <div className="title-wrap">
          <h2 className="title">주요 기여 이력</h2>
          <span className="count">
            총 <strong>{historyList?.length}</strong> 건
          </span>
        </div>

        <ul className="history-grid">
          {historyList.map(history => (
            <li className="history-item">
              <div className="history-download">
                <FaFilePdf className="pdf-icon" />
                <button type="button" className="download-button">
                  기술 문서 다운로드
                </button>
              </div>
              <div className="history-info">
                <h3 className="history-info-title">{history.title}</h3>
                <p className="history-info-desc">{history.info}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectBoard;
