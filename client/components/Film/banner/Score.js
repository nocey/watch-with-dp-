import React, { useEffect, useState } from "react";

export default function Score({score}) {
  return (
    <div className="position-relative px-2 " >
      <h2 className="bg-score text-dark tester p-2 px-3 rounded-circle" style={{ zIndex:'8', border:`6px solid ${getColor(score)}`}}>
        {score}
      </h2>
    </div>
  );
}


const getColor = (_score) => {
  if (_score >= 7.5){
    return '#34ebeb';
  }else if (_score >= 5.3){
    return '#d3eb34';
  }else if (_score >= 2.5) {
    return '#eb9634';
  }else {
    return 'red';
  }
}