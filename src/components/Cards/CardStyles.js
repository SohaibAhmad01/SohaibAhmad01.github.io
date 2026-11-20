import styled from 'styled-components';

export const ImgContainer = styled.figure`
  margin: 0;
  position: relative;
  overflow: hidden;
`

export const ProjectVisual = styled.div`
  min-height: clamp(145px, 16vw, 180px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(1.6rem, 2.2vw, 2.2rem);
  color: #fff;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent1}, ${props => props.theme.colors.background2} 70%, #13adc7);
`;

export const ProjectKicker = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.9;
`;

export const ProjectVisualTitle = styled.span`
  max-width: 28rem;
  font-family: ${props => props.theme.fonts.title};
  font-size: clamp(2.2rem, 2.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.1;
`;

export const ProjectBody = styled.div`
  padding: 0 1.8rem;
`;

export const ProjectMeta = styled.p`
  margin-top: -0.6rem;
  padding: 0 1.8rem;
  font-size: 1.25rem;
  opacity: 0.65;
`;

export const ProjectHighlights = styled.ul`
  display: grid;
  gap: 0.7rem;
  margin: 1.4rem 0;

  li {
    list-style: disc;
    margin-left: 1.8rem;
    font-size: 1.35rem;
    line-height: 1.55;
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  margin-top: 0.6rem;
  color: ${props => props.theme.colors.accent1};
  font-size: 1.45rem;
  font-weight: 700;
  text-decoration: underline;
`;

export const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.4rem;
`;

export const Picture = styled.picture`
  display: block;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`

export const PictureImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  aspect-ratio: 3 / 2;
`

export const TitleContent = styled.div`
  padding: 0 15px;
  z-index: 20;
  width: 100%;
  font-size: 1.5rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 0.01em;
  color: ${props => props.theme.colors.primary1};
  background: none;
  padding: 1.5rem 0 .5rem;
  font-size: ${(props) => props.$title ? '2rem' : '1.8rem'};
  -webkit-text-fill-color: unset;
  -webkit-background-clip: unset;
`;

export const CardInfo = styled.p`
  width: 100%;
  font-size: 1.45rem;
  line-height: 1.6;
  height: 6.96rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.4rem;
  padding: .7rem 1rem;
  background-image: linear-gradient(270deg,${props => props.theme.colors.background2} 0%, ${props => props.theme.colors.accent1} 100%);
  color: #fefefe;
  transition-duration: 0.3s;
  transition-property: background-image;

  &:hover {
    background-image: linear-gradient(270deg, ${props => props.theme.colors.accent1} 0%, ${props => props.theme.colors.background2} 100%);
  }
  
  &.link-to{
    margin: auto;
    min-height: 44px;
    max-width: max-content;
    padding: 1rem 1.6rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 1rem 1.5rem;
`

export const Tag = styled.li`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: ${props => props.theme.colors.bodyBgColor};
  font-size: 1.15rem;
  opacity: 0.82;
`

export const Button = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background-image: none;
  background-color: transparent;
  transition: background-color 300ms ease-in-out;
  
  svg{
    opacity: 0;
    visibility: hidden;
    transform: scale(0.15);
    transition: transform 300ms ease-in-out,
                opacity 300ms ease-in-out,
                visibility 300ms ease-in-out;
  }
  
  &:hover{
    background-image: none;
    background-color: rgba(0,0,0, .25);
    
    svg{
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
  }
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin-right: auto;
  margin-top: .5rem;
  margin-bottom: 2rem;
  border: 0;
  background: linear-gradient(121.57deg, ${props => props.theme.colors.button} 18.77%, ${props => props.theme.colors.accent1} 60.15%);
`;
