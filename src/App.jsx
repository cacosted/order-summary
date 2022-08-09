import { Card } from './components/Card'
import { Hero } from './components/Hero'
import { Body } from './components/Body'
import { Button } from './components/Button'
import { PriceCard } from './components/PriceCard'
import { Heading } from './components/Heading'
import { Container } from './components/Container'
export function App () {
  return (
    <Container>
      <Card>
        <Hero />
        <Body>
          <Heading />
          <PriceCard />
          <Button text='Proceed to Payment' />
          <Button text='Cancel Order' type='text' />
        </Body>
      </Card>
    </Container>
  )
}
