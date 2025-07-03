import { useState, useEffect } from 'react';

export const useTypewriter = (text, speed = 100, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(false);
    setIsComplete(false);

    const startTyping = () => {
      setIsTyping(true);
      let index = 0;
      
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setIsComplete(true);
          clearInterval(timer);
        }
      }, speed);

      return () => clearInterval(timer);
    };

    const delayTimer = setTimeout(startTyping, delay);
    return () => clearTimeout(delayTimer);
  }, [text, speed, delay]);

  return { displayedText, isTyping, isComplete };
};