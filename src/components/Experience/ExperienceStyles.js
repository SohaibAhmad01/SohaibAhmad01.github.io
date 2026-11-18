import styled from 'styled-components';

export const ResumeGrid = styled.div`
  display: grid;
  gap: 2rem;
  width: 100%;
  margin: 1.6rem 0 3.2rem;
`;

export const ExperienceCard = styled.article`
  padding: clamp(1.6rem, 2.5vw, 2.4rem);
  border-radius: 12px;
  background: ${props => props.theme.colors.bgContrast};
  box-shadow: 0 0 3px -1px ${props => props.theme.colors.shadow};
`;

export const ExperienceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.6rem;
  margin-bottom: 1.6rem;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    gap: 0.6rem;
  }
`;

export const ExperienceTitle = styled.h4`
  font-size: 1.9rem;
  font-weight: 700;
  line-height: 1.35;
  margin-bottom: 0.5rem;
`;

export const ExperienceMeta = styled.p`
  font-size: 1.35rem;
  line-height: 1.5;
  opacity: 0.72;
`;

export const ExperienceList = styled.ul`
  display: grid;
  gap: 0.8rem;
  margin-left: 2rem;
  overflow-wrap: anywhere;

  li {
    list-style: disc;
    font-size: 1.45rem;
    line-height: 1.6;
  }
`;

export const EducationCard = styled.article`
  padding: 2rem 2.4rem;
  border-left: 3px solid ${props => props.theme.colors.accent1};
  background: ${props => props.theme.colors.bgContrast};
`;
