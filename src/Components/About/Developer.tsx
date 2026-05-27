import React from 'react';
import '../../asset/styles/introduce.scss';
import Advantage from './Advantage';

function Developer() {
  return (
    <section className="Introduce-container">
      <div className="Introduce-infoBox">
        <div className="Introduce-info">
          <h1>트렌드를 탐구하고 주도적인 경험들로 인터렉션을 설계하는 프론트엔드 개발자입니다.</h1>
          <p>
            정적인 화면을 넘어 사용자의 움직임과 흐름에 즉각적으로 반응하는 인터렉티브 웹 경험을 만드는 것에 관심있으며
            새로운 기술 트렌드와 아키텍처를 적극 탐구하여 경험치를 쌓아가고 있습니다.
            <br />
            <br />
            백터 그래픽/모션/데이터 시각화 기술들을 활용해 단순 정보만 전달하는것이 아닌 시선을 머무르게 하는 경험을
            구현합니다.
            <br />
            <br />
            AI를 단순히 자동화 개발 도구로 사용하는것이 아닌 문제 해결 파트너로 적극 활용하여 함께 검증하며 실무에서
            효율적으로 적용하며 더 좋은 방면의 구조로 리드하기 위해 노력합니다.
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
