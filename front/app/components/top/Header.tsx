import React from "react";
import Link from 'next/link';

const Header =() => {
  return(
    <header className = "bg-lime-500 h-12">
      <Link href = "/"><p>YOGA ZUKAN</p></Link>
      <Link href = "/signup" className = "absolute inset-y-0 right-0">新規会員登録</Link>
    </header>
  )
}

export default  Header;