import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const Grid = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={`grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-6 max-w-screen-xl m-auto ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
