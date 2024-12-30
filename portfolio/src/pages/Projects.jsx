import React from 'react';
import CardContainer from '../components/projects/CardContainer';

function Projects() {
  return (
    <section id="Projects" className="section text-center p-8">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p className="text-lg mb-6">One of the things that I enjoy doing is making personal projects about topics that interest me and participating in hackathons.</p>
     <p className="text-lg mb-6">This is a list of some project that I've worked on in the past!</p>
      <CardContainer />
    </section>
  );
}

export default Projects;