import React from 'react';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import profile from '../../../data/profile.json';
import experience from '../../../data/experience.json';
import education from '../../../data/education.json';
import {
  EducationCard,
  ExperienceCard,
  ExperienceHeader,
  ExperienceList,
  ExperienceMeta,
  ExperienceTitle,
  ResumeGrid,
} from './ExperienceStyles';

const Experience = () => (
  <Section id="about">
    <SectionDivider divider />
    <SectionTitle>About me</SectionTitle>
    <SectionText>{profile.summary}</SectionText>
    <SectionTitle as="h3" style={{fontSize: '2.6rem', lineHeight: 1.25, marginTop: '1.2rem'}}>Experience</SectionTitle>
    <ResumeGrid>
      {experience.map((item) => (
        <ExperienceCard key={`${item.company}-${item.start}`}>
          <ExperienceHeader>
            <div>
              <ExperienceTitle>{item.role}</ExperienceTitle>
              <ExperienceMeta>{item.company} · {item.location}</ExperienceMeta>
            </div>
            <ExperienceMeta>{item.start} – {item.end}</ExperienceMeta>
          </ExperienceHeader>
          <ExperienceList>
            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ExperienceList>
        </ExperienceCard>
      ))}
    </ResumeGrid>
    <EducationCard>
      <ExperienceTitle>Education</ExperienceTitle>
      {education.map((item) => (
        <ExperienceMeta key={item.institution}>
          {item.qualification} · {item.institution} · {item.year} · GPA {item.grade}
        </ExperienceMeta>
      ))}
    </EducationCard>
  </Section>
);

export default Experience;
