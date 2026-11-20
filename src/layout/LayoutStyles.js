import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: auto;
  padding: 0 clamp(16px, 3vw, 32px);

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: calc(7.2rem + env(safe-area-inset-bottom));
  }
`;
