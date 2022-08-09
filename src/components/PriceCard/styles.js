import styled from 'styled-components'
import { colors, weights } from '../../styles/styleConfig'

export const StyledPriceCard = styled.div`
  background-color: ${colors.lighter};
  padding: 1.5em 1em;
  border-radius: 10px;
  margin-block: 1em;
  display: flex;
  gap: 1em;
`

export const Body = styled.div`
  flex: 2;
`
export const Title = styled.h2`
  font-weight: ${weights.bold};
  font-size: 1rem;
`
export const SubTitle = styled.p`
  color: ${colors.sepia};
`
export const TextButton = styled.a`
  color: ${colors.main};
`
