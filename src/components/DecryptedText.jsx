import React, { useEffect, useRef, useState } from 'react';
import baffle from 'baffle';

const DecryptedText = ({ 
  text, 
  className = "",
  speed = 75,
  characters = "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>░▒▓/ █▒▒",
  revealDuration = 2000,
  revealSpeed = 50
}) => {
  const textRef = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Check if this is the first visit in this browser session
    const hasSeenAnimation = sessionStorage.getItem('portfolioDecryptSeen');
    
    if (!hasSeenAnimation) {
      setShouldAnimate(true);
    } else {
      setIsRevealed(true);
    }
  }, []);

  useEffect(() => {
    if (shouldAnimate && textRef.current && !isRevealed) {
      const target = baffle(textRef.current);
      
      target.set({
        characters: characters,
        speed: speed,
      });
      
      target.start();
      
      // Start the reveal animation after a short delay
      setTimeout(() => {
        target.reveal(revealDuration, revealSpeed, () => {
          setIsRevealed(true);
          // Mark that user has seen the animation in this session
          sessionStorage.setItem('portfolioDecryptSeen', 'true');
        });
      }, 500);

      // Cleanup function
      return () => {
        target.stop();
      };
    }
  }, [shouldAnimate, isRevealed, characters, speed, revealDuration, revealSpeed]);

  return (
    <div 
      ref={textRef} 
      className={`${className} ${!isRevealed && shouldAnimate ? 'font-mono' : ''}`}
    >
      {text}
    </div>
  );
};

export default DecryptedText;
