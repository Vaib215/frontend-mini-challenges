import { createQuiz } from "@/utils/ai";
import QuizComponent from "./QuizComponent";

export default async function AIQuizComponent({
  activeQuestionIndex,
  topic,
}: {
  activeQuestionIndex: number;
  topic: string;
}) {
  const questions = await createQuiz(topic);
  
  return <QuizComponent activeQuestionIndex={activeQuestionIndex} questions={questions} />;
}