import React from 'react'
import { NavLink } from 'react-router-dom'
import './pagenotfound.css'

const PageNotFound = () => {
  return (
    <div className="error-page">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to={'/'}>Retourner sur la page d'accueil</NavLink>
    </div>
  )
}

export default PageNotFound
