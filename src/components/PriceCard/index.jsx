import musicIcon from '../../assets/images/icon-music.svg'
import { StyledPriceCard, Body, Title, SubTitle } from './styles'
import { Button } from '../../components/Button'
export const PriceCard = () => {
  return (
    <StyledPriceCard>
      <img src={musicIcon} alt='Music note' />
      <Body>
        <Title>Annual Plan</Title>
        <SubTitle>$59.99/year</SubTitle>
      </Body>
      <Button text='Change' type='link' />
    </StyledPriceCard>
  )
}
