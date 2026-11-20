import styled from 'styled-components'

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  align-items: ${(props) => props.center ? "center" : "" };
  width: 100%;
  padding: ${(props) => props.nopadding ? "0" : "clamp(5.5rem, 6vw, 7rem) clamp(16px, 4vw, 40px)" };
  margin: 0 auto;
  max-width: 1120px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.lg} {
    grid-template-columns: ${(props) => props.grid ? "1fr" : "unset"};
    padding: ${(props) => props.nopadding ? "0" : "clamp(4.5rem, 6vw, 5.5rem) 24px"};
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "4rem 0"};
    flex-direction: column;
  }
`

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: ${(props) => props.main ? 'clamp(3.2rem, 4.8vw, 4.6rem)' : 'clamp(2.8rem, 3.5vw, 4rem)'};
  line-height: 1.12;
  width: fit-content;
  max-width: 100%;
  margin-bottom: 1.2rem;
  padding: ${(props) => props.main ? '2rem 0 1rem' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? 'clamp(3rem, 6vw, 4rem)' : 'clamp(2.6rem, 4vw, 3.2rem)'};
  }
`

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: ${(props) => props.main ? 'clamp(3.2rem, 4.8vw, 4.6rem)' : 'clamp(2.7rem, 3.3vw, 3.6rem)'};
  line-height: 1.15;
  width: fit-content;
  max-width: 100%;
  margin-bottom: 1.2rem;
  padding: ${(props) => props.main ? '2rem 0 1rem' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? 'clamp(3rem, 6vw, 4rem)' : 'clamp(2.5rem, 4vw, 3.2rem)'};
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 1.8rem;
  line-height: 1.65;
  font-weight: 300;
  padding-bottom: 2.4rem;

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 100%;
    font-size: 1.7rem;
    line-height: 1.6;
    padding-bottom: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    line-height: 1.6;
    padding-bottom: 1.6rem;
  }
`

export const SectionDivider = styled.div`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) => props.colorAlt ? 
    'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' :
    'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${(props) => props.divider ? "0 0 1.6rem" : "" };

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
    margin: 0 0 1.4rem;
  }
`
export const SectionSubText = styled.p`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: ${props => props.theme.colors.primary1};

@media ${(props) => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`
export const SecondaryBtn = styled.button`
  color: #FFF;
  background: none;
  border: 1px solid ${props => props.theme.colors.accent1};
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: ${props => props.theme.colors.primary1};
    background: ${props => props.theme.colors.background1};
    border: 1px solid ${props => props.theme.colors.background2};
  }

  &:active {
    background: ${props => props.theme.colors.button};
    border: 1px solid ${props => props.theme.colors.button};
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '150px' : '262px'};
  height: ${({ alt }) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 80px'};
  color: ${props => props.theme.colors.primary1};
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};

  @media ${(props) => props.theme.breakpoints.md} {
    width: ${({ alt }) => alt ? '150px' : '184px'};
    height: ${({ alt }) => alt ? '52px' : '48px'};
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
    margin-bottom: ${({ alt }) => alt ? '0' : '64px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({ alt }) => alt ? '0' : '32px'};
  }
`

export const ButtonFront = styled.button`
  border: none;
  border-radius: 50px;
  color: ${props => props.theme.colors.primary1};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({ alt }) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({ disabled }) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.button} 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${({ alt }) => alt ? '20px' : '16px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-left: ${({ large }) => large ? '16px' : '8px'};

  }
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: ${({ large }) => large ? '0' : '8px'};
  }
`

export const LinkIconImg = styled.div`
  display: flex;  
  height: ${({ large }) => large ? '32px' : '24px'};

  @media ${(props) => props.theme.breakpoints.md} {
    height: ${({ nav }) => nav ? '16px' : '24px'};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: ${({ large }) => large ? '32px' : '16px'};
  }
`
