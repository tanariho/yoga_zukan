'use client'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '../_common/utils'

const Index: NextPage = () => {
  const url = 'http://localhost:3000/api/v1/quizzes'
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div>Rails疎通確認</div>
      {data.map((quiz: any) => (
        <div key={quiz.id}>
          <div>Title: {quiz.title}</div>
          <div>Level: {quiz.level}</div>
        </div>
      ))}
    </>
  )
}

export default Index