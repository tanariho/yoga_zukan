import fetchUserId from "../components/fetcher/user/FetchUser";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/lib/next-auth/options";

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);
  if (!session || !session.user || !session.user.email) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const userId = await fetchUserId(session.user.email)
}
