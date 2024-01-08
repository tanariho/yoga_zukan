'use client'

import React from "react";
import { NextPage } from "next";
import { usePathname } from 'next/navigation';
import useSWR from "swr";
import { fetcher } from "../_common/utils";


const QuestionPage: NextPage = () => {
  const url ='http://localhost:3000/api/v1/questions'
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>


  console.log(data)
  return(
    <>
    {data.map((question: any) => (
    question.quiz_id === 1 && (
      <div key={question.id}>
        <div>問題: {question.title}</div>
      </div>
    )
  ))}
    </>
  )

};

export default QuestionPage;