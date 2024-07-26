import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import FetchLoading from 'CustomHook/FetchLoading';
import { getAdvantage } from 'api/CommonService';
import { advantageType } from 'types/data';

function Advantage() {
  const fetcher = async () => {
    const data = await getAdvantage();

    return data;
  };
  const { data, isLoading, error } = useSWR<advantageType[]>('api/advantage', fetcher);

  if (isLoading)
    return (
      <ul className="Advantages-list">
        <FetchLoading />
      </ul>
    );

  return (
    <ul className="Advantages-list">
      {data?.map(item => (
        <li className="Advantage-item" key={item.id}>
          <div className="Advantage-icon">
            <img src={item.svgIcon} width={40} height={40} alt="개발 역량 이미지" />
          </div>
          <div className="Advantage-titleBox">
            <h2 className="title">{item.title}</h2>
          </div>

          <div className="Advantage-info">
            <p>{item.info}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Advantage;
