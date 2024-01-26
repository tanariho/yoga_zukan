"use client"
import React, { useState, useEffect, useRef } from "react";
import { Knob } from "primereact/knob";
import { Button } from "primereact/button";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import fetchUserId from "../components/fetcher/user/FetchUser";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Card } from "primereact/card";

export default function YogaTimer() {
  const [isClient, setIsClient] = useState(false);
  const [yogaPose, setYogaPose] = useState<YogaPose | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | undefined>(undefined);
  const isRunningRef = useRef(isRunning);

  const { data: session } = useSession();
  const { data: userId, error: userIdError } = useSWR(
    session && session.user && session.user.email
      ? `${session.user.email}`
      : null,
    fetchUserId
  );

  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1;
          if (newTime <= 0) {
            clearInterval(intervalRef.current);
            // タイマーが0に達したことを示すために、isRunningをfalseに設定
            setIsRunning(false);
          }
          return newTime;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  // タイマーが0になったときにのみ実行
  useEffect(() => {
    if (!isRunning && timeLeft === 0) {
      onTimerComplete();
    }
  }, [isRunning, timeLeft]);

  const onTimerComplete = async () => {
    if (userId) {
      try {
        const response = await axios.post("http://localhost:3000/api/v1/yoga_timers", { user_id: userId });
        const { assigned_pose } = response.data;
        console.log(assigned_pose)
        if (assigned_pose) {
          setYogaPose(assigned_pose);
        } else {
          alert("すでにすべてのポーズを制覇しています！");
        }
      } catch (error) {
        console.error("ポーズの追加に失敗しました", error);
      }
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const formatTime = (time:number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  if (userIdError) {
    return <div>ユーザーIDの取得に失敗しました。</div>;
  }

  if (!userId) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5" style={{ color: "#96aa9a" }}>
        ヨガタイマー
      </h1>
      {isClient && (
        <div className="flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <div className="container mx-auto">
            <div className="flex justify-center">
              <Knob
                value={timeLeft}
                valueTemplate={`${formatTime(timeLeft)}`}
                onChange={(e) => setTimeLeft(e.value)}
                valueColor="#e2a55e"
                rangeColor="#f3f3f3"
                min={0}
                max={1800}
                step={1}
                size={500}
                disabled={isRunning}
                className="items-center"
              />
            </div>
            <div className="flex justify-center">
              <Button onClick={startTimer} disabled={isRunning}>
                開始
              </Button>
              <Button onClick={stopTimer} disabled={!isRunning} className="ml-3">
                停止
              </Button>
            </div>
          </div>
        </div>
      )}
      {yogaPose && (
        <>
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
          <div className="flex justify-center mb-10">
            <Link href="/yoga_zukan">
              <Button
                style={{
                  backgroundColor: "#e2a55e",
                  color: "white",
                  border: "none",
                }}
                className="p-button-warning"
              >
                ヨガ図鑑を見に行く
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
