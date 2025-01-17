"use client";

import React, { ButtonHTMLAttributes, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  fullWidth?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  variant?: "text" | "default" | "outlined";
  color?: "primary" | "secondary";
  endIcon?: React.ReactNode;
  roundedFull?: boolean;
  width?: number;
  height?: number;
}

export default function Button({
  children,
  fullWidth = false,
  onClick = () => {},
  disabled = false,
  className = "",
  variant = "default",
  color = "primary",
  endIcon,
  roundedFull = false,
  width = 44,
  height = 44,
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const getHoverColor = () => {
    switch (color) {
      case "secondary":
        return "#FFEDE8";
      default:
        return "#CA3E1B";
    }
  };

  const renderColorButton = () => {
    switch (color) {
      case "secondary":
        return {
          color: "#562C2C",
          backgroundColor: isHovered ? getHoverColor() : "#fff",
        };

      default:
        return {
          color: "#fff",
          backgroundColor: isHovered ? getHoverColor() : "#F2542D",
        };
    }
  };

  const renderByVariant = () => {
    switch (variant) {
      case "outlined":
        return "#562C2C";
      case "text":
        return "";
      default:
        return "rgb(242, 84, 45, 100%)";
    }
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (!disabled) onClick();
      }}
      style={{
        ...renderColorButton(),
        border: `1px solid ${renderByVariant()}`,
        height,
        width: fullWidth ? "100%" : width,
      }}
      className={`${className} relative flex justify-center items-center transition-all ${
        endIcon ? "gap-2" : ""
      } ${
        roundedFull ? "rounded-full p-3" : "rounded-3xl px-4 py-3"
      } leading-5 `}
    >
      {children}
      {endIcon ? endIcon : null}
    </button>
  );
}
