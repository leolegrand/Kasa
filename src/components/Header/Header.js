import './header.css'
import logo from '../../assets/img/logo_kasa.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <NavLink to={'/'}>
        <img src={logo} alt="logo" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        <ul>
          <li>
            <NavLink
              to={'/'}
              className={(a) => (a.isActive ? 'active-page' : '')}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/about'}
              className={(a) => (a.isActive ? 'active-page' : '')}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
