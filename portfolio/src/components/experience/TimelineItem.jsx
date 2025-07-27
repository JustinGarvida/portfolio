import React from 'react';

const TimelineItem = ({ title, company, date, descriptionPoints }) => (
  <div
    className="mb-10 pl-6"
    style={{ color: 'var(--secondary-color)', fontFamily: 'Inter, Arial, sans-serif' }}
  >
    <h3
      className="text-xl font-semibold mb-1"
      style={{ fontFamily: 'Nero, Arial, sans-serif' }}
    >
      {title}
    </h3>
    <p className="text-sm italic mb-2">
      {company} &nbsp;|&nbsp; {date}
    </p>
    <ul className="list-disc ml-5 space-y-2 text-base">
      {descriptionPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
);

export default TimelineItem;
