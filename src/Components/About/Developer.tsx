import React, { useRef } from 'react';
import '../../asset/styles/introduce.scss';
import { ScrollTrigger, gsap } from 'gsap/all';
import Advantage from './Advantage';

gsap.registerPlugin(ScrollTrigger);

function Developer() {
  const ctnRef = useRef(null);

  /*
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.Introduce-titleBox',
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ctnRef.current,
          start: '-40% top',
          end: '20% bottom',
          scrub: 2,
        },
      },
    );

    tl.fromTo(
      '.Developer-ImgBox',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ctnRef.current,
          start: '-20% top',
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    );

    tl.fromTo(
      '.Introduce-info',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ctnRef.current,
          start: '-20% top',
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    );
  }, []);
  */
  return (
    <div className="Introduce-container" ref={ctnRef}>
      <div className="Introduce-infoBox">
        <div className="Introduce-info">
          <h2>트렌드를 찾아보고 시도해보는 퍼블리싱 프론트앤드 개발자 임민혁입니다.</h2>
          <p>
            웹 퍼블리싱부터 프론트앤드 개발까지 발돋움을 진행중인 개발자 임민혁입니다. 저는 개발을 하면서 계속해서
            새로운 기술들을 배우며 더 나은 사이트를 만들어가는 그 과정이 아름답고 재밌다고 느낍니다.
            <br />
            <br />
            사용자 입장에서 어떠한 UI와 기능을 적절히 융화하여 이목을 끌고 사이트 주제에 적합할지 고민하고 웹 표준과
            접근성을 고려하기 위해 노력합니다. <br />
            <br />
            사용성이 편리하고 사이트 하나만으로 키워드를 여러 방면으로 다양하게 소개할 수 있게 더 나은 기술과 트렌드를
            찾아보고 지식을 결과물로 만들어내는 것. 이러한 것이 제가 하는 일이라고 생각합니다.
          </p>

          <a
            href="https://owlcoderd.notion.site/eec4489447c4429ab6fa963e5fc7b344"
            target="_blank"
            className="view-report"
            rel="noreferrer"
          >
            이력서 보기
          </a>
        </div>

        <Advantage />
      </div>
    </div>
  );
}

export default Developer;
