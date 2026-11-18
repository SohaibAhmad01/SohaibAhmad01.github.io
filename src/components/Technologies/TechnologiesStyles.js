import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 2rem 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 2rem 0;
    gap: 1.6rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.6rem;
    margin: 2rem 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 0;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 1.9rem;
  line-height: 1.3;
  letter-spacing: 0.02em;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 1.8rem;
  line-height: 1.3;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 1.7rem;
  line-height: 1.3;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.65;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 1.5rem;
    line-height: 1.6;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 1.45rem;
    line-height: 1.6;
  }
`

export const ListItem = styled.li`
  max-width: none;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    max-width: none;
    flex-direction: column;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
