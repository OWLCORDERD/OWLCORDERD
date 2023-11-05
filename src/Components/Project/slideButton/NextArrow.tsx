import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow({ onClick }: NextArrowProps) {
  return (
    <button className="NextArrow" type="button" onClick={onClick}>
      <BiRightArrowAlt />
    </button>
  );
}

export default NextArrow;
