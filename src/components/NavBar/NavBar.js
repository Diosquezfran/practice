import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div>
        <Link to={'/'}>All</Link>
        <br/>
        <Link to={'/jewelery'}>Joyas</Link>
    </div>
  )
}

export default NavBar