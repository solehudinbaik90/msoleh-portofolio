import React from "react";

export default function SectionTitle({ subtitle, title }) {
  return (
    <div className="msoleh_tm_title">
      <div className="title_flex">
        <div className="left">
          <span>{subtitle}</span>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}