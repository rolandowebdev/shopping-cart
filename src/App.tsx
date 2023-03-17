import { Container } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { About, Home, Store } from './pages'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Container
      as="main"
      maxW="container.lg"
      mx="auto"
      sx={{ minH: 'calc(100vh - 96px)' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Container>
  </BrowserRouter>
)
