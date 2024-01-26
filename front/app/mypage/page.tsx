"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Card } from "primereact/card";

const Mypage = () => {
  const { data: session, status } = useSession();

  return (
    <div className=" flex mx-auto w-10/12 mb-10">
      <div className="w-4/12">
        <div
          className="relative flex mx-auto drop-shadow-2xl"
          style={{ width: 400, height: 400 }}
        >
          {/* 背景画像 */}
          <img
            src="/mypage_back.png"
            alt="マイページ背景"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* ユーザーアイコン */}
          <div
            className="absolute "
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                alt="ユーザーアイコン"
                style={{ width: 150, height: 150, borderRadius: "50%" }}
              />
            ) : (
              <i
                className="pi pi-user"
                style={{ fontSize: "150px", color: "#708090" }}
              ></i>
            )}
          </div>
        </div>
        <div className="text-center">Name: {session?.user?.name}さん</div>
      </div>
      <Card
        className="mx-auto  w-8/12 items-center rounded-3xl shadow-xl
        bg-stone-50 border-2 border-stone-100"
      />
    </div>
  );
};

export default Mypage;
