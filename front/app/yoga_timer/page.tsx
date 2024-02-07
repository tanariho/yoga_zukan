"use client";
import React, { useState, useEffect, useRef } from "react";
import { Knob } from "primereact/knob";
import { Button } from "primereact/button";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import fetchUserId from "../components/fetcher/user/FetchUser";
import axios from "axios";
import { AxiosError } from "axios";
import Image from "next/image";
import { Card } from "primereact/card";
import YogaTimerBackBuntton from "../components/yoga_timer/BackButton";
import { railsApiUrl } from "../config";
import LoadingScreen from "../components/loading/Loading";
import GetKnobSize from "../components/yoga_timer/GetKnobSize";

export default function YogaTimer() {
  const [isClient, setIsClient] = useState(false);
  const [yogaPose, setYogaPose] = useState<YogaPose | null>(null);
  const [timeLeft, setTimeLeft] = useState(1800);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | undefined>(undefined);
  const isRunningRef = useRef(isRunning);
  const [noMorePoses, setNoMorePoses] = useState(false);
  const [knobSize, setKnobSize] = useState(GetKnobSize());

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

  function handleResize() {
    // ウィンドウサイズが変更されたときにノブのサイズを更新する
    setKnobSize(GetKnobSize());
  }


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // ウィンドウサイズに基づいてノブのサイズを設定する
      setKnobSize(GetKnobSize());
  
    
      // リサイズイベントリスナーを設定する
      window.addEventListener("resize", handleResize);
    
      // コンポーネントがアンマウントされたときにイベントリスナーを削除する
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  console.log(knobSize);


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
        const response = await axios.post(`${railsApiUrl}/api/v1/yoga_timers`, {
          user_id: userId,
        });
        const { assigned_pose } = response.data;
        if (assigned_pose) {
          setYogaPose(assigned_pose);
          setNoMorePoses(false);
        } else {
          setNoMorePoses(true);
        }
      } catch (error) {
        console.error("ポーズの追加に失敗しました", error);
        if (axios.isAxiosError(error) && error.response) {
          if (error.response.status === 404) {
            setNoMorePoses(true);
          }
        } else {
          alert("予期せぬエラーが発生しました。");
        }
      }
    }
  };

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(1800);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (userIdError) {
    return <div>ユーザーIDの取得に失敗しました。</div>;
  }

  if (!userId) {
    return (
      <div>
        <LoadingScreen />
      </div>
    );
  }

  return (
    <div>
      <div className="mx-auto">
        <p
          className="text-4xl font-bold text-center mb-5"
          style={{ color: "#96aa9a" }}
        >
          ヨガタイマー
        </p>
        <p className="text-ss text-center text-gray-700">
          タイマーをかけて30分間ヨガをしてみましょう！
        </p>
        <p className="text-ss text-center mb-2 text-gray-700">
          達成するとポーズが一つもらえます
        </p>
        <hr className="my-1  border-dotted border-t-2 border-gray-300 mx-auto w-8/12" />
      </div>

      {isClient && (
        <div>
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
                size={knobSize}
                disabled={!isRunning}
                className="items-center"
              />
            </div>
            <div className="flex justify-center mb-20">
              <Button
                className ="ml-3 text-white"
                onClick={startTimer}
                disabled={isRunning}
              >
                開始
              </Button>
              <Button
                onClick={stopTimer}
                disabled={!isRunning}
                className="ml-3 text-white"
              >
                停止
              </Button>
              <Button onClick={resetTimer} className="ml-3 text-white">
                リセット
              </Button>
            </div>
        </div>
      )}
      {yogaPose && (
        <div>
          <div className="text-center mt-5 mb-5">
            <h1 className="font-bold text-xl text-neutral-500">
              おめでとうございます！ヨガポーズ図鑑にポーズが増えました👏
            </h1>
          </div>
          <Card
            title={yogaPose.japanese_name}
            className="mx-auto w-3/12  flex flex-col justify-center text-center mt-5 mb-10
          transition transform  duration-200 hover:scale-105 bg-white border-2 border-yellow-500
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
          <YogaTimerBackBuntton />
        </div>
      )}
      {noMorePoses && (
        <div className="mt-10">
          <div className="mb-10  text-center font-bold text-xl text-lime-800">
            すでにヨガポーズを制覇しているようです！！
          </div>
          <YogaTimerBackBuntton />
        </div>
      )}
    </div>
  );
}
