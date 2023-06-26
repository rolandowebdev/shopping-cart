import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

export const Home = () => (
  <>
    <Text as="h1" fontSize="3xl" fontWeight="semibold">
      Home
    </Text>
    <Text
      as={Link}
      to="/store"
      _hover={{ textDecoration: 'underline', color: 'blue.300' }}>
      Go to store page
    </Text>
  </>
)
