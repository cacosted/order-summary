import musicIcon from '../../assets/images/icon-music.svg'
import { Button } from '../Button'
export const PriceCard = () => {
  return (
    <div>
      <img src={musicIcon} alt='Music note' />
      <div>
        <p>Annual Plan</p>
        <p>$59.99/year</p>
      </div>
      <Button text='Change' />
    </div>
  )
}
