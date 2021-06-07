import * as React from 'react'
import * as Chakra from '@chakra-ui/react'

export const Header = React.memo(() => (
  <Chakra.Box as="header" boxShadow="base">
    <Chakra.Flex justifyContent="space-between" alignItems="center" maxWidth="container.lg" mx="auto" p="2">
      tweet-bookmark
    </Chakra.Flex>
  </Chakra.Box>
))
