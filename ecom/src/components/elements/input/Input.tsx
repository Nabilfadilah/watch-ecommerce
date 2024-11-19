import { forwardRef, ForwardedRef, InputHTMLAttributes } from "react";

// Menggunakan InputHTMLAttributes<HTMLInputElement> untuk mewarisi semua atribut bawaan <input> dari HTML
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  error?: boolean; // Jika error adalah boolean
  helperText?: string; // Jika helperText adalah string
};

// menentukan bahwa ref akan diarahkan ke elemen input HTML
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text", // Default type adalah "text"
      placeholder,
      name,
      className = "w-full",
      onChange,
      value,
      accept,
      onBlur,
      error,
      helperText,
      ...rest
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <input
          type={type}
          className={`text-sm border rounded py-2 px-2 text-slate-700 placeholder:opacity-50 ${className} ${
            error ? "border-red-500" : "border-gray-400"
          }`}
          placeholder={placeholder}
          name={name}
          id={name}
          ref={ref}
          onChange={onChange}
          value={value}
          accept={accept}
          onBlur={onBlur}
          {...rest} // Menangani properti tambahan
        />
        {helperText && (
          <span
            className={`text-xs mt-1 ${
              error ? "text-red-500" : "text-gray-500"
            }`}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

export default Input;
