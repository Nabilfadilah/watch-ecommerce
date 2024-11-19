import React, { forwardRef, ForwardedRef } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Import ikon dari React Icons

// Menentukan tipe data untuk properti
type InputSearchProps = {
  placeholder?: string;
  name: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // memastikan fungsi handler menerima event yang sesuai
};

// digunakan untuk mengarahkan ref ke elemen input HTML.
const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  // placeholder properti default Cari..
  ({ placeholder = "Cari...", name, className, value, onChange }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className="relative w-80">
        {/* Ikon Search */}
        <AiOutlineSearch className="absolute left-3 top-2.5 text-gray-400" />

        {/* Input Field */}
        <input
          type="search"
          className={`text-sm border border-gray-500 rounded w-full py-2 px-10 text-slate-700 placeholder:opacity-90 ${className}`}
          placeholder={placeholder}
          name={name}
          id={name}
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default InputSearch;
