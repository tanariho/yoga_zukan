'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="App">
      <div className="container mx-auto px-3">
        <header className="flex justify-between py-3">
          <h1>ヨガ図鑑</h1>

          {/* humbergerbutton */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className="z-10 space-y-2"
          >
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "opacity-0 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out"
              }
            />
          </button>
          <nav
            className={
              openMenu
                ? "text-center fixed bg-slate-50 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300"
                : "fixed right-[-100%] ease-linear duration-300"
            }
          >
            <ul className="mt-6">
              <li className = 'p-2 cursor-pointer'>
                <Link href='/'>Top</Link>
              </li>
              <li className = 'p-2 cursor-pointer'>
                <Link href='/quiz'>ヨガ検定</Link>
              </li>
              <li className = 'p-2 cursor-pointer'>
                <Link href='/'>未定</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar
