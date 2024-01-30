import Link from "next/link";

const AfterLoginContents = () => {
  return (
    <div>
      <p className="text-6xl font-bold text-center mb-5 text-yellow-700">
        ヨガコンテンツ
      </p>
      <p className="text-ss text-center text-gray-600 mb-10">
        ヨガコンテンツを体験してヨガ図鑑のポーズを増やしましょう！
      </p>
      <hr className="my-1  border-dotted border-t-2 border-gray-300 mb-3 mx-auto w-11/12" />

      <div className="flex justify-center gap-9 mt-14">
        {/* クイズ */}
        <Link href="/quiz">
          <div className="hover:scale-105 duration-300 transform">
            <div className="flex justify-center items-center bg-white hover:bg-button rounded-full  w-72 h-72 hover:scale-105 duration-300 transform hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-60 fill-beige hover:fill-white"
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
        </Link>

          {/* 時計 */}
        <Link href="">
          <div className="hover:scale-105 duration-300 transform">
            <div className="flex justify-center items-center bg-white hover:bg-button rounded-full w-72 h-72  hover:scale-105 duration-300 transform hover:shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-60 stroke-beige hover:stroke-white"
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
        </Link>

        {/* ジャーナリング瞑想 */}
        <Link href="">
          <div>
            <div className="flex justify-center items-center bg-neutral-200 rounded-full w-72 h-72 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-60 stroke-neutral-300"
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
        </Link>
      </div>
    </div>
  );
};

export default AfterLoginContents;
