import React from 'react';
import Header from "../components/top/Header";
import Footer from '../components/top/Footer';

const page = () =>{
  return(
    <div className = " frex bg-slate-50 min-h-screen">
      <Header />
      <div>
        <p className = "text-center">ログインページです</p>
      </div>  
      <Footer />
    </div>
  )  
}
export default page;