/* eslint-disable import/extensions */
import { Link as RouterLink } from 'react-router-dom'
import { Button, Container, Flex, Link, Text } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import links from '../../data/links.json'

export const Navbar = () => (
  <Flex
    as="header"
    position="sticky"
    top={0}
    alignItems="center"
    bg="slateblue"
    shadow="sm"
    minH="20"
    zIndex="sticky">
    <Container
      maxW="container.lg"
      mx="auto"
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center">
      <Flex as="nav" alignItems="center" gap={4}>
        {links.map((link) => (
          <Link key={link.name} to={link.path} as={RouterLink} fontSize="xl">
            {link.name}
          </Link>
        ))}
      </Flex>
      <Button
        position="relative"
        p={2}
        rounded="full"
        border="2px"
        borderColor="white"
        transition="all 250ms ease-in-out"
        _hover={{ color: 'slateblue', bg: 'white' }}
        _focus={{ color: 'slateblue', bg: 'white' }}>
        <EditIcon height={6} width={6} />
        <Text
          position="absolute"
          right={0}
          bottom={0}
          transform="translate(35%, 35%)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="bold"
          bg="red.500"
          color="white"
          width={6}
          rounded="full"
          sx={{ aspectRatio: '1 / 1' }}>
          3
        </Text>
      </Button>
    </Container>
  </Flex>
)
