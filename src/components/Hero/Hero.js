import React from 'react';
import profile from '../../../data/profile.json';
import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import {
  HeroActions,
  HeroEyebrow,
  HeroLayout,
  HeroMeta,
  LeftSection,
  PortraitFrame,
  ProfilePortrait,
} from './HeroStyles';

const Hero = () => (
  <Section>
    <HeroLayout>
      <LeftSection>
        <HeroEyebrow>{profile.role} · {profile.location}</HeroEyebrow>
        <SectionTitle main>
          Building reliable digital products, end to end.
        </SectionTitle>
        <SectionText style={{paddingBottom: 0}}>{profile.summary}</SectionText>
        <HeroActions>
          <a href={`mailto:${profile.email}`}>Get in touch</a>
          <a href="#projects">Explore my work</a>
        </HeroActions>
        <HeroMeta>{profile.experienceYears} years building full stack products</HeroMeta>
      </LeftSection>
      <PortraitFrame>
        <ProfilePortrait src={profile.portrait} alt={`Portrait of ${profile.name}`} loading="eager" />
      </PortraitFrame>
    </HeroLayout>
  </Section>
);

export default Hero;
