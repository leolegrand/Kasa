import Header from './Header/Header'
import HeadSection from './HeadSection/HeadSection'
import Gallery from './Gallery/Gallery'
import Footer from './Footer/Footer'
import './app.css'

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <HeadSection />
        <Gallery />
      </div>
      <Footer />
    </>
  )
}

export default App
