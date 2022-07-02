import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='text-center bg-warning p-1 d-flex justify-content-around '>
     <Link to="/">Home</Link>
     <Link to="/movies">Movies</Link>
    </div>
  )
}
