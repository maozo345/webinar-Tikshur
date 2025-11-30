
import { GoogleGenAI } from "@google/genai";

// Ensure we have a valid key structure to prevent immediate crashes
const apiKey = process.env.API_KEY;

export const generateIntentionMessage = async (topic: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing. Please add API_KEY to your Vercel environment variables.");
    // Fallback message so the UI still "works" for the user even if AI is disconnected
    return "ההקשבה הפנימית שלך היא המפתח לתשובות. (נא להגדיר מפתח API כדי לקבל מסר אישי)";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    
    const prompt = `
      אתה מדריך רוחני עדין וחכם. המשתמשת ביקשה מסר בנושא: "${topic}".
      כתוב לה מסר קצר (עד 30 מילים), מעצים, מרגיע ומלא השראה בעברית.
      המסר צריך להיות בסגנון "תקשור" - ישיר ללב, מחבק, ללא שיפוטיות.
      אל תשתמש ברשימות, רק פסקה אחת זורמת.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "לא התקבל מסר כרגע, נסי שוב מאוחר יותר.";
  } catch (error) {
    console.error("Error generating message:", error);
    return "האנרגיה עמוסה כרגע, אנא נסי שוב בעוד רגע.";
  }
};
