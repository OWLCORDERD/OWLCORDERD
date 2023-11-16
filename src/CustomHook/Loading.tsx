import React from 'react';
import 'asset/styles/loading.scss';
import { Oval } from 'react-loader-spinner';

function Loading() {
  return (
    <div className="Loading-container">
      <div className="Loading-Txt">
        <div className="Loading-spinner">
          <Oval
            height={80}
            width={80}
            color="#fff"
            visible
            ariaLabel="oval-loading"
            secondaryColor="rgba(255,255,255,0.3)"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
        <h2>Loading</h2>
      </div>
    </div>
  );
}

export default Loading;
