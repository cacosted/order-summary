import { MainButton, TextButton, LinkButton } from './styles'

export const Button = ({ text, type }) => {
  const mainButton = <MainButton>{text}</MainButton>
  const textButton = <TextButton>{text}</TextButton>
  const linkButton = <LinkButton>{text}</LinkButton>

  if (type === 'text') {
    return textButton
  }

  if (type === 'link') {
    return linkButton
  }

  return mainButton
}
