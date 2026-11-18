import styled from 'styled-components';

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.4rem;
  width: 100%;
  margin: 0 0 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ApproachCard = styled.article`
  padding: clamp(1.6rem, 2.5vw, 2.4rem);
  border-radius: 12px;
  background: ${props => props.theme.colors.bgContrast};
  box-shadow: 0 0 3px -1px ${props => props.theme.colors.shadow};

  p {
    font-size: 1.45rem;
    line-height: 1.65;
    opacity: 0.78;
    overflow-wrap: anywhere;
  }
`;

export const ApproachNumber = styled.span`
  color: ${props => props.theme.colors.accent1};
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 0.12em;
`;

export const ApproachTitle = styled.h3`
  margin: 0.8rem 0;
  font-size: 1.8rem;
  line-height: 1.3;
`;
