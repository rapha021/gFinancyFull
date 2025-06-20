interface IinputProps {
  title: string;
  placeholder?: string;
  inputIcon?: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
}

const Input = ({
  inputIcon = false,
  placeholder,
  title,
  type = "text",
}: IinputProps) => {
  return (
    <div className={`${!inputIcon && "mb-6"}`}>
      <label>
        <p className="mb-2 font-semibold">{title}</p>

        <input
          type={type}
          placeholder={placeholder}
          className={`w-full bg-gray-200 rounded-lg h-14 focus:outline-2 outline-emerald-500/50 ${
            inputIcon ? "px-10" : "px-4"
          }`}
        />
        {inputIcon && (
          <span className="relative text-gray-500 bottom-10 left-4">R$</span>
        )}
      </label>
    </div>
  );
};

export default Input;
