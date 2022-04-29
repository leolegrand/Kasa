import './app.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Product from './pages/Product'
import Page404 from './pages/Page404'

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product=:id" element={<Product />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
