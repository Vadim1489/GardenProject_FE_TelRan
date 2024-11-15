import React, { useState } from "react";
import s from './index.module.css'

export default function ReadMore({ description, maxLines  = 5, maxWidth=300 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p
        style={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? "unset" : maxLines , 
          WebkitBoxOrient: "vertical",
        }}
        className={s.description}
      >
        {description}
      </p>
      <div onClick={toggleReadMore}>
        {isExpanded ? "Read Less" : "Read More"}
      </div>
      
    </div>
  );
}
