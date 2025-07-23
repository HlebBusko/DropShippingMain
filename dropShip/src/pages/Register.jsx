import { useEffect, useState, useRef } from "react";
import InputField from "../components/ui/InputField.jsx";
import { v4 as uuidv4 } from "uuid";
import CheckOutButton from "../components/ui/CheckoutButton.jsx";
import checkmarkGreen from "../assets/checkmarkGreen.svg";

const registerFields = [
  {
    title: "Email",
    name: "email",
    id: uuidv4(),
    placeholder: "Email address *",
    type: "text",
  },
  {
    title: "First name",
    name: "name",
    id: uuidv4(),
    placeholder: "First name *",
    type: "text",
  },
  {
    title: "Last Name",
    name: "surname",
    id: uuidv4(),
    placeholder: "Second Name *",
    type: "text",
  },
  {
    title: "Password",
    name: "password",
    id: uuidv4(),
    placeholder: "Password *",
    type: "password",
  },
  {
    title: "Confirm Password",
    name: "confirm",
    id: uuidv4(),
    placeholder: "Confirm Passwrod *",
    type: "password",
  },
];

function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const timeoutRef = useRef(null);
  const [registerData, setRegisterData] = useState({
    fields: {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirm: "",
    },
    errors: {},
  });

  function handleValue(e) {
    const { name, value } = e.target;
    setRegisterData((prev) => ({
      ...prev,
      fields: { ...prev.fields, [name]: value },
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = true;
    const newErrors = {};
    if (!registerData.fields.email) {
      newErrors.email = true;
      isValid = false;
    }
    if (!registerData.fields.name) {
      newErrors.name = true;
      isValid = false;
    }
    if (!registerData.fields.surname) {
      newErrors.surname = true;
      isValid = false;
    }
    if (!registerData.fields.password) {
      newErrors.password = true;
      isValid = false;
    }
    if (!registerData.fields.confirm) {
      newErrors.confirm = true;
      isValid = false;
    }
    setRegisterData((prev) => ({ ...prev, errors: newErrors }));

    if (isValid) {
      setIsSubmitted(true);
      setRegisterData({
        fields: {
          email: "",
          name: "",
          surname: "",
          password: "",
          confirm: "",
        },
        errors: {},
      });
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsSubmitted(false);
      timeoutRef.current = null;
    }, 3000);
  }

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  return (
    <form className="pt-18 flex flex-col items-center">
      <div>
        <div className="font-semibold text-lg text-center mb-2">
          CREATE YOUR ACCOUNT
        </div>
        {registerFields.map((field) => (
          <InputField
            key={field.id}
            errorData={registerData}
            field={field}
            onChange={(e) => handleValue(e)}
            value={registerData.fields[field.name]}
          ></InputField>
        ))}
      </div>
      <div>
        <div className={`min-h-6 w-76 sm:w-86 text-left text-green-500`}>
          <div className={`flex gap-1 ${isSubmitted ? "block" : "hidden"}`}>
            <img src={checkmarkGreen} alt="Submit confirmation" />
            <div>Succesfully submitted</div>
          </div>
        </div>

        <CheckOutButton
          onClick={(e) => handleSubmit(e)}
          className={`w-76 sm:w-86`}
        >
          Create an account
        </CheckOutButton>
      </div>
    </form>
  );
}

export default Register;
