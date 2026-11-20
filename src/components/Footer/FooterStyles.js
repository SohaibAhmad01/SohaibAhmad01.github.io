import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1120px;
  padding: 2.4rem 0;
  margin: 1rem auto;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
`

export const ContactLine = styled.p`
  margin-top: 1.6rem;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.7;
  opacity: 0.72;
  overflow-wrap: anywhere;

  a { text-decoration: underline; }
`;
