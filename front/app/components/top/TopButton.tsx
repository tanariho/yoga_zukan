import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="flex justify-center">
        <Button
          className="p-button-warning bg-button text-white border-none hover:bg-yellow-600"
          onClick={() => setVisible(true)}
          size="large"
        >
          さっそくヨガ図鑑を集める
        </Button>
      </div>

      <Dialog
        visible={visible}
        modal
        style={{ width: "60vw" }}
        onHide={() => setVisible(false)}
      >
        <div>
          <div className="flex justify-center mx-auto w-10/12">
            <Image
              src="/yoga_zukan_logo.png"
              width={200}
              height={100}
              alt="ヨガ図鑑"
              style={{ width: "auto", height: "auto" }}
            ></Image>
          </div>
          <p className="text-center text-3xl mt-5">
            会員登録・ログインして、ヨガポーズを集めましょう！
          </p>
          <p className="text-center text-md mt-3">
            Googleアカウントですぐに始められます。
          </p>
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => signIn("google", {}, { prompt: "login" })}
              className="mt-5 bg-buttongreen border-lime-800 hover:bg-lime-800"
              size="large"
              severity="success"
            >
              <span
                className="pi pi-sign-in mr-2"
                style={{ color: "#e2a55e", fontSize: "1.5rem" }}
              ></span>
              Googleで新規登録・ログイン
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TopButton;
