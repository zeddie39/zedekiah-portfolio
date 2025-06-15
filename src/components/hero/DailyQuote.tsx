
import React, { useState, useEffect } from 'react';
import { PlayCircle, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const techQuotes = [
  "Technology is not just about convenience, it's about empowering human potential.",
  "The future belongs to those who see possibilities before they become obvious.",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Technology is the campfire around which we tell our stories. - Laurie Anderson",
  "The advance of technology is based on making it fit in so that you don't really even notice it.",
  "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
  "Technology is a useful servant but a dangerous master. - Christian Lous Lange"
];

const DailyQuote = () => {
  const [dailyQuote, setDailyQuote] = useState('');
  const [isNarrating, setIsNarrating] = useState(false);

  useEffect(() => {
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    const quoteIndex = dayOfYear % techQuotes.length;
    setDailyQuote(techQuotes[quoteIndex]);
  }, []);

  const handleNarrateQuote = () => {
    if (isNarrating || !dailyQuote) return;

    if (!('speechSynthesis' in window)) {
      toast.error("Sorry, your browser doesn't support text-to-speech.");
      return;
    }
    
    setIsNarrating(true);
    
    try {
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(dailyQuote);
      
      utterance.onstart = () => {
        toast.info("Narrating quote...");
      };

      utterance.onend = () => {
        setIsNarrating(false);
      };
      
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        toast.error("An error occurred during narration.");
        setIsNarrating(false);
      };
      
      window.speechSynthesis.speak(utterance);

    } catch (error: any) {
      console.error('Error narrating quote with Web Speech API:', error);
      toast.error('Failed to narrate quote.');
      setIsNarrating(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-purple-500/30 max-w-2xl mx-auto md:mx-0">
      <p className="text-gray-300 italic text-lg leading-relaxed mb-4">
        "{dailyQuote}"
      </p>
      <div className="flex justify-between items-center">
        <p className="text-purple-400 text-sm">Quote of the Day</p>
        <button
          onClick={handleNarrateQuote}
          disabled={isNarrating}
          className="text-purple-400 hover:text-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Narrate quote"
        >
          {isNarrating ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <PlayCircle className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default DailyQuote;
