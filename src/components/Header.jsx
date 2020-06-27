import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className=''>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-center p-3'>
        <ul className='navbar-nav'>
          <li className='navbar-item ml-3'>
            <NavLink
              to={'/'}
              className='text-white nav-link font-weight-bold'
            >
              Dashboard
            </NavLink>
          </li>
          <li className='navbar-item ml-3'>
            <NavLink
              to={'/query'}
              className='text-white nav-link font-weight-bold'
            >
              Query
            </NavLink>
          </li>
          <li className='navbar-item ml-3'>
            <NavLink
              to={'/deposit'}
              className='text-white nav-link font-weight-bold'
            >
              Deposit
            </NavLink>
          </li>
          <li className='navbar-item ml-3'>
            <NavLink
              to={'/with-drawal'}
              className='text-white nav-link font-weight-bold'
            >
              WithDrawal
            </NavLink>
          </li>
          <li className='navbar-item ml-3'>
            <NavLink
              to={'/transfer'}
              className='text-white nav-link font-weight-bold'
            >
              Wire Transfer
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
