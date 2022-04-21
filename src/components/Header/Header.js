import './header.css'
import logo from '../../assets/img/logo_kasa.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__nav">
        <a href="#">Accueil</a>
        <a href="#">A Propos</a>
      </div>
    </header>
  )
}

export default Header

// CHANGER LA TAILLE DE LA POLICE SELON LA TAILLE DU NAVIGATEUR
// AJOUTER UN SOULIGNEMENT EN FONCTION DE LA PAGE AFFICHEE
