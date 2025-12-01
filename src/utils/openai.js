import OpenAI from 'openai';

export const getOpenAIClient = () => {
  return new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
};