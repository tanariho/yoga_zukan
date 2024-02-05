"use client";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useToast } from "./components/context/ToastContext";
import Image from "next/image";
import TopButton from "./components/top/TopButton";
import AfterLoginContents from "./components/top/AfterLoginContents";
import TopButtonButtom from "./components/top/TopButtonBottom";

export default function Home() {
  const { status } = useSession();
  const toastRef = useToast();
  const [prevStatus, setPrevStatus] = useState(status);

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
        <div className="flex justify-center mx-auto">
          <img src="/top/top.png" alt="トップ背景" />
        <div
          className="absolute text-center font-bold xl:text-5xl lg:text-3xl md:text-2xl max-sm:text-xs text-stone-500 top-28 md:top-32 lg:top-40 xl:top-48 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
          　集めませんか、ヨガ図鑑。
        </div>
          </div>
        <div className="mb-20">
          <TopButton />
        </div>
        <hr className="my-1 border-t-2 border-gray-300 mx-auto w-10/12 mb-20 mt-3" />

        {/* セクション */}
        <div className="lg:flex justify-center mx-auto lg:flex-row w-10/12 lg:gap-6 md:mb-20 mb-10 grid grid-cols-1">
          <Image
            src="/top/yoga-instructor.jpg"
            alt="ヨガインストラクター"
            width={800}
            height={600}
            className="rounded-3xl  lg:w-1/2 shadow-xl hover:scale-105 duration-300 transform"
          ></Image>
          <div className="justify-center lg:w-1/2">
            <div className="xl:text-4xl lg:text-2xl text-xl font-bold text-buttongreen text-center xl:mt-20 lg:mt-5 mt-20">
              <p>ヨガのポーズは約8400万種類と</p>
              言われています。
            </div>
            <div className="text-center  md:text-lg text-xs mt-10 text-neutral-500 border-2 border-dotted   border-neutral-400 rounded-3xl bg-beige">
              <div className="max-xl:w-10/12 max-xl:mx-auto">
                <p className="xl:mt-20 lg:mt-10 mt-5">
                  そのうちよく使うポーズは200種類。
                </p>
                <p className="xl:text-wrap">
                  楽しくヨガのコンテンツを体験しながらポーズを集めていくと、
                </p>
                <p className="xl:mb-20 lg:mb-10 mb-5">
                  いつの間にか身についている...かも。
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-1 border-t-2 border-gray-300 mx-auto w-10/12 mb:mb-20 mb-10 mt-3" />

        {/* セクション */}
        <div>
          <div className="text-center md:text-5xl text-3xl font-bold text-button">
            ヨガポーズの集め方
          </div>
          {/* クイズ */}
          <div className="grid grid-cols-3 items-start gap-9 md:mt-14  mt-5 mx-auto w-10/12">
            <div className="flex flex-col justify-center items-center hover:scale-105 duration-300 transform">
              <div className="flex justify-center items-center bg-white rounded-full xl:w-80 xl:h-80  lg:w-60 lg:h-60 md:w-48 md:h-48 w-24 h-24 hover:scale-105 duration-300 transform hover:shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="xl:w-60 lg:w-48 md:w-36 fill-neutral-600 w-16"
                >
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </div>
              <div className="text-center lg:text-4xl  md:text-xl text-sm font-bold text-buttongreen mt-5">
                ヨガ検定
              </div>
            </div>

            {/* 時計 */}
            <div className="flex flex-col justify-center items-center hover:scale-105 duration-300 transform">
              <div className="flex justify-center items-center bg-white rounded-full xl:w-80 xl:h-80 lg:w-60 lg:h-60 md:w-48 md:h-48 w-24 h-24 hover:scale-105 duration-300 transform hover:shadow-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-60 lg:w-48 md:w-36 stroke-neutral-600 w-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="text-center lg:text-4xl  md:text-xl text-xs font-bold text-buttongreen mt-5">
                ヨガタイマー
              </div>
            </div>

            {/* ジャーナリング瞑想 */}
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center bg-neutral-300 rounded-full xl:w-80 xl:h-80  lg:w-60 lg:h-60 md:w-48 md:h-48 w-24 h-24 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-60 lg:w-48 md:w-36 w-16 stroke-neutral-400 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                <div className="absolute text-center xl:text-5xl lg:text-4xl md:text-3xl text-xs font-bold text-white">
                  Coming Soon
                </div>
              </div>
              <div className="flex flex-col text-center lg:text-3xl  md:text-xl text-xs font-bold text-buttongreen mt-5">
                <div className="max-sm:whitespace-nowrap">ジャーナリング</div>
                <div>瞑想</div>
              </div>
            </div>
          </div>

          {/* 使い方説明 */}
          <div className="flex justify-center w-8/12 max-xl:w-10/12 mt-20 max-lg:mt-10 mx-auto mb-28 max-lg:grid max-lg:grid-cols-1 max-lg:w-11/12">
            <div className="text-center font-bold md:text-2xl text-md leading-loose text-neutral-600 w-7/12 max-lg:w-full max-lg:mb-10">
              <p>使い方はとってもシンプル。</p>
              <p>ヨガに関するコンテンツを体験すると、</p>
              <p>ヨガ図鑑にポーズが増えていきます。</p>
              <p>好きなヨガポーズに出会えるかも。</p>
            </div>
            <div className="w-5/12  max-lg:w-full flex justify-center items-center">
              <TopButtonButtom />
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
