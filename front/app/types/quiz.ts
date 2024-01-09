// QuizResponse.ts

interface Answer {
  id: number;
  content: string;
  // 他の必要なフィールド
}

interface Question {
  id: number;
  title: string;
  answers: Answer[];
  // 他の必要なフィールド
}

interface Quiz {
  id: number;
  title: string;
  level: string;
  questions: Question[];
}
