import React from 'react';
import {motion} from 'framer-motion';
import {
  CardInfo,
  HeaderThree,
  Hr,
  ProjectBody,
  ProjectHighlights,
  ProjectKicker,
  ProjectLink,
  ProjectLinks,
  ProjectMeta,
  ProjectVisual,
  ProjectVisualTitle,
  Tag,
  TagList,
  TitleContent,
} from './CardStyles';

const variants = {
  pageInitial: {opacity: 0, y: 16},
  pageAnimate: {opacity: 1, y: 0},
};

const ProjectCard = ({item}) => (
  <motion.article
    className="project-card"
    initial="pageInitial"
    animate="pageAnimate"
    variants={variants}
    transition={{type: 'tween', duration: 0.35}}
  >
    <ProjectVisual>
      <ProjectKicker>{item.client}</ProjectKicker>
      <ProjectVisualTitle>{item.title}</ProjectVisualTitle>
    </ProjectVisual>
    <TitleContent>
      <HeaderThree title>{item.subtitle}</HeaderThree>
      <Hr />
    </TitleContent>
    {(item.period || item.url || item.links?.length > 0) && (
      <ProjectMeta>
        {item.period}{item.period && (item.url || item.links?.length > 0) ? ' · ' : ''}
        {item.url ? 'Project website' : item.links?.length > 0 ? 'Project links' : ''}
      </ProjectMeta>
    )}
    <ProjectBody>
      <CardInfo>{item.description}</CardInfo>
      <ProjectHighlights>
        {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
      </ProjectHighlights>
      {(item.url || item.links?.length > 0) && (
        <ProjectLinks>
          {item.links?.length > 0 ? item.links.map((link) => (
            <ProjectLink key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label} ↗
            </ProjectLink>
          )) : (
            <ProjectLink href={item.url} target="_blank" rel="noopener noreferrer">
              Visit project ↗
            </ProjectLink>
          )}
        </ProjectLinks>
      )}
    </ProjectBody>
    <div className="card-footer">
      <TitleContent style={{marginTop: '1.6rem'}}><b>Stack</b></TitleContent>
      <TagList>
        {item.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </TagList>
    </div>
  </motion.article>
);

export default ProjectCard;
