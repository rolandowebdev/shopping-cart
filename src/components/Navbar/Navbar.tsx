/* eslint-disable import/extensions */
import { Link as RouterLink } from 'react-router-dom'
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useShoppingCart } from '@/context'
import { CardItem } from '../Card/CardItem'
import { formatCurrency } from '@/utilities/formatCurrency'
import links from '@/data/links.json'
import items from '@/data/items.json'

export const Navbar = () => {
  const { cartQuantity, cartItems } = useShoppingCart()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const totalCost =
    cartItems !== null &&
    cartItems !== undefined &&
    cartItems.reduce((total, cartItem) => {
      const storeItem = (items ?? []).find((item) => item?.id === cartItem?.id)
      return total + (storeItem?.price || 0) * cartItem.quantity
    }, 0)

  return (
    <Flex
      as="header"
      position="sticky"
      top={0}
      alignItems="center"
      bg="slateblue"
      color="white"
      shadow="sm"
      minH={20}
      zIndex="sticky">
      <Container
        maxW="container.lg"
        mx="auto"
        w="full"
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Flex as="nav" alignItems="center" gap={4}>
          {(links ?? []).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              as={RouterLink}
              fontSize="xl"
              transition="all 300ms ease"
              _hover={{ textDecoration: 'none', color: 'blackAlpha.900' }}
              _focus={{ textDecoration: 'none', color: 'blackAlpha.900' }}>
              {link.name}
            </Link>
          ))}
        </Flex>
        {cartQuantity > 0 && (
          <>
            <Button
              onClick={onOpen}
              position="relative"
              rounded="full"
              p={5}
              border="2px"
              borderRadius="full"
              borderColor="white"
              bg="transparent"
              color="white"
              transition="all 250ms ease-in-out"
              _hover={{ color: 'slateblue', bg: 'white' }}
              sx={{ aspectRatio: '1/1' }}>
              <EditIcon height={6} width={6} />
              <Text
                position="absolute"
                right={0}
                bottom={0}
                transform="translate(35%, 35%)"
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="red.500"
                color="white"
                height={6}
                rounded="full"
                sx={{ aspectRatio: '1/1' }}>
                {cartQuantity}
              </Text>
            </Button>
            <Drawer
              isOpen={isOpen}
              size="lg"
              placement="right"
              onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader>
                  <Text fontSize="2xl">Your Cart</Text>
                  <DrawerCloseButton
                    border="1px"
                    borderColor="blackAlpha.500"
                  />
                </DrawerHeader>
                <DrawerBody display="flex" flexDirection="column" gap={4}>
                  {(cartItems ?? []).map((item) => (
                    <CardItem
                      key={item.id}
                      id={item.id}
                      quantity={item.quantity}
                    />
                  ))}
                </DrawerBody>

                <DrawerFooter>
                  <Text as="p" fontSize="2xl">
                    Total :{' '}
                    <Text as="span" fontWeight="bold">
                      {formatCurrency(totalCost as number)}
                    </Text>
                  </Text>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        )}
      </Container>
    </Flex>
  )
}
