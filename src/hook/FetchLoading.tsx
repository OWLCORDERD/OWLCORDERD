import React from 'react';
import { Oval } from 'react-loader-spinner';
import 'asset/styles/loading.scss';

function FetchLoading() {
  return (
    <div className="fetchData-Loading">
      <div className="Loading-spinner">
        <Oval
          width={50}
          height={50}
          color="#fff"
          visible
          ariaLabel="oval-loading"
          secondaryColor="rgba(255,255,255,0.3)"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    </div>
  );
}

export default FetchLoading;
