import { Button } from "primereact/button";
import Link from "next/link";

const YogaQuizBuntton = () => {
  return (
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

      <Link href="/quiz">
        <Button
          style={{
            backgroundColor: "#96aa9a",
            color: "white",
            border: "none",
          }}
          className="p-button-warning ml-3"
        >
          他の問題を解く
        </Button>
      </Link>
    </div>
  );
};

export default YogaQuizBuntton;
