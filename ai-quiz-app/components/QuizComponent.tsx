import { redirect } from "next/navigation";
import OptionCard from "./OptionCard";

export default function QuizComponent({
  questions,
  activeQuestionIndex,
}: {
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
  activeQuestionIndex: number;
}) {

  if (activeQuestionIndex >= questions?.length) {
    redirect("/quiz/completed");
  }

  return (
    <main className="flex-1 hero">
      <div className="hero-content h-full grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 gap-4 md:gap-16">
        <div className="h-full flex flex-col">
          <i className="text-base-content text-xl mt-auto">
            Question {activeQuestionIndex + 1} of {questions?.length}
          </i>
          <h1 className="text-4xl font-bold md:mb-auto">
            {questions?.[activeQuestionIndex]?.question}
          </h1>
          <progress
            className="my-auto progress progress-primary w-full"
            value={activeQuestionIndex + 1}
            max={questions?.length}
          ></progress>
        </div>
        <div className="space-y-8 row-span-2 w-full h-full md:h-auto">
          {questions?.[activeQuestionIndex]?.options.map((option, index) => (
            <OptionCard
              option={option}
              index={index}
              key={index}
              isCorrect={option === questions?.[activeQuestionIndex]?.answer}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
