import React from 'react';
import ProjectCard from './ProjectCard';

const CardContainer = () => {
  const items = [
    {
      id: 1,
      title: 'Philly.Search',
      description: 'Philly.Search is a mobile app that generates nearby Philadelphia locations in a one-mile radius of a user, with the goal of promoting Philadelphia’s rich history. \nWon the "Philly Special" track at Temple’s Owlhacks!',
      imageUrl: require('../../images/philly_search.png'),
      projectLink: 'https://devpost.com/software/philly-search',
      techStack: ['React Native', 'Node.js', 'Flask', 'Expo.js', 'Yelp Fusion API'],
    },
  ];
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '16px'
    }
  };

  return (
    <div style={styles.container}>
      {items.map(item => (
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
