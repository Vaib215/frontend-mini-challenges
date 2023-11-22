import AIQuizComponent from "@/components/AIQuizComponent";
import Loading from "@/components/Loading";
import QuizComponent from "@/components/QuizComponent";
import data from "@/assets/data.json";
import { Suspense } from "react";

export default async function QuizPage({
  params,
  searchParams,
}: {
  params: {
    topic: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const topic = params.topic;
  const topics = data.quizzes.map((quiz) => quiz.title);
  const activeQuestionIndex = parseInt(searchParams?.question as string) || 0;

  if (!topics.includes(topic)) {
    return (
      <Suspense
        fallback={
         <Loading />
        }
      >
        <AIQuizComponent
          activeQuestionIndex={activeQuestionIndex}
          topic={topic}
        />
      </Suspense>
    );
  }

  const questions = data.quizzes.find(
    (quiz) => quiz.title === topic
  )?.questions;

  return (
    <QuizComponent
      activeQuestionIndex={activeQuestionIndex}
      questions={questions!}
    />
  );
}
