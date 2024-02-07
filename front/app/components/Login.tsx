import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import LoadingScreen from "./loading/Loading";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div><LoadingScreen/></div>;
  }

  if (status !== "authenticated") {
    return (
      <li className = "p-2 cursor-pointer hover:bg-beige rounded-lg">
        <button  onClick={() => signIn("google", {}, { prompt: "login" })}>
        <span className = "pi pi-sign-in" style={{ color: '#e2a55e' }}></span> Googleで新規登録・ログイン
        </button>
      </li>
    );
  }

  if (status == "authenticated") {
    return (
      <>
        <li className = "mb-4 p-2 cursor-pointer hover:bg-beige rounded-lg">
          <button onClick={() => signOut()}><span className = "pi pi-sign-out" style={{ color: '#96aa9a' }}></span> ログアウト</button>
				</li>
      </>
    );
  }
  return null;
}
