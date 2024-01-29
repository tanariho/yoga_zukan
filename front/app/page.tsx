"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useToast } from "./components/context/ToastContext";
import { Button } from "primereact/button";
import Link from "next/link";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import TopButton from "./components/top/TopButton";
import AfterLoginContents from "./components/top/AfterLoginContents";

export default function Home() {
  const { data: session, status } = useSession();
  const toastRef = useToast();
  const [prevStatus, setPrevStatus] = useState(status);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && prevStatus !== "authenticated") {
      setPrevStatus(status);
      toastRef.current?.show({
        severity: "success",
        summary: "Success Login",
        detail: "ログインに成功しました。",
        life: 3000,
      });
    }
    if (status === "unauthenticated" && prevStatus !== "unauthenticated") {
      setPrevStatus(status);
      toastRef.current?.show({
        severity: "info",
        summary: "Success Logout",
        detail: "ログアウトしました",
        life: 3000,
      });
    }
    // 現在の状態を前の状態として保存
  }, [status, toastRef]);

  if (status !== "authenticated") {
    return (
      <div>
        <div className="flex justify-center">
          <img
            src="/top/top.png"
            alt="トップ背景"
            style={{ width: 1200 }}
          />
        </div>
          <div className = "mb-20">
            <TopButton />
          </div>
        <div
          className="absolute text-center font-bold text-5xl text-stone-500 "
          style={{
            top: "23%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          　集めませんか、ヨガ図鑑。
        </div>
        <hr className="my-1 border-t-2 border-gray-300 mx-auto w-10/12 mb-20 mt-3" />

        {/* セクション */}
        <div className="flex justify-center mx-auto w-10/12 gap-6 mb-20">
          <Image
            src="/top/yoga-instructor.jpg"
            alt="ヨガインストラクター"
            width={800}
            height={600}
            className=" rounded-3xl w-1/2 shadow-xl hover:scale-105 duration-300 transform"
          ></Image>
          <div className="w-1/2 justify-center">
            <div className="text-4xl font-bold text-buttongreen text-center mt-20">
              <p>ヨガのポーズは約8400万種類と</p>
              言われています。
            </div>
            <div className="text-center  text-lg mt-10 text-neutral-500 border-2 border-dotted   border-neutral-400 rounded-3xl bg-beige">
              <p className="mt-20">そのうちよく使うポーズは200種類。</p>
              <p>楽しくヨガのコンテンツを体験しながらポーズを集めていくと、</p>
              <p className="mb-20">いつの間にか身についている...かも。</p>
            </div>
          </div>
        </div>

        <hr className="my-1 border-t-2 border-gray-300 mx-auto w-10/12 mb-20 mt-3" />

        {/* セクション */}
        <div>
          <div className="text-center text-5xl font-bold text-button">
            ヨガポーズの集め方
          </div>
          {/* クイズ */}
          <div className="flex justify-center gap-9 mt-14">
            <div className="hover:scale-105 duration-300 transform">
              <div className="flex justify-center items-center bg-white rounded-full w-80 h-80 hover:scale-105 duration-300 transform hover:shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-60 fill-neutral-600"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </div>
              <div className="text-center text-4xl font-bold text-buttongreen mt-5">
                ヨガ検定
              </div>
            </div>

            {/* 時計 */}
            <div className="hover:scale-105 duration-300 transform">
              <div className="flex justify-center items-center bg-white rounded-full w-80 h-80  hover:scale-105 duration-300 transform hover:shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-60 stroke-neutral-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="text-center text-4xl font-bold text-buttongreen mt-5">
                ヨガタイマー
              </div>
            </div>

            {/* ジャーナリング瞑想 */}
            <div>
              <div className="flex justify-center items-center bg-neutral-300 rounded-full w-80 h-80 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-60 stroke-neutral-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                <div className="absolute text-center text-5xl font-bold text-white">
                  Coming Soon
                </div>
              </div>
              <div className="text-center text-3xl font-bold text-buttongreen mt-5">
                ジャーナリング瞑想
              </div>
            </div>
          </div>

          {/* 使い方説明 */}
          <div className="flex justify-center w-8/12 mt-20 mx-auto mb-28">
            <div className="text-center font-bold text-2xl leading-loose text-neutral-600 w-7/12">
              <p>使い方はとってもシンプル。</p>
              <p>ヨガに関するコンテンツを体験すると、</p>
              <p>ヨガ図鑑にポーズが増えていきます。</p>
              <p>好きなヨガポーズに出会えるかも。</p>
            </div>
            <div className="w-5/12 flex justify-center items-center">
              <TopButton />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status == "authenticated") {
    return (
      <div>
        <AfterLoginContents />
      </div>
    );
  }
}
