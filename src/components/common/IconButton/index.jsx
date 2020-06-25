import React from "react";
import "./style.scss";

export default function index({ className, url, content, secondary }) {
  return (
    <a
      className={
        secondary === "1"
          ? className
            ? `icon-btn icon-btn-secondary--btn ${className}`
            : `icon-btn icon-btn-secondary--btn `
          : className
          ? `icon-btn icon-btn-primary--btn ${className}`
          : `icon-btn icon-btn-primary--btn `
      }
    >
      {content ? content : "submit"}{" "}
    </a>
  );
}
