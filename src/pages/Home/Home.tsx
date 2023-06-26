import { Link } from 'react-router-dom'
import { Text } from '@chakra-ui/react'

export const Home = () => (
  <>
    <Text as="h1">Home</Text>
    <Link to="/store">Go to store page</Link>
  </>
)
