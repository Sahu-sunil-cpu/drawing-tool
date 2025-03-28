"use client";

import { ReactNode } from "react";

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type btnType = "submit" | "reset" | "button" ;
interface ButtonProps {
  children: ReactNode;
  className?: string;
  type?: btnType;
  variant?: Variant;
  onClick?: () => void;
}

export const Button = ({ children, className, variant, type, onClick }: ButtonProps) => {
  return (
    <button
    type={type}
      className={className}
    // onClick={() => alert(`Hello from your ${appName} app!`)}
    onClick={onClick}
    >
      {children}
    </button>
  );
};
