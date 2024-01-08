// QuizResponse.ts

export interface Answer {
  id: number;
  content: string;
  correct: boolean;
}

export interface Question{
  id: number;
  title: string;

}

export interface Quiz {
  id: number;
  title: string;
}

