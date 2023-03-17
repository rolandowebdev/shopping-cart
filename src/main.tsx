import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import { App } from '@/App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraBaseProvider resetCSS theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
)
