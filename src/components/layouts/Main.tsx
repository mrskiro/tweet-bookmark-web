import * as React from 'react'
import * as Chakra from '@chakra-ui/react'
import { Header } from './Header'

export const Main: React.FC = props => {
  return (
    <>
      <Header />
      <Chakra.Container as="main" maxWidth="container.md" minHeight="100vh">
        {props.children}
      </Chakra.Container>
    </>
  )
}
