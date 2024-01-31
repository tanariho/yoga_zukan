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
      <div className="container w-11/12 mx-auto px-3">
        <header className="flex justify-between py-3  mx-auto">
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
                  ? "w-8 h-0.5 bg-button translate-y-2.5 rotate-45 transition duration-500 ease-in-out  shadow-yellow-500/50"
                  : "w-8 h-0.5  bg-buttongreen transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "opacity-0 transition duration-500 ease-in-out"
                  : "w-8 h-0.5 bg-buttongreen transition duration-500 ease-in-out"
              }
            />
            <div
              className={
                openMenu
                  ? "w-8 h-0.5  bg-button -rotate-45 transition duration-500 ease-in-out  shadow-yellow-500/50"
                  : "w-8 h-0.5 bg-buttongreen transition duration-500 ease-in-out"
              }
            />
          </button>
          <nav
            className={
              openMenu
                ? "text-center fixed bg-backcolor  border-beige border opacity-95 right-0 top-0 w-3/12 h-screen flex flex-col justify-start pt-8 px-3 ease-linear duration-300 z-20 rounded-l-3xl drop-shadow-lg shadow-neutral-500"
                : "fixed right-[-100%] ease-linear duration-300 z-20"
            }
          >
            <ul className="mt-20  justify-center w-10/12 mx-auto text-left text-neutral-800">
              <Link href="/">
                <li
                  onClick={handleMenuOpen}
                  className="p-2 cursor-pointer mb-10   hover:bg-beige rounded-lg"
                >
                  <i className="pi pi-desktop" style={{ color: "#96aa9a" }}></i>{" "}
                  トップページ
                </li>
              </Link>
              {status === "authenticated" && (
                <>
                  <Link href="/quiz">
                    <li
                      onClick={handleMenuOpen}
                      className="p-2 cursor-pointer   hover:bg-beige rounded-lg"
                    >
                      <i
                        className="pi pi-book"
                        style={{ color: "#96aa9a" }}
                      ></i>{" "}
                      ヨガ検定
                    </li>
                  </Link>
                  <Link href="/yoga_timer">
                    <li
                      onClick={handleMenuOpen}
                      className="p-2 cursor-pointer   hover:bg-beige rounded-lg"
                    >
                      <i
                        className="pi pi-clock"
                        style={{ color: "#96aa9a" }}
                      ></i>{" "}
                      ヨガタイマー
                    </li>
                  </Link>
                  <Link href="/">
                    <li
                      onClick={handleMenuOpen}
                      className="p-2 cursor-pointer mb-10  hover:bg-beige rounded-lg"
                    >
                      <i
                        className="pi pi-pencil"
                        style={{ color: "#96aa9a" }}
                      ></i>{" "}
                      ジャーナリング瞑想
                    </li>
                  </Link>
                  <Link href="/mypage">
                    <li
                      onClick={handleMenuOpen}
                      className="p-2 cursor-pointer   hover:bg-beige rounded-lg"
                    >
                      <i
                        className="pi pi-user"
                        style={{ color: "#96aa9a" }}
                      ></i>{" "}
                      マイページ
                    </li>
                  </Link>
                  <Link href="/yoga_zukan">
                    <li
                      onClick={handleMenuOpen}
                      className="p-2 cursor-pointer mb-5   hover:bg-beige rounded-lg"
                    >
                      <i
                        className="pi pi-search"
                        style={{ color: "#96aa9a" }}
                      ></i>{" "}
                      ヨガ図鑑
                    </li>
                  </Link>
                </>
              )}
              <Login />
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
