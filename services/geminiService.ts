import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateIntentionMessage = async (topic: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key is missing.");
    return "אנא ודאי שהגדרת את מפתח ה-API כדי לקבל מסר.";
  }

  try {
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