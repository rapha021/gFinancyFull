import type { SelectHTMLAttributes } from "react";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  id: string;
  label: string
}

const Select = ({ options, id, label }: ISelectProps) => {
  return (
    <>
      <label htmlFor={id} className="block mb-2">
        {label}
      </label>
      <select
        id={id}
        className="w-full h-12 bg-gray-300 rounded-lg px-2 outline-emerald-500 mb-2"
      >
        {options.map((option) => (
          <option id={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
