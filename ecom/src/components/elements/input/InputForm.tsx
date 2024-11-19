import React, { forwardRef, ForwardedRef } from "react";
import Label from "./Label";
import Input from "./Input";

// Menentukan tipe data untuk properti
type InputFormProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // didefinisikan dengan tipe data untuk konsistensi
  value?: string | number;
  accept?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void; // didefinisikan dengan tipe data untuk konsistensi
  error?: boolean;
  helperText?: string;
};

// memastikan bahwa ref diarahkan ke elemen input HTML yang sesuai.
const InputForm = forwardRef<HTMLInputElement, InputFormProps>(
  (
    {
      label,
      name,
      type = "text", // memiliki nilai default "text"
      placeholder,
      className,
      onChange,
      value,
      accept,
      onBlur,
      error,
      helperText,
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="mb-3">
        <Label htmlFor={name}>{label}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          className={className}
          onChange={onChange}
          value={value}
          accept={accept}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
        />
      </div>
    );
  }
);

export default InputForm;
