import {
  Card as CardChakra,
  Button,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { formatCurrency } from '@/utilities/formatCurrency'
import { useShoppingCart } from '@/context'

type CardProps = {
  id: number
  name: string
  description: string
  price: number
  imgUrl: string
}

export const Card = ({ id, name, description, price, imgUrl }: CardProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)
  return (
    <CardChakra borderRadius="lg" overflow="hidden">
      <CardBody>
        <Image
          src={imgUrl}
          h="220px"
          w="full"
          objectFit="cover"
          rounded="lg"
          alt={name}
        />
        <Stack mt="6" spacing="3" px="2">
          <Heading as="h2" fontSize="2xl" fontWeight="bold">
            {name}
          </Heading>
          <Text>{description}</Text>
          <Text color="slateblue" fontWeight="bold" fontSize="2xl">
            {formatCurrency(price)}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter px="2" py="4">
        {quantity < 1 ? (
          <Button
            onClick={() => increaseCartQuantity(id)}
            py={2}
            px={4}
            w="full"
            bg="slateblue"
            color="white"
            textTransform="capitalize"
            rounded="lg">
            Add to cart
          </Button>
        ) : (
          <Flex flexDirection="column" mx="auto" w="full" color="white">
            <Flex alignItems="center" gap={4} mx="auto">
              <Button
                onClick={() => increaseCartQuantity(id)}
                bg="slateblue"
                p={2}>
                <AddIcon />
              </Button>
              <Text as="span" color="slateblue" fontSize="xl" fontWeight="bold">
                {quantity}
              </Text>
              <Button
                onClick={() => decreaseCartQuantity(id)}
                bg="slateblue"
                p={2}>
                <MinusIcon />
              </Button>
            </Flex>
            <Button
              onClick={() => removeFromCart(id)}
              w="full"
              mt={4}
              p={2}
              fontSize="lg"
              textTransform="capitalize"
              bg="slateblue">
              Remove cart
            </Button>
          </Flex>
        )}
      </CardFooter>
    </CardChakra>
  )
}
