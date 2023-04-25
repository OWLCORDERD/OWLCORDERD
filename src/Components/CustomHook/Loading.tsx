import React from 'react';
import '../../asset/styles/loading.scss';
import { BsDot } from 'react-icons/bs';
import LoadingImg from '../../asset/Image/Circle/Banner-CircleTxtBox.png';

function Loading() {
  return (
    <div className="Loading-container">
      <div className="Loading-RotateBox">
        <img src={LoadingImg} alt="LoadingImg" />
        <span className="Loading-Owl" />
      </div>

      <div className="Loading-Txt">
        <h2>Loading</h2>
        <div className="Loading-dot">
          <span>
            <BsDot />
          </span>
          <span>
            <BsDot />
          </span>
          <span>
            <BsDot />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
