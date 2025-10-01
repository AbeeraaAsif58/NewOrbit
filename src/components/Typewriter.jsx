// src/components/Typewriter.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';

const Typewriter = ({
  children,
  speed = 'normal',
  variance = 'natural',
  play = true,
  cursorBlinkDuration = 0.5,
  cursorClassName = '',
  textClassName = '',
  onComplete,
  as: Component = 'span',
  className = '',
  delay = 0,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const textRef = useRef(children);
  const timeoutRef = useRef(null);
  const cursorTimeoutRef = useRef(null);
  const isInViewRef = useRef(false);

  // Speed presets (milliseconds between characters)
  const speedPresets = {
    slow: 120,
    normal: 80,
    fast: 40
  };

  // Get typing speed
  const getTypingSpeed = useCallback(() => {
    const baseSpeed = typeof speed === 'string' ? speedPresets[speed] : speed;
    
    if (variance === 'natural') {
      return getNaturalVariance(baseSpeed);
    }
    
    if (typeof variance === 'number') {
      const varianceAmount = baseSpeed * variance;
      return baseSpeed + (Math.random() - 0.5) * varianceAmount * 2;
    }
    
    return baseSpeed;
  }, [speed, variance]);

  // Natural variance based on character type and position
  const getNaturalVariance = (baseSpeed) => {
    const currentChar = textRef.current[currentIndex];
    const prevChar = textRef.current[currentIndex - 1];
    const nextChar = textRef.current[currentIndex + 1];
    
    let multiplier = 1;
    
    // Slower for punctuation
    if (/[.!?;:,]/.test(currentChar)) {
      multiplier = 1.5;
    }
    
    // Slower for capital letters
    if (/[A-Z]/.test(currentChar)) {
      multiplier = 1.2;
    }
    
    // Slower for numbers
    if (/[0-9]/.test(currentChar)) {
      multiplier = 1.1;
    }
    
    // Slower at word boundaries
    if (prevChar === ' ' || currentChar === ' ') {
      multiplier = 1.3;
    }
    
    // Slower for uncommon character combinations
    if (prevChar && /[qwxz]/.test(prevChar.toLowerCase()) && /[qwxz]/.test(currentChar.toLowerCase())) {
      multiplier = 1.4;
    }
    
    // Add random variance
    const randomVariance = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
    
    return baseSpeed * multiplier * randomVariance;
  };

  // Cursor blinking animation
  useEffect(() => {
    if (!isTyping) {
      const blink = () => {
        setShowCursor(prev => !prev);
        cursorTimeoutRef.current = setTimeout(blink, cursorBlinkDuration * 1000);
      };
      
      cursorTimeoutRef.current = setTimeout(blink, cursorBlinkDuration * 1000);
      
      return () => {
        if (cursorTimeoutRef.current) {
          clearTimeout(cursorTimeoutRef.current);
        }
      };
    } else {
      setShowCursor(true);
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
    }
  }, [isTyping, cursorBlinkDuration]);

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-typewriter="${textRef.current}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Main typing animation
  useEffect(() => {
    if (!play || !isInViewRef.current) {
      setIsTyping(false);
      return;
    }

    const text = textRef.current;
    
    if (currentIndex < text.length) {
      setIsTyping(true);
      
      const timeout = currentIndex === 0 ? delay : getTypingSpeed();
      
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, timeout);
    } else {
      setIsTyping(false);
      if (onComplete) {
        onComplete();
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, play, getTypingSpeed, onComplete, delay]);

  // Reset when children change
  useEffect(() => {
    if (textRef.current !== children) {
      textRef.current = children;
      setDisplayedText('');
      setCurrentIndex(0);
      setIsTyping(false);
    }
  }, [children]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (cursorTimeoutRef.current) {
        clearTimeout(cursorTimeoutRef.current);
      }
    };
  }, []);

  const cursorStyle = {
    opacity: showCursor ? 1 : 0,
    transition: `opacity ${cursorBlinkDuration * 0.1}s ease-in-out`,
    color: '#0CF25D', // Theme color
    fontWeight: 'bold'
  };

  return (
    <Component
      className={`${className} ${textClassName}`}
      data-typewriter={textRef.current}
      {...props}
    >
      <span className={textClassName}>
        {displayedText}
      </span>
      <span 
        className={`cursor ${cursorClassName}`}
        style={cursorStyle}
        aria-hidden="true"
      >
        |
      </span>
    </Component>
  );
};

export default Typewriter;
