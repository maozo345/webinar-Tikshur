import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import { Button } from './Button';
import { generateIntentionMessage } from '../services/geminiService';

export const IntentionGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    
    setLoading(true);
    setMessage('');
    
    const result = await generateIntentionMessage(topic);
    setMessage(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl glass-card relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles size={120} />
      </div>
      
      <div className="relative z-10 text-center space-y-6">
        <h3 className="text-2xl font-heading font-bold text-gold-300">
          טעימה מהתדר
        </h3>
        <p className="text-gray-300">
          לפני שמתחילים, אני מזמינה אותך לרשום נושא שמעסיק אותך ולקבל מסר קצר של בהירות.
          זוהי הדגמה קטנה לכוחה של הקשבה פנימית.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="רשמי כאן מילה אחת (למשל: אהבה, קריירה, פחד)..."
            className="w-full sm:w-2/3 px-6 py-3 rounded-full bg-mystic-900/50 border border-mystic-700 focus:border-gold-400 focus:outline-none text-white placeholder-gray-500 text-center sm:text-right"
          />
          <Button onClick={handleGenerate} disabled={loading || !topic}>
            {loading ? 'מקבלת מסר...' : 'קבלי מסר'}
            {!loading && <Sparkles className="inline-block mr-2 w-4 h-4" />}
          </Button>
        </div>

        {message && (
          <div className="mt-8 p-6 bg-gold-500/10 border border-gold-500/30 rounded-xl animate-fade-in">
            <p className="text-lg font-medium text-gold-100 leading-relaxed italic">
              "{message}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};