import styled from 'styled-components'

const Title = styled.h1`
  background: brown;
  color: white
`
export function App () {
  return (
    <>
      <Title>h1</Title>
      <p>Order Summary

        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!

        Annual Plan
        $59.99/year

        Change

        Proceed to Payment
        Cancel Order
      </p>
    </>
  )
}
