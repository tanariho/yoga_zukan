"use client";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { fetcher } from "@/app/_common/utils";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import Link from "next/link";
import YogaQuizBuntton from "@/app/components/yoga_quiz/Button";
import { railsApiUrl } from '@/app/config';


import { useSession } from "next-auth/react";
import fetchUserId from "@/app/components/fetcher/user/FetchUser";

export default function YogaQuiz() {
  const { data: session, status } = useSession();
  const params = useParams();
  const slug = params.slug;
  const url = `${railsApiUrl}/api/v1/quizzes/${slug}`;
  const { data, error } = useSWR<Question[]>(url, fetcher);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  // const [userId, setUserId] = useState<number | null>(null);
  const [yogaPose, setYogaPose] = useState<YogaPose | null>(null);
  const css = `
        .orange {
          color: #e2a55e;
      }
    
      .gleen {
          color: #96aa9a;
      }
    
      .beige {
          color: #e5dfd8;
      }
    `;

  const { data: userId, error: userIdError } = useSWR(
    () => (session?.user?.email ? `${session.user.email}` : null),
    fetchUserId
  );

  if (userIdError) {
    console.error("ユーザーIDの取得に失敗しました:", userIdError);
  }

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
          `${railsApiUrl}/api/v1/quiz_results`,
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

  if (error || userIdError) return <div>An error has occurred.</div>;
  if (!data || !userId) return <div>Loading...</div>;

  if (!data || !data || data.length === 0)
    return <div>この問題は未実装です</div>;

  const currentQuestion = data[currentQuestionIndex];
  if (!currentQuestion) return <div>Question not found.</div>;

  return (
    <div>
      {/* 提出済みかつ合格の場合のメッセージ */}
      {submitted && calculateResult() && (
        <div className="mx-auto text-center font-bold mt-10 text-3xl text-stone-500">
          素晴らしい！合格です！
        </div>
      )}
  
      {/* 提出済みかつ不合格の場合のメッセージ */}
      {submitted && !calculateResult() && (
        <div>
        <div className="mx-auto mb-20 text-center font-bold mt-10 text-3xl text-stone-500">
          惜しいです！もう少し！
        </div>
        <YogaQuizBuntton />
        </div>

      )}
  
      {/* 問題 */}
      {!submitted && (
        <div className=" flex mx-auto w-10/12 mt-5  justify-center">
          <Card
            title={currentQuestion.title}
            className="items-center p-5 w-10/12 mt-28
            rounded-3xl shadow-xl md:w-25rem h-80 bg-stone-50 border-2 border-yellow-500
            flex flex-col justify-center text-center"
          >
            <div className="flex justify-center items-center text-center mx-auto mt-10 gap-4">
              {currentQuestion.answers.map((answer: Answer) => (
                <div
                  key={answer.id}
                  className="p-field-radiobutton flex hover:scale-105"
                >
                  <RadioButton
                    inputId={`answer${answer.id}`}
                    name="answer"
                    value={answer.id}
                    onChange={(e) => handleAnswerChange(e.value)}
                    disabled={submitted}
                    className="flex"
                  />
                  <label htmlFor={`answer${answer.id}`} className="flex">
                    {answer.content}
                  </label>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
        
      {/* 提出済みで合格、かつヨガポーズがある場合 */}
      {submitted && calculateResult() && yogaPose && (
        <div>
          <div className="text-center mt-10 mb-5">
            <h1 className="font-medium">
              おめでとうございます！ヨガポーズ図鑑にポーズが増えました👏
            </h1>
          </div>
          <Card
            title={yogaPose.japanese_name}
            className="mx-auto w-3/12  flex flex-col justify-center text-center mt-5 mb-10
            transition transform hover:scale-105 bg-white border-2 border-yellow-500
            rounded-lg shadow-lg h-200"
          >
            <div className="mx-auto mt-3 mb-3">
              <Image
                src={yogaPose.illustration}
                alt={yogaPose.japanese_name}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="mx-auto"
              />
              <p>{yogaPose.sanskrit_name}</p>
              <p>{yogaPose.how_to_read}</p>
            </div>
          </Card>
          <YogaQuizBuntton/>
        </div>
      )}
  
      {/* 提出済みで合格だがヨガポーズがない場合 */}
      {submitted && calculateResult() && !yogaPose && (
        <div>
        <div className="mt-10 mb-10  text-center font-bold text-xl text-lime-800">
          すでにヨガポーズを制覇しているようです！！
        </div>
        <YogaQuizBuntton/>
        </div>
        
      )}
  
    </div>
  );
}  