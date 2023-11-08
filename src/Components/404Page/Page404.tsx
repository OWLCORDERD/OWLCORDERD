import React from 'react';
import 'asset/styles/404Page.scss';
import { BsConeStriped } from 'react-icons/bs';

function Page404() {
  return (
    <div className="Page404-container">
      <div className="Under-construction">
        <div className="construction-icon">
          <BsConeStriped className="icon-svg" />
        </div>

        <div className="construction-info">
          <h1 className="construction-title">현재 페이지 작업중입니다.</h1>
          <p className="explanatory-text">This web site is currently under construction</p>
        </div>
      </div>
    </div>
  );
}

export default Page404;
