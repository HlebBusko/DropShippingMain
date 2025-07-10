import { useEffect, useState } from "react";
import InputField from "../components/ui/InputField.jsx";
import { v4 as uuidv4 } from "uuid";
import CheckOutButton from "../components/ui/CheckoutButton.jsx";

const registerFields = [
  {
    title: "Email",
    name: "email",
    id: uuidv4(),
    placeholder: "Email address *",
  },
  {
    title: "First name",
    name: "name",
    id: uuidv4(),
    placeholder: "First name *",
  },
  {
    title: "Last Name",
    name: "surname",
    id: uuidv4(),
    placeholder: "Second Name *",
  },
  {
    title: "Password",
    name: "password",
    id: uuidv4(),
    placeholder: "Password *",
  },
  {
    title: "Confirm Password",
    name: "confirm",
    id: uuidv4(),
    placeholder: "Confirm Passwrod *",
  },
];

function Register() {
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
    const newErrors = {};
    if (!registerData.fields.email) {
      newErrors.email = true;
    }
    if (!registerData.fields.name) {
      newErrors.name = true;
    }
    if (!registerData.fields.surname) {
      newErrors.surname = true;
    }
    if (!registerData.fields.password) {
      newErrors.password = true;
    }
    if (!registerData.fields.confirm) {
      newErrors.confirm = true;
    }
    setRegisterData((prev) => ({ ...prev, errors: newErrors }));
  }

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  return (
    <form className="pt-18 flex flex-col items-center">
      <div>
        <div>CREATE YOUR ACCOUNT</div>
        {registerFields.map((field) => (
          <InputField
            key={field.id}
            errorData={registerData}
            field={field}
            onChange={(e) => handleValue(e)}
          ></InputField>
        ))}
      </div>
      <CheckOutButton onClick={(e) => handleSubmit(e)} className={`w-87`}>
        Create an account
      </CheckOutButton>
    </form>
  );
}

export default Register;
