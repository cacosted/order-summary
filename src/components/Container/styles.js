import styled from 'styled-components'
import { colors } from '../../styles/styleConfig'
import mobileImg from '../../assets/images/pattern-background-mobile.svg'
import desktopImg from '../../assets/images/pattern-background-desktop.svg'
export const StyledContainer = styled.main`
  background-image: url(${mobileImg});
  background-color: ${colors.light};
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 100vh;
  display: grid;
  place-items: center;
  
  @media (min-width: 500px) {    
    background-image: url(${desktopImg});
  }
`
