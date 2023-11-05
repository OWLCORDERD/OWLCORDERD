import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';

interface NextBeforeType {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrevArrow({ onClick }: NextBeforeType) {
  return (
    <button className="PrevArrow" type="button" onClick={onClick}>
      <BiLeftArrowAlt />
    </button>
  );
}

export default PrevArrow;
