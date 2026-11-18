import React from 'react';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {GridContainer} from './ProjectsStyles';
import {ExternalLinks} from '../Cards/CardStyles';
import projects from '../../../data/projects.json';
import ProjectCard from '../Cards/ProjectCard';

const Projects = () => {
  const featuredProjects = [...projects].sort((a, b) => a.order - b.order).slice(0, 3);

  return (
    <Section id="projects">
      <SectionDivider divider />
      <SectionTitle>Selected projects</SectionTitle>
      <GridContainer>
        {featuredProjects.map((project) => <ProjectCard item={project} key={project.id} />)}
      </GridContainer>
      <ExternalLinks href="/all-projects" className="link-to" title="See all projects">See all projects</ExternalLinks>
    </Section>
  );
};

export default Projects;
