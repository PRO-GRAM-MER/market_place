import React from "react";
import classes from "./customButton.module.css";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

function CustomButton({
  children,
  className = "",
  ...props
}: CustomButtonProps) {
  return (
    <button
      role="button"
      className={`${classes.box} ${className}`.trim()} // Apply the CSS module's class
      {...props}
    >
      {children}
    </button>
  );
}

export default CustomButton;
