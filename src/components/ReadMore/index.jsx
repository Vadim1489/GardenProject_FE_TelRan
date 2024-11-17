import React, { useState, useRef, useEffect } from "react";
import s from './index.module.css'

export default function ReadMore({ description, maxLines = 5, maxWidth = 400 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * maxLines;
      setShowButton(textRef.current.scrollHeight > maxHeight);
    }
  }, [description, maxLines]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p
        ref={textRef}
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? "unset" : maxLines,
          WebkitBoxOrient: "vertical",
          maxWidth: `${maxWidth}px`
        }}
        className={s.description}
      >
        {description}
      </p>
      {showButton && (
        <div onClick={toggleReadMore} className={s.readMoreButton}>
        {isExpanded ? "Read Less" : "Read More"}
      </div>
      )}
    </div>
  );
}