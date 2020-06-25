import React from "react";
import "./style.scss";

export default function index({ className, url, content, secondary }) {
  return (
    <a
      className={
        secondary === "1"
          ? className
            ? `main-btn main-btn-secondary--btn ${className}`
            : `main-btn main-btn-secondary--btn `
          : className
          ? `main-btn main-btn-primary--btn ${className}`
          : `main-btn main-btn-primary--btn `
      }
      href={url ? url : "#"}
    >
      {content ? content : "submit"}
    </a>
  );
}
