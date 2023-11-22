import data from "@/assets/data.json";
import Card from "@/components/Card";
import AICard from "@/components/AICard";
import { getAITopics } from "@/utils/ai";

export default async function Home() {
  const topics = await getAITopics(10)

  return (
    <main className="flex-1 hero">
      <div className="hero-content grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl">Welcome to the <span className="font-bold block text-6xl">AI Quiz App!</span></h1>
          <p className="py-6">
            Pick a subject to get started or enter your own topic to get a hot-sizzling <span className="font-mono font-bold text-lg text-base-100 invert">AI</span> generated quiz!
          </p>
        </div>
        <div className="space-y-4 md:space-y-8">
          {data.quizzes.map((quiz) => (
            <Card title={quiz.title} icon={quiz.icon} key={quiz.title} />
          ))}
          <AICard topics={topics}/>
        </div>
      </div>
    </main>
  );
}
