import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="flex justify-center mx-auto md:w-5/12 lg:h-24 xl:w-4/12 w-7/12">
        <Button
          className="w-11/12 h-full p-button-warning text-center rounded-lg max-md:text-xs lg:text-2xl flex justify-center my-auto mx-auto bg-button text-white border-none hover:bg-yellow-600 custom-font"
          onClick={() => setVisible(true)}
          size="large"
        >
          さっそくヨガ図鑑を集める
        </Button>
      </div>

      <Dialog
        visible={visible}
        modal
        // closable = {true}
        dismissableMask = {true}
        // style={{ width: "60vw" }}
        onHide={() => setVisible(false)}
        className = "max-md:w-11/12 w-auto"
      >
        <div>
          <div className="flex justify-center mx-auto xl:w-10/12 w-full">
            <Image
              src="/yoga_zukan_logo.png"
              width={200}
              height={100}
              alt="ヨガ図鑑"
              style={{ width: "auto", height: "auto" }}
            ></Image>
          </div>
          <p className="text-center xl:text-3xl max-lg:text-xs mt-5">
            会員登録・ログインして、ヨガポーズを集めましょう！
          </p>
          <p className="text-center xl:text-md mt-3">
            Googleアカウントですぐに始められます。
          </p>
          <div className="flex justify-center lg:mt-10">
            <Button
              onClick={() => signIn("google", {}, { prompt: "login" })}
              className="mt-5 bg-buttongreen border-lime-800 hover:bg-lime-800 custom-font max-md:text-sm"
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
