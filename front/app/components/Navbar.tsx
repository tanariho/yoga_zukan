"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Login from "./Login";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="App">
      <div className="container mx-auto px-3">
        <header className="flex justify-between py-3">
          <Link href="/" className="transition transform hover:scale-105">
            <Image
              src="/yoga_zukan_logo.png"
              width={160}
              height={80}
              alt="ヨガ図鑑"
              style={{ width: "auto", height: "auto" }}
            />
          </Link>

          {/* humbergerbutton */}
          <button
            onClick={handleMenuOpen}
            type="button"
            className="z-30 space-y-2 transition transform hover:scale-105"
          >
            <div
              className={
                openMenu
                  ? "w-8 h-0.5 bg-yellow-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5  bg-lime-700 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "opacity-0 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-lime-700 transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5  bg-yellow-600 -rotate-45 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-lime-700 transition duration-500 ease-in-out"
              }
            />
          </button>
          <nav
            className={
              openMenu
                ? "text-center fixed bg-beige opacity-95 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300 z-20"
                : "fixed right-[-100%] ease-linear duration-300 z-20"
            }
          >
            <ul className="mt-20 text-left mx-auto">
              <li onClick={handleMenuOpen} className="p-2 cursor-pointer mb-10  hover:scale-105">
                <Link href="/">
                  <i className="pi pi-desktop" style={{ color: "#96aa9a" }}></i>{" "}
                  トップページ
                </Link>
              </li>
              <li onClick={handleMenuOpen} className="p-2 cursor-pointer  hover:scale-105">
                <Link href="/quiz">
                  <i className="pi pi-book" style={{ color: "#96aa9a" }}></i>{" "}
                  ヨガ検定
                </Link>
              </li>
              <li onClick={handleMenuOpen} className="p-2 cursor-pointer  hover:scale-105">
                <Link href="/yoga_timer">
                  <i className="pi pi-clock" style={{ color: "#96aa9a" }}></i>{" "}
                  ヨガタイマー
                </Link>
              </li>
              <li onClick={handleMenuOpen} className="p-2 cursor-pointer mb-10  hover:scale-105">
                <Link href="/">
                  <i className="pi pi-pencil" style={{ color: "#96aa9a" }}></i>{" "}
                  ジャーナリング瞑想
                </Link>
              </li>
              {status === "authenticated" && (
                <>
                  <li onClick={handleMenuOpen} className="p-2 cursor-pointer  hover:scale-105">
                    <Link href="/mypage">
                      <i className="pi pi-user" style={{ color: "#96aa9a" }}></i> マイページ
                    </Link>
                  </li>
                  <li onClick={handleMenuOpen} className="p-2 cursor-pointer mb-5  hover:scale-105">
                    <Link href="/yoga_zukan">
                      <i className="pi pi-search" style={{ color: "#96aa9a" }}></i> ヨガ図鑑
                    </Link>
                  </li>
                </>
              )}
              <li className="p-2 cursor-pointer">
                <Login />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
