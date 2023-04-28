import React from 'react';

function Certificate() {
  const Certificate = [
    {
      id: 1,
      title: '웹디자인기능사',
      info: '2023.04.19 취득',
      imgurl: './Certificate/webDesign.png',
    },
    {
      id: 2,
      title: '정보처리산업기사',
      info: '2018.11.09 취득',
      imgurl: './Certificate/engineer.png',
    },
    {
      id: 3,
      title: 'GTQ 1급',
      info: '2020.09.11 취득',
      imgurl: './Certificate/GTQ.png',
    },
  ];
  return (
    <div className="Certificate-container">
      <div className="Certificate-header">
        <div className="Certificate-Index">
          <div className="Index-title">
            <h2>Certificate</h2>
          </div>
        </div>
      </div>

      <div className="certificate-Info">
        {Certificate.map(item => (
          <div className="certificate-item" key={item.id}>
            <a href="#">
              <img src={item.imgurl} alt="certificate-img" />
              <h2 className="certificate-title">{item.title}</h2>
              <p className="certificate-info">{item.info}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
