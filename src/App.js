import './app.css'
import { BrowserRouter} from 'react-router-dom'
import Routes from './Routes/Routes'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
