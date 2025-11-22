// components/ui/Pin.tsx
"use client";
import React from "react";

// Define the props interface
interface PinContainerProps {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}

export const PinContainer = (props: PinContainerProps) => {
  const { children, title, href, className, containerClassName } = props;
  
  // Create a simplified card without 3D animations and without the top title link
  return React.createElement(
    "div", 
    { 
      className: `relative group/pin z-50 cursor-pointer ${containerClassName || ""}`,
    },
    // Just include the card content without the top title link
    React.createElement(
      "div",
      {
        key: "card-content",
        className: "p-4 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.2] group-hover/pin:border-white/[0.3] transition duration-300 overflow-hidden bg-white dark:bg-black-400"
      },
      React.createElement(
        "div",
        {
          key: "content-wrapper",
          className: `relative z-50 ${className || ""}`
        },
        children
      )
    )
  );
};