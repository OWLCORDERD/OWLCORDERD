import React, { useEffect, useState } from 'react';
import { advantageType, getAdvantage } from 'api/CommonService';

function Advantage() {
  const [advantageDB, setAdvantageDB] = useState<advantageType[]>([]);
  useEffect(() => {
    getAdvantage().then(res => setAdvantageDB(res));
  }, []);

  return (
    <ul className="Advantages-list">
      {advantageDB.map(item => (
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
