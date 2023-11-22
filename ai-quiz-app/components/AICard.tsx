"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AICard({ topics }: { topics: string[] }) {
  const [activeTopic, setActiveTopic] = useState(0);
  const [typewriter, setTypewriter] = useState("");
  const [topic, setTopic] = useState("");

  const router = useRouter();

  useEffect(() => {
    setActiveTopic(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTopic((prev) => {
        if (prev + 1 >= topics.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [topics]);

  useEffect(() => {
    if (activeTopic < topics.length) {
      const topic = topics[activeTopic];
      let index = -1;
      setTypewriter("");

      const interval = setInterval(() => {
        setTypewriter((prev) => prev + topic.charAt(index));
        index++;

        if (index === topic.length) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [activeTopic, topics]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/quiz/" + topic);
      }}
      className="card items-center card-side gap-4 bg-base-100 shadow-md shadow-base-content/40"
    >
      <Image
        src={"./icon-ai.svg"}
        alt={"icon-ai"}
        width={36}
        height={36}
        className="ml-4 invert bg-white p-1 rounded"
      />
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="card-title my-6 flex-1 mr-4 input text-primary"
        placeholder={topics.length ? typewriter : "Enter your own topic"}
      />
    </form>
  );
}
