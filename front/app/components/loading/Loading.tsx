import React from "react";
import Image from "next/image";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* ローディングアニメーション */}
      <div  aria-label="読み込み中">
        <Image
        src ="/yoga_pose/eiyuu2.png"
        alt = "ローディング中の英雄のポーズ"
        width = {300}
        height = {300}
        className = "animate-bounce"
        ></Image>
      <div className = "text-center font-bold text-neutral-400">ちょっとシャバーサナ</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
