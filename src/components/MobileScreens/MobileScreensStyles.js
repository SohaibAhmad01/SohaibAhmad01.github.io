import styled from 'styled-components';

export const MobileAppFrame = styled.section`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    width: 100%;
    max-width: 52rem;
    min-height: calc(100vh - 12rem);
    margin: 0 auto;
    padding: 2.6rem 0 3.2rem;
    animation: mobile-screen-in 180ms ease-out;

    @keyframes mobile-screen-in {
      from { opacity: 0.72; transform: translateY(0.5rem); }
      to { opacity: 1; transform: translateY(0); }
    }
  }
`;

export const ScreenEyebrow = styled.p`
  margin-bottom: 0.7rem;
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const ScreenTitle = styled.h1`
  max-width: 100%;
  margin: 0 0 1rem;
  margin-top: ${(props) => props.$subheading ? '2.6rem' : '0'};
  font-size: ${(props) => props.$subheading ? '2.5rem' : '2.9rem'};
  line-height: ${(props) => props.$subheading ? 1.2 : 1.12};
  overflow-wrap: anywhere;
`;

export const ScreenIntro = styled.p`
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.55rem;
  line-height: 1.65;
  opacity: 0.78;
  overflow-wrap: anywhere;
`;

export const OverviewMeta = styled.p`
  margin-top: 1.8rem;
  padding: 1.3rem 1.5rem;
  border: 1px solid rgba(108, 114, 203, 0.2);
  border-radius: 1.2rem;
  background: rgba(108, 114, 203, 0.08);
  font-size: 1.35rem;
  font-weight: 650;
  line-height: 1.5;
`;

export const OverviewActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.8rem;

  a {
    min-height: 4.6rem;
    justify-content: center;
    border-radius: 1.2rem;
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
  }
`;

export const PrimaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.2rem;
  background: linear-gradient(135deg, ${(props) => props.theme.colors.accent1}, ${(props) => props.theme.colors.background2});
  color: #fff;
`;

export const SecondaryAction = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 1.2rem;
  border: 1px solid rgba(108, 114, 203, 0.35);
  background: ${(props) => props.theme.colors.bgContrast};
  color: ${(props) => props.theme.colors.primary1};
`;

export const SectionStack = styled.div`
  display: grid;
  gap: 1.2rem;
  margin-top: 2rem;
`;

export const ScreenCard = styled.article`
  min-width: 0;
  padding: 1.8rem;
  border: 1px solid rgba(127, 127, 127, 0.12);
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.bgContrast};
  box-shadow: 0 0.8rem 2.4rem rgba(20, 22, 37, 0.06);

  & > div + div {
    margin-top: 1.6rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(127, 127, 127, 0.14);
  }

  & > div > div + div {
    margin-top: 1.4rem;
    padding-top: 1.3rem;
    border-top: 1px solid rgba(127, 127, 127, 0.14);
  }
`;

export const CardHeading = styled.h2`
  margin-bottom: 0.7rem;
  font-size: 1.8rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
`;

export const CardMeta = styled.p`
  margin: 0.3rem 0;
  font-size: 1.25rem;
  line-height: 1.5;
  opacity: 0.68;
  overflow-wrap: anywhere;
`;

export const CardCopy = styled.p`
  margin-top: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.6;
  opacity: 0.82;
  overflow-wrap: anywhere;
`;

export const MobileProjectCard = styled.article`
  min-width: 0;
  padding: 1.8rem;
  border: 1px solid rgba(127, 127, 127, 0.14);
  border-radius: 1.6rem;
  background: ${(props) => props.theme.colors.bgContrast};
  box-shadow: 0 0.8rem 2.4rem rgba(20, 22, 37, 0.06);
`;

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 1.2rem 0 1.5rem;
`;

export const ProjectTag = styled.span`
  max-width: 100%;
  padding: 0.5rem 0.8rem;
  border-radius: 99rem;
  background: rgba(108, 114, 203, 0.1);
  color: ${(props) => props.theme.colors.accent1};
  font-size: 1.1rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
`;

export const ProjectCardLink = styled.a`
  display: flex;
  min-height: 4.2rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
  background: rgba(108, 114, 203, 0.09);
  color: ${(props) => props.theme.colors.primary1};
  font-size: 1.35rem;
  font-weight: 700;

  &:hover,
  &:focus-visible {
    background: rgba(108, 114, 203, 0.16);
    outline: 2px solid ${(props) => props.theme.colors.accent1};
    outline-offset: 2px;
  }
`;

export const SkillChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.1rem;
`;

export const SkillChip = styled.span`
  max-width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid rgba(127, 127, 127, 0.16);
  border-radius: 99rem;
  font-size: 1.2rem;
  line-height: 1.35;
  overflow-wrap: anywhere;
`;
