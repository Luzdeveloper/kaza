import React from "react";
import "../style/tags.scss";

export function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  );
}
