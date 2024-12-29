import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Project description goes here</p>
          <a href="#">View Project</a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
