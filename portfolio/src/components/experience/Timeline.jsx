import React from 'react';

const Timeline = ({ children }) => (
  <div className="relative border-l-2 border-[var(--secondary-color)] pl-4">
    {children}
  </div>
);

export default Timeline;
