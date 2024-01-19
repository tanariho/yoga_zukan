"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../_common/utils";
import Link from "next/link";
import { Card } from "primereact/card";

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
  const url = "http://localhost:3000/api/v1/quizzes";
  const { data, error } = useSWR(url, fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="container grid grid-cols-3 gap-6 mx-auto mb-10 mt-10">
        {data.map((quiz: any) => (
          <Link href={`/question/${quiz.id}`} key={quiz.id}>
            <Card
              className="flex justify-center items-center text-center  h-28 mx-auto 
              rounded-lg shadow-lg hover:bg-neutral-100 active:bg-neutral-200 hover:scale-105 
              transition transform"
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
