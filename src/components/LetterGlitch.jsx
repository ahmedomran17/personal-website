import React, { useEffect, useRef } from 'react';

const LetterGlitch = ({ 
  glitchColors = ['#2b4539', '#61dca3', '#61b3dc'],
  className = "",
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",./<>?",
  fontSize = 14,
  speed = 100,
  glitchProbability = 0.05
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lettersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear container
    container.innerHTML = '';
    lettersRef.current = [];

    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = 600; // Fixed height as specified

    // Calculate grid dimensions
    const charWidth = fontSize * 0.6; // Approximate character width
    const charHeight = fontSize * 1.2; // Line height
    const cols = Math.floor(width / charWidth);
    const rows = Math.floor(height / charHeight);

    // Character array
    const chars = characters.split('');

    // Create grid of letters
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const letter = document.createElement('span');
        letter.style.position = 'absolute';
        letter.style.left = `${col * charWidth}px`;
        letter.style.top = `${row * charHeight}px`;
        letter.style.fontSize = `${fontSize}px`;
        letter.style.fontFamily = 'monospace';
        letter.style.color = '#888888';
        letter.style.userSelect = 'none';
        letter.style.pointerEvents = 'none';
        letter.style.transition = 'color 0.1s ease';
        
        // Set initial random character
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        letter.textContent = randomChar;
        
        container.appendChild(letter);
        lettersRef.current.push({
          element: letter,
          originalChar: randomChar,
          isGlitching: false
        });
      }
    }

    // Animation function
    const animate = () => {
      lettersRef.current.forEach((letterObj) => {
        if (Math.random() < glitchProbability) {
          // Start glitch
          if (!letterObj.isGlitching) {
            letterObj.isGlitching = true;
            
            // Random glitch sequence
            const glitchDuration = Math.random() * 200 + 100; // 100-300ms
            const glitchSteps = Math.floor(glitchDuration / 50); // Change character every 50ms
            
            let step = 0;
            const glitchInterval = setInterval(() => {
              if (step < glitchSteps) {
                // Show random character with random glitch color
                const randomChar = chars[Math.floor(Math.random() * chars.length)];
                const randomColor = glitchColors[Math.floor(Math.random() * glitchColors.length)];
                letterObj.element.textContent = randomChar;
                letterObj.element.style.color = randomColor;
                step++;
              } else {
                // End glitch - return to original or new character
                const finalChar = chars[Math.floor(Math.random() * chars.length)];
                letterObj.element.textContent = finalChar;
                letterObj.element.style.color = '#888888';
                letterObj.originalChar = finalChar;
                letterObj.isGlitching = false;
                clearInterval(glitchInterval);
              }
            }, 50);
          }
        }
      });

      animationRef.current = setTimeout(animate, speed);
    };

    // Start animation
    animate();

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [characters, fontSize, speed, glitchProbability, glitchColors]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ 
        background: 'white',
        zIndex: 1,
        width: '100%',
        height: '600px'
      }}
    />
  );
};

export default LetterGlitch;
