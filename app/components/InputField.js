import React, { useState } from "react";

const InputField = ({
  placeholder,
  label,
  id,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
  caption,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-4 h-[74px]">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          onBlur(e);
          setIsFocused(false);
        }}
        onFocus={() => setIsFocused(true)}
        className={`w-full p-3 rounded-lg bg-secondary h-full text-gray-400 border ${
          error ? "border-red-500" : "border-transparent"
        } focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all`}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 uppercase top-2.5 text-text-primary transition-all ${
          isFocused || value ? "text-xs -top-2.5" : "text-sm"
        }`}
      >
        {label}
      </label>
      <span
        className={`absolute pointer-events-none left-3 bottom-1.5 text-gray-500 transition-all ${
          isFocused || value ? "hidden" : ""
        }`}
      >
        {placeholder}
      </span>
      {error ? (
        <div className="text-red-500 ml-3  text-xs mt-3">{error}</div>
      ) : (
        <div className="text-gray-400 ml-3 text-xs mt-3">{caption}</div>
      )}
    </div>
  );
};

export default InputField;
