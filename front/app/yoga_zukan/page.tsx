"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import fetchUserId from "../components/fetcher/user/FetchUser";
import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../_common/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedPose, setSelectedPose] = useState<YogaPose | null>(null); // 選択されたポーズのステート

  useEffect(() => {
    // ユーザーが認証されていない場合、ホームページにリダイレクト
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const userIdUrl = session?.user?.email ? `${session.user.email}` : null;
  const { data: userId, error: userIdError } = useSWR(userIdUrl, fetchUserId);
  const { data: yogaPoses, error } = useSWR(
    userId ? `http://localhost:3000/api/v1/yoga_zukans?id=${userId}` : null,
    fetcher
  );

  if (error) return <div>An error has occurred.</div>;
  if (!yogaPoses) return <div>図鑑を読み込んでいます</div>;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (userIdError) {
    console.error("ユーザーIDの取得に失敗しました:", userIdError);
    // エラー処理
  }

  const openDialog = (pose: any) => {
    setSelectedPose(pose); // ダイアログに表示するポーズを設定
    setVisible(true); // ダイアログを表示
  };

  const footerContent = (
    <div>
      <Button
        label="Ok"
        icon="pi pi-check"
        onClick={() => setVisible(false)}
        autoFocus
      />
    </div>
  );

  if (status == "authenticated") {
    return (
      <div>
        <p
          className="text-3xl font-bold text-center mb-5 "
          style={{ color: "#96aa9a" }}
        >
          ヨガ図鑑
        </p>
        <p className="text-ss text-center text-gray-600 mb-10">
          あなたがこれまで集めたヨガポーズの図鑑です！
        </p>
        <hr className="my-1  border-dotted border-t-2 border-gray-300 mb-3 mx-auto w-10/12" />

        <div className="w-10/12 mx-auto">
          <div className="my-4 flex">
            {yogaPoses.map((pose: YogaPose) => (
              <div key={pose.id} className="mb-3 w-3/12">
                <Card
                  className="mr-5 transition transform hover:scale-105 hover:translate-y-1 shadow-md border-2 rounded-lg border-yellow-500"
                  onClick={() => openDialog(pose)}
                >
                  <div className="flex justify-center text-center items-center border border-white border-b-gray-200">
                    <p className="text-lg font-bold text-center flex-[2]">
                      0{pose.number}
                    </p>
                    <Divider layout="vertical" />
                    <p className="text-md font-bold text-center flex-[7]">
                      {pose.japanese_name}
                    </p>
                  </div>

                  {pose.illustration && (
                    <Image
                      src={pose.illustration}
                      alt={pose.japanese_name}
                      width={200}
                      height={200}
                      className="mx-auto"
                    />
                  )}
                  <Divider />
                  <div className="text-center">{pose.sanskrit_name}</div>
                </Card>
                {selectedPose && (
                  <Dialog
                    header={selectedPose.japanese_name} // ダイアログのヘッダーに日本語名を表示
                    visible={visible}
                    style={{ width: "40vw" }}
                    onHide={() => setVisible(false)}
                  >
                    <Image
                      src={selectedPose.illustration} // 選択されたポーズの画像を表示
                      alt={selectedPose.japanese_name}
                      width={300}
                      height={300}
                      className="mx-auto"
                    />
                    <p className="m-0 text-center text-lg font-bold">{selectedPose.sanskrit_name}</p>
                    <p className="m-0 text-center text-sm">{selectedPose.how_to_read}</p>
                    <p className="m-0 text-center text-sm">{selectedPose.explanation}</p>
                  </Dialog>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
