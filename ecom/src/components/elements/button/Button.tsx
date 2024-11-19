import React from "react";

// definisikan tipe untuk properti props
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
    // konsep desctrukturing
    children,
    className = "bg-black text-white font-poppins",
    onClick = () => {},
    type = "button",
    disabled,
  }) => {
  return (
    <button
      className={`h-7 px-4 text-sm rounded-md ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
