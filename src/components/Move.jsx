import React, { useState, useEffect } from "react";

const Move = () => {
  const [largeCirclePosition, setLargeCirclePosition] = useState({ x: 0, y: 0 });
  const [smallCirclePosition, setSmallCirclePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setIsMoving(true); 

    setLargeCirclePosition({ x: mouseX, y: mouseY });

    setSmallCirclePosition({
      x: mouseX + Math.random() * 10 - 5,
      y: mouseY + Math.random() * 10 - 5,
    });
  };

  const handleMouseStop = () => {
    setIsMoving(false); 
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    const stopTimeout = setTimeout(handleMouseStop, 100); 

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(stopTimeout);
    };
  }, [largeCirclePosition]);

  useEffect(() => {
    if (!isMoving) {
      setSmallCirclePosition({ x: largeCirclePosition.x, y: largeCirclePosition.y });
    }
  }, [isMoving]);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: `${largeCirclePosition.y}px`,
          left: `${largeCirclePosition.x}px`,
          width: "6.5vh",
          height: "6.5vh",
          borderRadius: "50%",
          border: "1px solid black",
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s ease-out",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "fixed",
          top:` ${smallCirclePosition.y}px`,
          left: `${smallCirclePosition.x}px`,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "black",
          transform: "translate(-50%, -50%)",
          transition: "all 0.5s ease-out",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default Move;