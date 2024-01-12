"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { fetcher } from "@/app/_common/utils";
import { useParams } from "next/navigation";
import {
  Card,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { nextAuthOptions } from "@/lib/next-auth/options";
import fetchUserId from "@/app/components/fetcher/user/FetchUser";



export default function ExampleClientComponent() {
  const { data: session, status } = useSession();
  const params = useParams()
  const slug = params.slug
  const url = `http://localhost:3000/api/v1/quizzes/${slug}`;
  const { data, error } = useSWR<Question[]>(url, fetcher);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchCurrentUserId = async () => {
      if (session && session.user && session.user.email) {
        try {
          const UserId = await fetchUserId(session.user.email);
          console.log("取得されたユーザーID:", UserId);
          setUserId(UserId);
        } catch (error) {
          console.error('ユーザーIDの取得に失敗しました:', error);
        }
      }
    };

    if (session) {
      fetchCurrentUserId();
    }
  }, [session]);

  const handleAnswerChange = (answerId: any) => {
    const question = data?.[currentQuestionIndex]
    if (question) {
      setAnswers({ ...answers, [question.id]: answerId });
      if (currentQuestionIndex < data.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setSubmitted(true);
      }
      console.log('クエスチョンです',currentQuestionIndex)
    }
  };

  const calculateResult = () => {
    let incorrectCount = 0;
    data?.forEach((question :Question) => {
      if (!question.answers.some((answer :Answer) => answer.correct && answers[question.id] === answer.id)) {
        incorrectCount++;
      }
    });
    return incorrectCount <= 3;
  };

  const submitResult = async () => {
    if (userId !== null && slug) {
      const passed = calculateResult();
      console.log(passed)
      try {
        await axios.post('http://localhost:3000/api/v1/quiz_results', {
            user_id: userId,
            quiz_id: slug,
            passed: passed
        });
        // ここで応答を処理
      } catch (error) {
        console.error('Quiz result submission failed', error);
      }
    }
  };

  useEffect(() => {
    if (submitted) {
      submitResult();
    }
  }, [submitted, userId, slug]);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;
  if (!data || !data || data.length === 0) return <div>Loading...</div>;

  const currentQuestion = data[currentQuestionIndex];
  if (!currentQuestion) return <div>Question not found.</div>;

  return (
    <>
      <h1>これはヨガ検定の問題です。</h1>
      <div className="mx-auto w-8/12 mt-10">
        <Card className="p-5 border border-gray-200 rounded-lg">
          <div>問題: {currentQuestion.title}</div>
          <RadioGroup
            onChange={(e) => handleAnswerChange(parseInt(e.target.value, 10))}
          >
            {currentQuestion.answers.map((answer: Answer) => (
              <FormControlLabel
                key={answer.id}
                value={answer.id}
                control={<Radio />}
                label={answer.content}
                disabled={submitted}
              />
            ))}
          </RadioGroup>
        </Card>
      </div>
      {submitted && (
        <div className="mx-auto justify-items-center">
          {calculateResult() ? '合格です！' : '不合格です。'}
        </div>
      )}
    </>
  );
}
