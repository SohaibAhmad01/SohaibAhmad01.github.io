import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {Layout} from '../../layout/Layout';
import {Section, SectionDivider} from '../../styles/GlobalComponents';
import {ProjectLink, ProjectLinks, Tag, TagList} from '../../components/Cards/CardStyles';
import {
  BackToProjects,
  ProjectDetail,
  ProjectDetailHeader,
  ProjectDetailKicker,
  ProjectDetailMeta,
  ProjectDetailSection,
} from '../../components/Projects/ProjectDetailStyles';
import projects from '../../../data/projects.json';

const ProjectPage = ({project}) => {
  const projectLinks = project.links?.length
    ? project.links
    : project.url
      ? [{label: 'Visit project', url: project.url}]
      : [];

  return (
    <Layout>
      <Head>
        <title>{project.title} | Sohaib Ahmad</title>
        <meta name="description" content={project.description} />
      </Head>
      <Section>
        <SectionDivider divider />
        <ProjectDetail>
          <Link href="/all-projects" passHref>
            <BackToProjects>← All projects</BackToProjects>
          </Link>
          <ProjectDetailHeader>
            <ProjectDetailKicker>{project.client}</ProjectDetailKicker>
            <h1>{project.title}</h1>
            <p>{project.subtitle}</p>
            {project.period && <ProjectDetailMeta>{project.period}</ProjectDetailMeta>}
          </ProjectDetailHeader>

          <ProjectDetailSection>
            <h2>About the project</h2>
            <p>{project.description}</p>
          </ProjectDetailSection>

          <ProjectDetailSection>
            <h2>Highlights</h2>
            <ul>
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </ProjectDetailSection>

          <ProjectDetailSection>
            <h2>Technology</h2>
            <TagList>
              {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </TagList>
          </ProjectDetailSection>

          {projectLinks.length > 0 && (
            <ProjectDetailSection>
              <h2>Live projects</h2>
              <ProjectLinks>
                {projectLinks.map((link) => (
                  <ProjectLink key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label} ↗
                  </ProjectLink>
                ))}
              </ProjectLinks>
            </ProjectDetailSection>
          )}
        </ProjectDetail>
      </Section>
    </Layout>
  );
};

export const getStaticPaths = async () => ({
  paths: projects.map((project) => ({params: {id: project.id}})),
  fallback: false,
});

export const getStaticProps = async ({params}) => {
  const project = projects.find((item) => item.id === params.id);

  if (!project) {
    return {notFound: true};
  }

  return {props: {project}};
};

export default ProjectPage;
