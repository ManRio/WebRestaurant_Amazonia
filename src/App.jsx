import { } from 'react'
import './estilos.css'
import Header from './components/header'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Menu } from './pages/Menu'
import { Contact } from './pages/Contact'

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
