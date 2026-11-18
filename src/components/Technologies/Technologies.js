import React from 'react';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import skills from '../../../data/skills.json';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>Tools and technologies I use to design, build, and operate production web applications.</SectionText>
    <List>
      {skills.map(({category, skills: categorySkills}) => (
        <ListItem key={category}>
          <ListContainer>
            <ListTitle>{category}</ListTitle>
            <ListParagraph>{categorySkills.join(' · ')}</ListParagraph>
          </ListContainer>
        </ListItem>
      ))}
    </List>
  </Section>
);

export default Technologies;
