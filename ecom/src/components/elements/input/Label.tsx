import React from 'react'

// definisikan tipe untuk properti props
type LabelProps = {
    children: React.ReactNode;
    htmlFor?: string;
    key?: React.Key; // Tambahkan tipe React.Key
    className?: string; 
}

const Label: React.FC<LabelProps> = ({
    children,
    htmlFor,
    className
    // key, // Tidak perlu diambil karena 'key' tidak digunakan dalam JSX
}) => {
  return (
    <label
        htmlFor={htmlFor}
        className={`block text-slate-700 text-sm font-bold mb-2 ${className}`}
    >
        {children}
    </label>
  )
}

export default Label