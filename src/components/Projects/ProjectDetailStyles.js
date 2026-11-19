import styled from 'styled-components';

export const ProjectDetail = styled.article`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const BackToProjects = styled.a`
  display: inline-flex;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.accent1};
  font-size: 1.5rem;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectDetailHeader = styled.header`
  margin-bottom: 4rem;
  padding: clamp(2.4rem, 5vw, 4.8rem);
  border-radius: 1.2rem;
  color: #fff;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent1}, ${props => props.theme.colors.background2} 70%, #13adc7);

  h1 {
    margin: 1.2rem 0;
    font-size: clamp(3rem, 6vw, 5.2rem);
    line-height: 1.1;
    color: #fff;
    background: none;
    -webkit-text-fill-color: #fff;
  }

  p {
    max-width: 68rem;
    font-size: clamp(1.7rem, 2.4vw, 2.2rem);
    line-height: 1.5;
    opacity: 0.95;
  }
`;

export const ProjectDetailKicker = styled.p`
  font-size: 1.3rem !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ProjectDetailMeta = styled.p`
  margin-top: 1.6rem;
  font-size: 1.4rem !important;
`;

export const ProjectDetailSection = styled.section`
  margin: 0 0 3.6rem;

  h2 {
    margin-bottom: 1.4rem;
    font-size: 2.4rem;
  }

  p {
    font-size: 1.7rem;
    line-height: 1.7;
  }

  ul {
    display: grid;
    gap: 1rem;
  }

  li {
    position: relative;
    padding-left: 2rem;
    font-size: 1.6rem;
    line-height: 1.65;

    &::before {
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.accent1};
      content: '•';
    }
  }
`;
