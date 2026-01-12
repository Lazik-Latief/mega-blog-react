import React, { useId } from "react";

// Reusable input component with forwardRef
const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId(); // Unique ID for accessibility

  return (
    <div className="w-full">
      {/* Show label if provided */}
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1">
          {label}
        </label>
      )}

      {/* Input field */}
      <input
        id={id}
        type={type}
        ref={ref}
        className={`px-3 py-2 rounded-lg border w-full ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;
