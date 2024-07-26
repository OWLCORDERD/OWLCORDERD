import React from 'react';
import '../../asset/styles/introduce.scss';
import Advantage from './Advantage';

function Developer() {
  return (
    <section className="Introduce-container">
      <div className="Introduce-infoBox">
        <div className="Introduce-info">
          <h1>트렌드를 찾아보고 시도해보는 프론트앤드 개발자 임민혁입니다.</h1>
          <p>
            UI/UX 기획부터 프론트앤드 개발까지 다양한 경험으로 발돋움을 진행중인 개발자 임민혁입니다. 저는 개발을 하면서
            계속해서 새로운 기술들을 배우며 더 나은 사이트를 만들어가는 그 과정이 아름답고 재밌다고 느낍니다.
            <br />
            <br />
            사용자 입장에서 어떠한 UI와 기능을 적절히 융화하여 이목을 끌고 사이트 주제에 적합할지 고민하고 웹 표준과
            접근성을 고려하기 위해 노력합니다. <br />
            <br />
            사이트 하나만으로 소개하고자 하는 주제나 제품들을 여러 방면으로 다양하게 쉽게 이해할 수 있도록 개발하고
            다양한 라이브러리나 기능으로 인터렉션 모션을 통해 사용자의 이목을 집중시키고 홍보성을 강조하는것. 이러한
            것이 제가 하는 일이라고 생각합니다.
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
    </section>
  );
}

export default Developer;
