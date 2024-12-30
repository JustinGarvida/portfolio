import React from 'react';
import ProjectCard from './ProjectCard'; // Ensure this import is correct
import projectsElements from '../../assets/projectsElements'; // Updated import statement

const CardContainer = () => {
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '16px',
    },
  };

  return (
    <div style={styles.container}>
      {projectsElements.map(item => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
          projectLink={item.projectLink}
          techStack={item.techStack}
        />
      ))}
    </div>
  );
};

export default CardContainer;