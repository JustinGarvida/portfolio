import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectLink, techStack }) => {
  return (
    <a
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-sm rounded-lg border-2 border-yellow-500 overflow-hidden shadow-lg m-4 p-4 transition-transform transform hover:scale-105"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-yellow-500">{description}</p>
        <div className="mt-2 text-yellow-500">
          <strong>Tech Stack:</strong> {techStack.join(', ')}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;