"use client";
import React, { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../_common/utils";
import Link from "next/link";
import { Card } from "primereact/card";
import { railsApiUrl } from "../config";
import router from "next/router";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import LoadingScreen from "../components/loading/Loading";
import { useRouter } from "next/navigation";

interface Answer {
  id: number;
  content: string;
}

interface quiz {
  id: number;
  title: string;
  answers: Answer[];
}

interface Quiz {
  id: number;
  title: string;
  level: string;
  quizs: quiz[];
}

const QuizPage: React.FC = () => {
  const router = useRouter()
  const url = `${railsApiUrl}/api/v1/quizzes`;
  const { data, error } = useSWR(url, fetcher);
  const { status } = useSession();

 
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/"); // 未認証の場合、ホームページにリダイレクト
    }
  }, [status, router]);

  if (status == "loading") {
    return <LoadingScreen />;
  }

  if (status === "unauthenticated") {
    return null;
  }


  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div><LoadingScreen /></div>;

  return (
    <>
      <p
        className="text-3xl font-bold text-center  text-button mb-5 max-md:mt-10"
      >
        ヨガ検定
      </p>
      <p className="text-ss max-md:text-sm text-center text-gray-700">
        ヨガ検定を受けてヨガについての知識を深めよう!
      </p>
      <p className="text-xs text-center mb-10 text-gray-700">
        合格するとポーズが一つもらえます
      </p>
      <hr className="my-1  border-dotted border-t-2 border-gray-300 mx-auto w-8/12 max-md:w-10/12" />

      <div className="container grid grid-cols-3 max-md:grid-cols-1 w-8/12  max-md:w-10/12 gap-6 max-md:gap-2 mx-auto mb-10 mt-10">
        {data.map((quiz: any) => (
          <Link href={`/question/${quiz.id}`} key={quiz.id}>
            <Card
              className="flex justify-center items-center text-center  h-28 max-md:h-14 mx-auto 
              rounded-lg shadow-lg hover:bg-neutral-100 active:bg-neutral-200 hover:scale-105 
              transition transform border border-yellow-500"
            >
              <h3>{quiz.title}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default QuizPage;
