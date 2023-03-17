import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Navbar } from '@/components'

interface PageContainerProps {
  children: ReactNode
}

export const PageContainer = ({ children }: PageContainerProps) => (
  <>
    <Navbar />
    <Container
      as="main"
      height="container.sm"
      maxW="container.lg"
      marginBlock={8}
      px={[8, 6, 4]}>
      {children}
    </Container>
  </>
)
