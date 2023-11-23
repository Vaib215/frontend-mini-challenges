"use client";
import { useState, useEffect } from "react";
import { createQuiz } from "@/utils/ai";
import QuizComponent from "./QuizComponent";
import Loading from "./Loading";

type Question = {
  question: string;
  answer: string;
  options: string[];
};

export default function AIQuizComponent({
  activeQuestionIndex,
  topic,
}: {
  activeQuestionIndex: number;
  topic: string;
}) {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    createQuiz(topic, 10).then((questions: Question[]) =>
      setQuestions(questions)
    );
  }, [topic]);

  if(!questions?.length) {
    return <Loading />
  }
  
  return (
    <QuizComponent
      activeQuestionIndex={activeQuestionIndex}
      questions={questions}
    />
  );
}
