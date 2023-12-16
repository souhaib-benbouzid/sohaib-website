'use client';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  total: number;
  active: number;
  handleUpdate: (value: number) => void;
}

const Pagination = ({
  className,
  total,
  active,
  handleUpdate,
  ...props
}: Props) => {
  const arr = [];
  const RANGE = 2;

  for (let index = active - RANGE; index <= active + RANGE; index++) {
    if (index > 0) {
      if (index < total + 1) {
        arr.push(index);
      }
    }
  }

  const handleClick = (value: number) => {
    handleUpdate(value);
  };

  return (
    <div className={`join ${className}`} {...props}>
      {arr.map((item) => {
        if (item === active) {
          return (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className='join-item btn btn-secondary btn-active'
            >
              {item}
            </button>
          );
        }
        return (
          <button
            onClick={() => handleClick(item)}
            key={item}
            className='join-item btn'
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
