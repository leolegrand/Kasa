import './footer.css'
import logo from '../../assets/img/logo_kasa_nb.png'

function Footer() {
  return (
    <footer className="footer">
      <img alt="logo" src={logo}></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
