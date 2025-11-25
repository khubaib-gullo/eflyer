import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MOCK_PRODUCTS } from '../constants';

const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

// Initialize Gemini client safely
const getAiClient = () => {
  if (!ai && API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
  return ai;
};

// Start a chat session with context about the store
export const startChatSession = () => {
  const client = getAiClient();
  if (!client) return null;

  // Create a product context string
  const productContext = MOCK_PRODUCTS.map(p => 
    `- ${p.title} ($${p.price}, ${p.category})`
  ).join('\n');

  const systemInstruction = `You are "Eflyer Bot", a helpful and enthusiastic personal shopping assistant for the Eflyer online store.
  
  Our current product inventory includes:
  ${productContext}
  
  Your goal is to help customers find products, suggest matching items, and answer questions about fashion and electronics.
  Keep your answers concise, friendly, and persuasive. 
  If a user asks about a product we don't have, politely suggest a similar category or tell them we'll stock it soon.
  Do not mention internal IDs. Focus on the product name and price.`;

  chatSession = client.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction,
    },
  });

  return chatSession;
};

// Send message to the chat
export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    startChatSession();
  }
  
  if (!chatSession) {
    return "I'm sorry, I can't connect to the AI service right now. Please check your API key.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you say it again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble thinking right now. Please try again later.";
  }
};
