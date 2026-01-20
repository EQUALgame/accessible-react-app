import React from "react";

export default function FracturedFocusIcon({ height = 100, className }) {
    const base =
        (typeof import.meta !== "undefined" && import.meta.env?.BASE_URL) ||
        (typeof process !== "undefined" && process.env?.PUBLIC_URL) ||
        "";
  return (
    <div className={`icon-swap-stack ${className ?? ""}`} style={{ height }}>
      <img src={`${base}icons/ADHD default.png`} alt="" style={{ height }}/>
      <img className="hover-img" src={`${base}icons/ADHD hover.png`} alt="" style={{ height }}/>
    </div>
  );
}
