import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider, Container } from '@chakra-ui/react'
import { App } from '@/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider resetCSS>
      <Container mx="auto" minH="100vh" bg="blackAlpha.900" color="white">
        <App />
      </Container>
    </ChakraBaseProvider>
  </React.StrictMode>
)
