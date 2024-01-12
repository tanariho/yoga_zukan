// QuizResponse.ts

interface Answer {
  correct: boolean;
  id: number;
  content: string;
}

interface Question {
  id: number;
  title: string;
  answers: Answer[];
  questions: Question[]
}

interface Quiz {
  id: number;
  title: string;
  level: string;
  questions: Question[];
}

interface Answers {
  [key: number]: number; // 各質問のIDに対するユーザーの回答のIDをマッピング
}
