import React from "react";

type TextProps = {
    children: React.ReactNode;
    className?: string;
}

const Typography: React.FC<TextProps> = ({
    children,
    className
}) => {
  return <p className={`font-poppins ${className}`}>{children}</p>;
};

export default Typography;
