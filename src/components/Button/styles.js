import styled, { css } from 'styled-components'
import { colors, weights } from '../../styles/styleConfig'

const button = css`
  display: block;
  margin-inline: auto;
  padding: 1em;
  border: none;
  font-size: 1rem;
  font-weight: ${weights.bold};
  cursor: pointer;
  `
export const MainButton = styled.button`
  border-radius: 10px;
  background-color: ${colors.main};
  ${button};
  color: ${colors.white};
  width: 100%;
  box-shadow: 0px 5px 15px hsla(244.9, 74.7%, 52%, 0.43);
  margin-block-end: .8em;

  &:hover,
  &:active
  {
    opacity: .7;
  }
`
export const TextButton = styled.button`
  ${button};
  color: ${colors.sepia};
  background-color: transparent;

  &:hover,
  &:active
  {
    color: ${colors.dark}
  }
`
export const LinkButton = styled.a`
  ${button};
  color: ${colors.main};
  text-decoration: underline;
  background-color: transparent;
  font-size: .8rem;

  &:hover,
  &:active
  {
    opacity: .7;
    text-decoration: none;
  }
`
