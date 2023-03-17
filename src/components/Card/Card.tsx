import {
  Card as CardChakra,
  Button,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { formatCurrency } from '@/utilities/formatCurrency'

type CardProps = {
  id: number
  name: string
  description: string
  price: number
  imgUrl: string
}

export const Card = ({ id, name, description, price, imgUrl }: CardProps) => {
  const quantity = 1
  return (
    <CardChakra bg="blackAlpha.600" borderRadius="lg" overflow="hidden">
      <CardBody>
        <Image
          src={imgUrl}
          h="220px"
          w="full"
          objectFit="cover"
          alt="Green double couch with wooden legs"
        />
        <Stack mt="6" spacing="3" px="2">
          <Heading as="h2" fontSize="2xl" fontWeight="bold">
            {name}
          </Heading>
          <Text>{id}</Text>
          <Text>{description}</Text>
          <Text color="slateblue" fontSize="2xl">
            {formatCurrency(price)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter px="2" py="4">
        {quantity < 1 ? (
          <Button py={2} px={4} bg="slateblue" w="full" rounded="lg">
            Add to cart
          </Button>
        ) : (
          <Flex alignItems="center" gap={4} mx="auto">
            <Button bg="slateblue" p={2}>
              <AddIcon />
            </Button>
            <Text as="span" fontSize="xl" fontWeight="bold">
              {quantity}
            </Text>
            <Button bg="slateblue" p={2}>
              <MinusIcon />
            </Button>
          </Flex>
        )}
      </CardFooter>
    </CardChakra>
  )
}
