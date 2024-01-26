"use client";
import { useSession } from "next-auth/react";
import fetchUserId from "../components/fetcher/user/FetchUser";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../_common/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // ユーザーが認証されていない場合、ホームページにリダイレクト
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const userIdUrl = session?.user?.email ? `${session.user.email}` : null;
  const { data: userId, error: userIdError } = useSWR(userIdUrl, fetchUserId);
  const { data: yogaPoses, error } = useSWR(userId ? `http://localhost:3000/api/v1/yoga_zukans?id=${userId}` : null, fetcher);
  
  if (error) return <div>An error has occurred.</div>;
  if (!yogaPoses) return <div>図鑑を読み込んでいます</div>;

  
  if (status === "loading") {
    return <div>Loading...</div>;
  }


  if (userIdError) {
    console.error("ユーザーIDの取得に失敗しました:", userIdError);
    // エラー処理
  }





  if (status == "authenticated") {
    return (
      <div className="w-8/12 mx-auto">
        <img
          src={session.user?.image ?? ``}
          alt=""
          style={{ borderRadius: "50px" }}
        />
        <div>{session?.user?.name}</div>
        <div className="my-4">
        {yogaPoses.map((pose: any, index: number) => (
          <div key={index} className="mb-3">
            <h2 className="text-lg font-bold">{pose.japanese_name}</h2>
            {pose.illustration && (
              <img src={pose.illustration} alt={pose.japanese_name} />
            )}
          </div>
        ))}
      </div>
      </div>
    );
  }
}
