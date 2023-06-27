/* eslint-disable import/extensions */
import {
  Box,
  Button,
  Card as CardChakra,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useShoppingCart } from '@/context'
import items from '@/data/items.json'
import { formatCurrency } from '@/utilities/formatCurrency'

type CardItemProps = {
  id: number
  quantity: number
}

export const CardItem = ({ id, quantity }: CardItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const storeItem = (items ?? []).find((item) => item?.id === id)

  return (
    <CardChakra
      direction={{ base: 'column', sm: 'row' }}
      alignContent="center"
      overflow="hidden"
      variant="outline">
      <Image
        minW="200px"
        maxH="130px"
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={storeItem?.imgUrl}
        alt={storeItem?.name}
      />
      <Stack w="full" my="auto">
        <CardBody>
          <HStack gap={2} justifyContent="space-between" alignItems="center">
            <Box>
              <HStack mb={1}>
                <Text fontSize="xl" fontWeight="bold">
                  {storeItem?.name}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {quantity} x
                </Text>
              </HStack>
              <Text>{formatCurrency(storeItem?.price || 0)}</Text>
            </Box>
            <HStack gap={2}>
              <Text fontSize="xl" fontWeight="bold">
                {formatCurrency((storeItem?.price || 0) * quantity)}
              </Text>
              <Button
                onClick={() => removeFromCart(id)}
                p={2}
                border="1px"
                borderColor="blackAlpha.900"
                bg="transparent"
                _hover={{
                  backgroundColor: '#DF2E38',
                  color: '#fff',
                  borderColor: '#DF2E38',
                }}>
                <DeleteIcon />
              </Button>
            </HStack>
          </HStack>
        </CardBody>
      </Stack>
    </CardChakra>
  )
}
