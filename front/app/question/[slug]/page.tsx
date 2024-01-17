"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { fetcher } from "@/app/_common/utils";
import { useParams } from "next/navigation";
import Image from "next/image";

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
  const params = useParams();
  const slug = params.slug;
  const url = `http://localhost:3000/api/v1/quizzes/${slug}`;
  const { data, error } = useSWR<Question[]>(url, fetcher);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [yogaPose, setYogaPose] = useState<YogaPose | null>(null);

  useEffect(() => {
    const fetchCurrentUserId = async () => {
      if (session && session.user && session.user.email) {
        try {
          const UserId = await fetchUserId(session.user.email);
          console.log("取得されたユーザーID:", UserId);
          setUserId(UserId);
        } catch (error) {
          console.error("ユーザーIDの取得に失敗しました:", error);
        }
      }
    };

    if (session) {
      fetchCurrentUserId();
    }
  }, [session]);

  const handleAnswerChange = (answerId: any) => {
    const question = data?.[currentQuestionIndex];
    if (question) {
      setAnswers({ ...answers, [question.id]: answerId });
      if (currentQuestionIndex < data.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setSubmitted(true);
      }
      console.log("クエスチョンです", currentQuestionIndex);
    }
  };

  const calculateResult = () => {
    let incorrectCount = 0;
    data?.forEach((question: Question) => {
      if (
        !question.answers.some(
          (answer: Answer) =>
            answer.correct && answers[question.id] === answer.id
        )
      ) {
        incorrectCount++;
      }
    });
    return incorrectCount <= 3;
  };

  const submitResult = async () => {
    if (userId !== null && slug) {
      const passed = calculateResult();
      console.log(passed);
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/quiz_results",
          {
            user_id: userId,
            quiz_id: slug,
            passed: passed,
          }
        );

        const { passed_true, assigned_pose } = response.data;
        console.log(response.data);
        console.log(assigned_pose);

        if (passed_true) {
          if (assigned_pose) {
            // 割り当てられたヨガポーズを状態に保存し、画面に表示する
            setYogaPose(assigned_pose);
          } else {
            // ユーザーがすでにすべてのポーズを制覇している場合
            alert("すでにポーズを制覇しています！");
            // または、状態やUIコンポーネントを使用してメッセージを表示
          }
        }
      } catch (error) {
        console.error("Quiz result submission failed", error);
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
      <div className="mx-auto w-8/12 mt-10">
        <Card className=" mx-auto justify-items-center p-5  bg-stone-200 border border-gray-200 bg-opacity-75 rounded-3xl shadow">
          <div className="text-center">{currentQuestion.title}</div>
          <RadioGroup
            onChange={(e) => handleAnswerChange(parseInt(e.target.value, 10))}
            row
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
          {calculateResult() ? "合格です！" : "不合格です。"}
        </div>
      )}
      {yogaPose && (
        <div>
          <h3>{yogaPose.japanese_name}</h3>
          {/* <img src={yogaPose.illustration} alt={yogaPose.japanese_name} /> */}
          <Image
            src={yogaPose.illustration}
            alt={yogaPose.japanese_name}
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
          <p>{yogaPose.sanskrit_name}</p>
          <p>{yogaPose.how_to_read}</p>
        </div>
      )}
    </>
  );
}
