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
} from '@chakra-ui/react'

type CardProps = {
  name: string
  description: string
  price: number
  imgUrl: string
}

export const Card = ({ name, description, price, imgUrl }: CardProps) => (
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
        <Text>{description}</Text>
        <Text color="slateblue" fontSize="2xl">
          ${price}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter px="2" py="4">
      <Button py={2} px={4} bg="slateblue" w="full" rounded="lg">
        Add to cart
      </Button>
    </CardFooter>
  </CardChakra>
)
