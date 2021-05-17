import React, { useEffect, useState } from "react";

export default function Score({score}) {
  return (
    <div className="position-relative" >
      <h2 className="bg-score text-dark tester p-2 rounded-circle" style={{ zIndex:'8', border:`6px solid ${getColor(score)}`}}>
        {score}
      </h2>
    </div>
  );
}


const getColor = (_score) => {
  if (_score >= 75){
    return '#34ebeb';
  }else if (_score >= 50){
    return '#d3eb34';
  }else if (_score >= 25) {
    return '#eb9634';
  }else {
    return 'red';
  }
}