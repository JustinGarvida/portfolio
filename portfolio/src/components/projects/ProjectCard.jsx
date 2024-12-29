import React from 'react';

const ProjectCard = ({ title, description, imageUrl, projectLink, techStack }) => {
  const styles = {
    card: {
      width: '350px', // Increased width of the card
      border: '2px solid #FDB927',
      borderRadius: '8px',
      overflow: 'hidden',
      margin: '16px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '16px', // Added padding around the card
      textDecoration: 'none', // Remove underline from link
      color: 'inherit', // Inherit text color
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    content: {
      padding: '16px',
    },
    title: {
      margin: '0 0 8px 0',
      fontSize: '24px',
    },
    description: {
      margin: '0',
      color: '#FDB927',
    },
    linkContainer: {
      marginTop: '12px',
    },
    techStack: {
      marginTop: '12px',
      color: '#FDB927', // Color for tech stack
    },
  };

  return (
    <a href={projectLink} target="_blank" rel="noopener noreferrer" style={styles.card}>
      <img src={imageUrl} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        <div style={styles.techStack}>
          <strong>Tech Stack:</strong> {techStack.join(', ')} {/* Display tech stack */}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;