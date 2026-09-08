import React from 'react';

interface SlideContainerProps {
  children: React.ReactNode;
}

export const SlideContainer: React.FC<SlideContainerProps> = ({ children }) => {
  return (
    <div className="powerpoint-slide select-none relative overflow-hidden flex flex-col justify-between">
      {children}
    </div>
  );
};
