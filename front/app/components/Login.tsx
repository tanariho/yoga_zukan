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
        <span className = "pi pi-sign-in" style={{ color: '#e2a55e' }}></span> Googleで新規登録・ログイン
        </button>
      </div>
    );
  }

  if (status == "authenticated") {
    return (
      <>
        <div className = "mb-4">
          <button onClick={() => signOut()}><span className = "pi pi-sign-out" style={{ color: '#96aa9a' }}></span> ログアウト</button>
				</div>
      </>
    );
  }
  return null;
}
