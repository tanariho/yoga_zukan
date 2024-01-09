'use client'
import useSWR from "swr";
import { fetcher } from "@/app/_common/utils";

import { Card } from "@mui/material";

import { useParams } from 'next/navigation'
 
export default function ExampleClientComponent() {
  const { slug } = useParams<{ slug: string }>()
  console.log(slug)

  const url =`http://localhost:3000/api/v1/quizzes/${slug}`;
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

 
  console.log(data)
  return (
  <>
      <h1>これはヨガ検定の問題です。</h1>
      <div className="mx-auto w-8/12 mt-10">
        <div className="grid grid-cols-2 gap-4">
          {data.map((question :any) => (
            <Card key={question.id} className='p-5 border border-gray-200 rounded-lg'>
              <div>問題: {question.title}</div>
              <ul>
                {question.answers.map((answer :any) => (
                  <li key={answer.id}>・{answer.content}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
  </>
)}