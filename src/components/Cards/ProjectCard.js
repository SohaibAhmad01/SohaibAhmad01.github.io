import React from 'react';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {
  CardInfo,
  HeaderThree,
  Hr,
  ProjectBody,
  ProjectKicker,
  ProjectLink,
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
      <HeaderThree $title>{item.subtitle}</HeaderThree>
      <Hr />
    </TitleContent>
    {item.period && <ProjectMeta>{item.period}</ProjectMeta>}
    <ProjectBody>
      <CardInfo>{item.description}</CardInfo>
      <Link href={`/projects/${item.id}`} passHref>
        <ProjectLink aria-label={`See details for ${item.title}`}>See details →</ProjectLink>
      </Link>
    </ProjectBody>
    <div className="card-footer">
      <TitleContent style={{marginTop: '1.6rem'}}><b>Stack</b></TitleContent>
      <TagList>
        {item.tags.slice(0, 4).map((tag) => <Tag key={tag}>{tag}</Tag>)}
        {item.tags.length > 4 && <Tag>+{item.tags.length - 4} more</Tag>}
      </TagList>
    </div>
  </motion.article>
);

export default ProjectCard;
