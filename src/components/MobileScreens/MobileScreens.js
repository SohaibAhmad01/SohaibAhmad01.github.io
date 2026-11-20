import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import profile from '../../../data/profile.json';
import experience from '../../../data/experience.json';
import education from '../../../data/education.json';
import approach from '../../../data/approach.json';
import projects from '../../../data/projects.json';
import skills from '../../../data/skills.json';
import {
  MobileAppFrame,
  ScreenEyebrow,
  ScreenTitle,
  ScreenIntro,
  OverviewActions,
  PrimaryAction,
  SecondaryAction,
  OverviewMeta,
  ScreenCard,
  CardHeading,
  CardMeta,
  CardCopy,
  MobileProjectCard,
  ProjectCardLink,
  ProjectTags,
  ProjectTag,
  SkillChips,
  SkillChip,
  SectionStack,
} from './MobileScreensStyles';

const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

const getActiveScreen = (route, asPath) => {
  if (route === '/all-projects' || route.startsWith('/projects/')) return 'projects';
  if (asPath.includes('#about')) return 'about';
  if (asPath.includes('#approach')) return 'approach';
  if (asPath.includes('#tech')) return 'skills';
  return 'overview';
};

const ScreenHeader = ({eyebrow, title, intro}) => (
  <header>
    <ScreenEyebrow>{eyebrow}</ScreenEyebrow>
    <ScreenTitle>{title}</ScreenTitle>
    {intro && <ScreenIntro>{intro}</ScreenIntro>}
  </header>
);

const OverviewScreen = () => (
  <>
    <ScreenHeader eyebrow={profile.location} title="Overview" intro={profile.role} />
    <ScreenTitle as="h2" $subheading>Building reliable digital products, end to end.</ScreenTitle>
    <ScreenIntro>{profile.summary}</ScreenIntro>
    <OverviewMeta>{profile.experienceYears} years of experience · Full stack · Product delivery</OverviewMeta>
    <OverviewActions>
      <PrimaryAction href={`mailto:${profile.email}`}>Get in touch</PrimaryAction>
      <Link href="/all-projects" passHref>
        <SecondaryAction>Explore projects</SecondaryAction>
      </Link>
    </OverviewActions>
  </>
);

const AboutScreen = () => (
  <>
    <ScreenHeader eyebrow="Profile" title="About" intro={profile.summary} />
    <SectionStack>
      <ScreenCard>
        <CardHeading>Experience</CardHeading>
        {experience.map((item) => (
          <div key={`${item.company}-${item.start}`}>
            <CardHeading as="h3">{item.role}</CardHeading>
            <CardMeta>{item.company} · {item.location}</CardMeta>
            <CardMeta>{item.start} – {item.end}</CardMeta>
            <CardCopy>{item.highlights[0]}</CardCopy>
          </div>
        ))}
      </ScreenCard>
      <ScreenCard>
        <CardHeading>Education</CardHeading>
        {education.map((item) => (
          <CardMeta key={item.institution}>
            {item.qualification} · {item.institution} · {item.year}
          </CardMeta>
        ))}
      </ScreenCard>
    </SectionStack>
  </>
);

const ApproachScreen = () => (
  <>
    <ScreenHeader eyebrow="Principles" title="How I work" intro="A practical approach to turning complex requirements into dependable products." />
    <SectionStack>
      {approach.map((step) => (
        <ScreenCard key={step.number}>
          <ScreenEyebrow>Step {step.number}</ScreenEyebrow>
          <CardHeading>{step.title}</CardHeading>
          <CardCopy>{step.description}</CardCopy>
        </ScreenCard>
      ))}
    </SectionStack>
  </>
);

const ProjectsScreen = () => (
  <>
    <ScreenHeader eyebrow="Selected work" title="Projects" intro="Products and platforms I have helped design and build." />
    <SectionStack>
      {sortedProjects.map((project) => (
        <MobileProjectCard key={project.id}>
          <CardMeta>{project.client}{project.period ? ` · ${project.period}` : ''}</CardMeta>
          <CardHeading>{project.title}</CardHeading>
          <CardCopy>{project.subtitle}</CardCopy>
          <ProjectTags>
            {project.tags.slice(0, 3).map((tag) => <ProjectTag key={tag}>{tag}</ProjectTag>)}
          </ProjectTags>
          <Link href={`/projects/${project.id}`} passHref>
            <ProjectCardLink aria-label={`View ${project.title} project details`}>View project details <span aria-hidden="true">↗</span></ProjectCardLink>
          </Link>
        </MobileProjectCard>
      ))}
    </SectionStack>
  </>
);

const SkillsScreen = () => (
  <>
    <ScreenHeader eyebrow="Toolkit" title="Skills" intro="Tools and technologies I use to design, build, and operate production products." />
    <SectionStack>
      {skills.map(({category, skills: categorySkills}) => (
        <ScreenCard key={category}>
          <CardHeading>{category}</CardHeading>
          <SkillChips>
            {categorySkills.map((skill) => <SkillChip key={skill}>{skill}</SkillChip>)}
          </SkillChips>
        </ScreenCard>
      ))}
    </SectionStack>
  </>
);

const screens = {
  overview: OverviewScreen,
  about: AboutScreen,
  approach: ApproachScreen,
  projects: ProjectsScreen,
  skills: SkillsScreen,
};

const MobileScreens = () => {
  const {route, asPath} = useRouter();

  const [activeScreen, setActiveScreen] = useState(route === '/all-projects' ? 'projects' : 'overview');

  useEffect(() => {
    setActiveScreen(route === '/all-projects' ? 'projects' : getActiveScreen(route, asPath || '/'));
  }, [asPath, route]);

  if (route !== '/' && route !== '/all-projects') return null;

  const Screen = screens[activeScreen];

  return (
    <MobileAppFrame key={activeScreen} aria-live="polite">
      <Screen />
    </MobileAppFrame>
  );
};

export default MobileScreens;
