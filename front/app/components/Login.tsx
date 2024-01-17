import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status !== "authenticated") {
    return (
      <div>
        <button onClick={() => signIn("google", {}, { prompt: "login" })}>
          Googleで新規登録・ログイン
        </button>
      </div>
    );
  }

  if (status == "authenticated") {
    return (
      <>
        <div className = "mb-4">
          <button onClick={() => signOut()}>ログアウト</button>
				</div>
				{/* <div>
          <p>ようこそ、{session.user?.name}さん</p>
          <img
            src={session.user?.image ?? ``}
            alt=""
            style={{ borderRadius: "50px" }}
						width = {80}
						height = {80}
						className = ""
          />
        </div> */}
      </>
    );
  }
  return null;
}
