'use client'
import { useSession } from 'next-auth/react';



export default function Home() {
	const { data: session, status } = useSession();

	if (status !== "authenticated") {
	return (
		<div className = "text-center mt-10 font-bold">
			ログイン前のトップページです
		</div>
	);
}

if (status == "authenticated") {
	return (
		<div className = "text-center mt-10 font-bold">
			ログイン後のトップページです
		</div>
	);
}

}