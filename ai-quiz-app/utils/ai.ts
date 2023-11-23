export const getAITopics = async (count: number) => {
  const topics = await chatBackend(
    "You are a quiz topic suggestor. Your task is to give me names of random topics related to programming for quiz. Return the response as JSON array only. In the next message I will give you the no of topics I need. Dont send me anything except the JSON response.",
    count.toString()
  );
  return topics;
};

export const createQuiz = async (topic: string, count: number) => {
  const quiz = await chatAPI(
    `You are a quiz creator. Your task is to create a quiz of ${count} questions on the topic I give you. In the next message I will give you the topic. Dont send me anything except the JSON response, nothing except JSON Code. Try to compress the JSON and without beautify. Return response as
      questions: [{
        "question": string,
        "options": string[],
        "answer": string
      },
      ...
    ]
    `,
    topic,
  );
  return quiz?.questions;
};


export const chatAPI = async (prompt: string, message: string) => {
  try {
    const response = await fetch("https://nqj4xd-5000.csb.app/chat", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        prompt,
      }),
      method: "POST",
      next: {
        revalidate: 60,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    return null;
  }
};

export const chatBackend = async (prompt: string, message: string, cache:RequestCache = "default") => {
  try {
    const response = await fetch("https://chatanywhere.app/api/chat", {
      method: "POST",
      body: JSON.stringify({
        model: {
          id: "gpt-3.5-turbo-0613",
          name: "GPT-3.5",
          maxLength: 12000,
          tokenLimit: 4000,
          completionTokenLimit: 800,
        },
        messages: [
          {
            pluginId: null,
            role: "user",
            content: message,
          },
        ],
        prompt,
        temperature: 0.5,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: cache
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
