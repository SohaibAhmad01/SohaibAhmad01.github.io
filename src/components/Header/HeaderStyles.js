import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr) max-content;
  grid-column-gap: clamp(1rem, 2vw, 2rem);
  align-items: center;
  padding: 1.4rem 0;
  position: ${props => props.sticky ? "sticky" : null };
  top: ${props => props.sticky ? 0 : null };
  background-color: ${props => props.theme.colors.bodyBgColor};
  z-index: 21;

   @media ${(props) => props.theme.breakpoints.md} {
     grid-template-columns: 1fr;
     row-gap: 0.8rem;
   }

   @media ${(props) => props.theme.breakpoints.sm} {
     display: flex;
     justify-content: flex-start;
     padding: 0.9rem 0;
     border-bottom: 1px solid rgba(127, 127, 127, 0.16);
   }
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BrandLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  min-width: 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 0.9rem;
    max-width: 100%;
  }
`;

export const BrandAvatar = styled.img`
  display: block;
  flex: 0 0 auto;
  width: 3.6rem;
  height: 3.6rem;
  border: 1px solid ${props => props.theme.colors.accent1};
  border-radius: 50%;
  object-fit: cover;
  object-position: center 42%;
  background: #080808;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const BrandName = styled.span`
  overflow: hidden;
  color: ${props => props.theme.colors.primary1};
  font-size: 1.65rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
  }
`;

export const Div2 = styled.ul`
  grid-column: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(0.6rem, 1.5vw, 1.8rem);
  
  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 1 / -1;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem clamp(0.5rem, 2vw, 1.2rem);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 1.5rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary1};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.button};
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.25rem;
    font-size: 1.35rem;
  }
`;

export const MobileHeaderSocial = styled.div`
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
