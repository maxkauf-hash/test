import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => (
  <nav className='fixed-top'>
    <div className='row'>
      <div className='col s3'>
        <NavLink to="/" className="brand-logo">
          Redux + TypeScript
        </NavLink>
      </div>
      <div className='col s5'>
        <ul className="hide-on-med-and-down">
          <li cy-data="home-nav-link">
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/products">Produits</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className='col s4'>
        <div className='col s6'></div>
        <div className='col s2'>
          <li><NavLink to="/signin">Connexion</NavLink></li>
        </div>
        <div className='col s2'>
          <li><NavLink to="/register">Inscription</NavLink></li>
        </div>
        <div className='col s2'>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </nav>
)
