"use client";
import React from "react";
import useSWR from "swr";
import { fetcher } from "../_common/utils";
import Link from "next/link";

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
      <div className="container">
        {data.map((quiz: any) => (
          <Link href={`/question/${quiz.id}`}key={quiz.id}>
            <div>
              <h3>{quiz.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default QuizPage;
