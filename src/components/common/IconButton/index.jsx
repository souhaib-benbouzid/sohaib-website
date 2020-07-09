import React from "react";
import "./style.scss";

export default function index({ className, url, content, secondary }) {
  return (
    <a
      href={url}
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
