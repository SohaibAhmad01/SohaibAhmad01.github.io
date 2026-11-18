import React from 'react';
import {Layout} from '../layout/Layout';
import {Section, SectionDivider, PageTitle, SectionText} from '../styles/GlobalComponents';
import {GridContainer} from '../components/Projects/ProjectsStyles';
import ProjectCard from '../components/Cards/ProjectCard';
import projects from '../../data/projects.json';

const AllProjects = () => (
  <Layout>
    <Section id="projects">
      <SectionDivider divider style={{marginBottom: 0}} />
      <PageTitle>Projects</PageTitle>
      <SectionText>A selection of products and platforms I have helped design and build.</SectionText>
      <GridContainer>
        {[...projects].sort((a, b) => a.order - b.order).map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </GridContainer>
    </Section>
  </Layout>
);

export default AllProjects;
