'use client'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '../_common/utils'
import Link from 'next/link'

const QuizPage: NextPage = () => {
  const url = 'http://localhost:3000/api/v1/quizzes'
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>
  console.log(error)
  console.log(data)
  return(
    <>
      {data.map((quiz: any) => (
        <div key={quiz.id}>
          <div>Title: <Link href= '/question'>{quiz.title}</Link></div>
        </div>
        ))}
    </>
  )
}

export default QuizPage;

