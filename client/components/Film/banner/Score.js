import React from "react";

export default function Score({score}) {
  return (
    <div className="position-relative">
      <h2 className="bg-score text-dark tester p-2 rounded-circle" style={{ zIndex:'8', border:'6px solid green'}}>
        {score}
      </h2>
    </div>
  );
}
