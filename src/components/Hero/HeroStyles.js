import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  min-width: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const HeroLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(22rem, 0.75fr);
  align-items: center;
  gap: clamp(2.4rem, 5vw, 6rem);
  width: 100%;

  @media ${props => props.theme.breakpoints.md} {
    grid-template-columns: minmax(0, 1fr);
    gap: 2.4rem;
  }
`;

export const PortraitFrame = styled.figure`
  width: min(100%, 34rem);
  aspect-ratio: 1;
  justify-self: center;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #13adc7, #6c72cb 55%, #cb69c1);
  box-shadow: 0 1.5rem 5rem rgba(108, 114, 203, 0.18);

  @media ${props => props.theme.breakpoints.md} {
    order: -1;
    width: min(62vw, 25rem);
  }
`;

export const ProfilePortrait = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 42%;
  background: #080808;
`;

export const HeroEyebrow = styled.p`
  color: ${props => props.theme.colors.accent1};
  font-size: 1.45rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 1.2rem;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.25rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 2rem;

  a {
    border: 1px solid ${props => props.theme.colors.accent1};
    border-radius: 999px;
    padding: 0.9rem 1.4rem;
    font-size: 1.45rem;
    font-weight: 600;
  }

  a:first-child {
    color: #fff;
    background: linear-gradient(270deg, ${props => props.theme.colors.background2}, ${props => props.theme.colors.accent1});
  }

  a:hover { opacity: 0.82; }
`;

export const HeroMeta = styled.p`
  opacity: 0.68;
  font-size: 1.35rem;
  margin-top: 1.5rem;
`;
