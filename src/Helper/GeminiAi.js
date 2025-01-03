import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);