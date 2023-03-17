import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Home, Store } from './pages'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  </BrowserRouter>
)
