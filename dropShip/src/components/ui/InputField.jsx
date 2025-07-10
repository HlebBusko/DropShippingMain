function InputField({ field, errorData, onChange }) {
  return (
    <div key={field.id} className="flex flex-col gap-1 h-21">
      <input
        className={`p-4 shadow border-1 focus:border-1 w-86 rounded-lg focus:bg-blue-100 focus:outline-blue-800 ${
          errorData.errors[field.name]
            ? "bg-red-200 focus:bg-red-200"
            : "bg-white"
        } ${errorData.fields[field.name] ? "bg-white focus:bg-white" : ""}`}
        type="text"
        value={errorData.fields[field.name]}
        name={field.name}
        onChange={onChange}
        placeholder={field.placeholder}
      />
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
