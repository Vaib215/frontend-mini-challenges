"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function OptionCard({
  option,
  index,
  isCorrect,
}: {
  option: string;
  index: number;
  isCorrect: boolean;
}) {
  const [color, setColor] = useState("bg-base-100");
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    setColor("bg-base-100");
  }, [params.get("question")]);

  return (
    <div
      onClick={() => {
        if (isCorrect) {
          setColor("bg-success");
          // set question param in url to next question
          const questionIndex = parseInt(params.get("question") as string);
          router.push(
            `${window.location.pathname}?question=${(questionIndex ? questionIndex + 1 : 1)}`);
        } else {
          setColor("bg-error");
        }
      }}
      className={`${color} card card-side shadow-md shadow-base-content/40 hover:shadow-primary cursor-pointer`}
    >
      <div className="card-body p-4 flex-row items-center">
        <b className="mx-2 p-4 bg-background rounded-xl text-3xl aspect-square h-full text-center">
          {String.fromCharCode(65 + index)}
        </b>
        <h2 className="card-title text-2xl">{option}</h2>
      </div>
    </div>
  );
}
