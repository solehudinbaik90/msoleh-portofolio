import React from "react";

export default function ProgressBar({ label, percent }) {
  return (
    <div className="progress_inner">
      <span>
        <span className="label">{label}</span>
        <span className="number">{percent}%</span>
      </span>
      <div className="background">
        <div className="bar">
          <div className="bar_in" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
}