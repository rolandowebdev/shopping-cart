/* eslint-disable import/extensions */
import { Box, Grid, Heading } from '@chakra-ui/react'
import { Card } from '@/components/Card/Card'
import items from '@/data/items.json'

export const Store = () => (
  <Box as="section">
    <Heading as="h1" fontWeight="bold" fontSize="4xl" mb={4}>
      Store
    </Heading>
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ]}
      gap={4}>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          imgUrl={item.imgUrl}
        />
      ))}
    </Grid>
  </Box>
)
