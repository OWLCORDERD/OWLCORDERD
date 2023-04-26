import React from 'react';
import '../../asset/styles/technology.scss';
import DevelopSkills from './DevelopSkills';
import Certificate from './Certificate';
import Developer from './Developer';

function Technology() {
  return (
    <div className="Technology-container">
      <Developer />
      <DevelopSkills />
      <Certificate />
    </div>
  );
}

export default Technology;
