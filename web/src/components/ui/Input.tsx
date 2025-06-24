import type { InputHTMLAttributes } from "react";
import React from "react";
import type { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  mask?: string;
  errors: FieldError | undefined;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ label, id, errors, ...props }, ref) => {
    return (
      <>
        <label className="block mb-2 font-light" htmlFor={id}>
          {label}
        </label>
        <input
          {...props}
          ref={ref}
          className="w-full h-12 bg-gray-300 rounded-lg px-2 outline-emerald-500 mb-2"
        />
        {errors && <span>{errors.message}</span>}
      </>
    );
  }
);

export default Input;
