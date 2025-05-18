"use client";

import {
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  href: string;
}

const EasyInfo = ({ label, value, href, ...props }: Props) => {
  const [tooltip, setTooltip] = useState({
    isOpen: false,
    variant: "primary",
    status: "Copied successfully ✔",
  });

  function fallbackCopyTextToClipboard(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      setTooltip({
        ...tooltip,
        isOpen: true,
        variant: "primary",
        status: successful ? "Copied successfully ✔" : "Copy failed ❌",
      });
    } catch (err) {
      console.log(err.message);

      setTooltip({
        ...tooltip,
        isOpen: false,
        variant: "error",
        status: "Copy failed ❌",
      });
    }

    document.body.removeChild(textArea);
  }

  const handleCopy = async (text: string) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }

    try {
      const clipboard = navigator.clipboard;
      await clipboard.writeText(text);
      setTooltip({
        ...tooltip,
        isOpen: true,
        variant: "primary",
        status: "Copied successfully ✔",
      });
    } catch (error) {
      console.error(error);
      setTooltip({
        ...tooltip,
        isOpen: false,
        variant: "error",
        status: "Copy failed ❌",
      });
    }
  };

  useEffect(() => {
    if (tooltip.isOpen) {
      setTimeout(() => {
        setTooltip({ ...tooltip, isOpen: false });
      }, 2000);
    }
  }, [tooltip]);

  return (
    <div {...props}>
      <div className="text-sm font-bold capitalize mb-2">{label}</div>
      <div className="border border-primary rounded flex items-center px-3 py-1">
        <p id={value} className="text-primary text-sm truncate mr-auto">
          {value}
        </p>
        <div
          className={
            tooltip.isOpen ? "tooltip tooltip-open tooltip-primary" : ""
          }
          data-tip={tooltip.status}
        >
          <button className="m-1" onClick={() => handleCopy(value)}>
            <ClipboardDocumentCheckIcon className="w-6 text-primary rounded cursor-pointer hover:opacity-80" />
          </button>
        </div>
        <a
          href={href}
          className="p-0"
          target="_black"
          rel="noopener noreferrer"
        >
          <ArrowTopRightOnSquareIcon className="w-6 text-primary rounded cursor-pointer hover:opacity-80" />
        </a>
      </div>
    </div>
  );
};

export default EasyInfo;
