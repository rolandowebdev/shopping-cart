import { Container, Flex, Text } from '@chakra-ui/react'

type NavbarProps = {
  path: string
}

export const Navbar = ({ path }: NavbarProps) => (
  <Flex
    as="nav"
    justifyContent="space-between"
    alignItems="center"
    bg="slateblue"
    shadow="sm"
    px="4"
    py="4"
    mb="4"
    minH="20">
    <Container maxW="container.lg" mx="auto" w="full">
      <Text as="span" fontSize="2xl" fontWeight="bold">
        {path}
      </Text>
    </Container>
  </Flex>
)
