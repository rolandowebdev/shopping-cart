import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from '@/context'
import { PageContainer } from '@/layouts'
import { About, Home, Store } from '@/pages'

export const App = () => (
  <BrowserRouter>
    <ShoppingCartProvider>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </PageContainer>
    </ShoppingCartProvider>
  </BrowserRouter>
)
