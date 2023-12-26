import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
    <div className = 'h-20 w-full border-b-2 flex items-center justify-between p-2'>
      <ul className = 'flex'>
        <li className = 'p-2 cursor-pointer'>
          <Link href='/'>Home</Link>
        </li>
        <li className = 'p-2 cursor-pointer'>
          <Link href='/'>About</Link>
        </li>
        <li className = 'p-2 cursor-pointer'>
          <Link href='/'>Profile</Link>
        </li>
      </ul>
      <ul className = 'flex'>
      <li className = 'p-2 cursor-pointer'>
          <Link href='/'>Login</Link>
      </li>
      <li className = 'p-2 cursor-pointer'>
          <Link href='/'>Sign up</Link>
      </li>
      </ul>
    </div>
  )
}

export default Navbar
