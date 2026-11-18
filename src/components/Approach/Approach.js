import React from 'react';
import {Section, SectionDivider, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import approach from '../../../data/approach.json';
import {
  ApproachGrid,
  ApproachCard,
  ApproachNumber,
  ApproachTitle,
} from './ApproachStyles';

const Approach = () => (
  <Section id="approach">
    <SectionDivider divider />
    <SectionTitle>How I work</SectionTitle>
    <SectionText>A practical approach to turning complex requirements into dependable products.</SectionText>
    <ApproachGrid>
      {approach.map((step) => (
        <ApproachCard key={step.number}>
          <ApproachNumber>{step.number}</ApproachNumber>
          <ApproachTitle>{step.title}</ApproachTitle>
          <p>{step.description}</p>
        </ApproachCard>
      ))}
    </ApproachGrid>
  </Section>
);

export default Approach;
