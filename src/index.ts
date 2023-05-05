import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}))

export async function completion(
  literals: string | readonly string[],
  ...args: any[]
): Promise<string> {
  let str
  if (typeof literals === 'string') {
    str = literals
  } else {
    str = literals.join()
  }
  const res = await openai.createChatCompletion({
    messages: [{ role: 'user', content: str, }],
    model: 'gpt-3.5-turbo',
  })
  return res.data.choices[0]?.message?.content ?? str
}
