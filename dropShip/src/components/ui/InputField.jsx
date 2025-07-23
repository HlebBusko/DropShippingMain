import { useState } from "react";
import visibilityOff from "../../assets/visibilityOff.svg";
import visibilityOn from "../../assets/visibilityOn.svg";

function InputField({ field, errorData, onChange }) {
  const [visibility, setVisibility] = useState(false);

  function toggleVisibility(e) {
    e.preventDefault();
    setVisibility((prev) => !prev);
  }
  return (
    <div key={field.id} className="flex flex-col h-21 relative items-center">
      <input
        className={` p-4 shadow border-1 focus:border-1 w-76 sm:w-86 rounded-lg focus:bg-blue-100 focus:outline-blue-800 ${
          errorData.errors[field.name]
            ? "bg-red-200 focus:bg-red-200"
            : "bg-white"
        } ${errorData.fields[field.name] ? "bg-white focus:bg-white" : ""}`}
        type={
          field.name === "password" || field.name === "confirm"
            ? visibility
              ? "text"
              : "password"
            : field.type
        }
        value={errorData.fields[field.name]}
        name={field.name}
        onChange={onChange}
        placeholder={field.placeholder}
      />

      {(field.name === "password" || field.name === "confirm") && (
        <button className="cursor-pointer" onClick={(e) => toggleVisibility(e)}>
          {visibility ? (
            <img
              className="w-7 h-7 absolute right-5 top-4"
              src={visibilityOff}
              alt="Hide password"
            />
          ) : (
            <img
              className="w-7 h-7 absolute right-5 top-4"
              src={visibilityOn}
              alt="Show password"
            />
          )}
        </button>
      )}
      {errorData.errors[field.name] && !errorData.fields[field.name] ? (
        <span className="text-red-500 text-sm">
          {field.name === "confirm"
            ? "Repeat the password please"
            : `${field.title} is required`}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}

export default InputField;
