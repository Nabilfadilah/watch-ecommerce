import React from 'react'

// definisikan tipe untuk properti props
type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
}

const Label: React.FC<LabelProps> = ({
    children,
    htmlFor
}) => {
  return (
    <label
        htmlFor={htmlFor}
        className="block text-slate-700 text-sm font-bold mb-2"
    >
        {children}
    </label>
  )
}

export default Label