import { Button } from "primereact/button";
import Link from "next/link";

const YogaTimerBackBuntton = () => {
  return (
    <div className="flex justify-center mb-10">
      <Link href="/yoga_zukan">
        <Button
          style={{
            backgroundColor: "#e2a55e",
            color: "white",
            border: "none",
          }}
          className="p-button-warning custom-font"
        >
          ヨガ図鑑を見に行く
        </Button>
      </Link>
    </div>
  );
};

export default YogaTimerBackBuntton;
