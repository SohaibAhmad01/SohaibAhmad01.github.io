import styled from 'styled-components';

export const MobileNavBar = styled.nav`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    position: fixed;
    z-index: 30;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-items: center;
    padding: 0.7rem max(0.8rem, env(safe-area-inset-right)) max(0.7rem, env(safe-area-inset-bottom)) max(0.8rem, env(safe-area-inset-left));
    border-top: 1px solid rgba(127, 127, 127, 0.2);
    background: ${(props) => props.theme.darkMode ? 'rgba(23, 24, 31, 0.76)' : 'rgba(247, 247, 247, 0.76)'};
    backdrop-filter: blur(18px) saturate(170%);
    -webkit-backdrop-filter: blur(18px) saturate(170%);
    box-shadow: 0 -0.5rem 2rem rgba(0, 0, 0, 0.08);
  }
`;

export const MobileNavLink = styled.button`
  display: flex;
  min-width: 0;
  min-height: 4.8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.primary1};
  padding: 0;
  border: 1px solid transparent;
  border-radius: 1.2rem;
  background: transparent;
  font-family: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: color 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;

  &:hover,
  &:focus-visible {
    color: ${(props) => props.theme.colors.accent1};
    background: rgba(108, 114, 203, 0.14);
    border-color: rgba(108, 114, 203, 0.24);
    box-shadow: inset 0 1px rgba(255, 255, 255, 0.24), 0 0.6rem 1.8rem rgba(36, 42, 83, 0.1);
    backdrop-filter: blur(14px) saturate(170%);
    -webkit-backdrop-filter: blur(14px) saturate(170%);
    outline: 0;
    transform: translateY(-1px);
  }

  &[aria-current="page"] {
    color: ${(props) => props.theme.colors.accent1};
    background: rgba(108, 114, 203, 0.1);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const MobileNavLabel = styled.span`
  overflow: hidden;
  max-width: 100%;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
