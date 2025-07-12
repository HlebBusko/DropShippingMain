import { v4 as uuidv4 } from "uuid";
import checkmark from "../assets/checkmark.svg";
import { useEffect, useState } from "react";
import CheckOutButton from "../components/ui/CheckoutButton.jsx";
import InputField from "../components/ui/InputField.jsx";
import { NavLink } from "react-router-dom";

const loginFields = [
  {
    title: "Email",
    name: "email",
    id: uuidv4(),
    placeholder: "Your email adress *",
    type: "text",
  },
  {
    title: "Password",
    name: "password",
    id: uuidv4(),
    placeholder: "Passwrod *",
    type: "password",
  },
];

function Login() {
  const [checked, setChecked] = useState(false);
  const [loginData, setLoginData] = useState({
    fields: { email: "", password: "" },
    errors: {},
  });

  function handleLoginValue(e) {
    const { value, name } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      fields: { ...prevData.fields, [name]: value },
    }));
  }

  function handleChecked() {
    setChecked((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newLoginErrors = {};

    if (!loginData.email) {
      newLoginErrors.email = true;
    }
    if (!loginData.password) {
      newLoginErrors.password = true;
    }
    setLoginData((prev) => ({ ...prev, errors: newLoginErrors }));
  }

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  return (
    <form>
      <div className="pt-19 flex flex-col items-center pb-6 bg-gray-100 ">
        <div>
          <div className="text-center font-bold mb-2 text-lg">LOGIN</div>
          <div className="flex flex-col gap-1">
            {loginFields.map((field) => (
              <InputField
                key={field.id}
                field={field}
                errorData={loginData}
                onChange={(e) => handleLoginValue(e)}
              ></InputField>
            ))}
          </div>
          <div className="flex text-sm">
            <div className="flex gap-2">
              <label className="flex gap-2 cursor-pointer">
                <input
                  className="hidden"
                  type="checkbox"
                  onChange={handleChecked}
                  checked={checked}
                />
                <span
                  className={`w-5 h-5 rounded-[50%] border ${
                    checked ? "bg-blue-600" : ""
                  }`}
                >
                  {checked && (
                    <img
                      className="text-white"
                      src={checkmark}
                      alt="Checkmark"
                    />
                  )}
                </span>
                <span>Remember me</span>
              </label>
            </div>

            <div className="underline ml-auto hover:underline-blue-500 hover:text-blue-500 cursor-pointer">
              Forgot Password?
            </div>
          </div>
          <CheckOutButton
            className={`w-full mt-2 shadow-lg`}
            type={"submit"}
            onClick={(e) => handleSubmit(e)}
          >
            Log In
          </CheckOutButton>
        </div>
      </div>
      <div className="flex items-center flex-col gap-4 mt-4">
        <div className="font-semibold text-lg">NOT REGISTERED YET?</div>
        <NavLink
          to="/register"
          className={`w-86 shadow-lg bg-blue-500 py-4 rounded-lg text-white font-bold cursor-pointer hover:bg-blue-600 text-center`}
        >
          Register now
        </NavLink>
      </div>
      <div className="flex flex-col items-center mt-4">
        <h1 className="text-lg font-semibold mb-2">What are the benefits?</h1>
        <ul className="flex flex-col gap-2">
          <li>Check out faster</li>
          <li>Manage orders more easily</li>
          <li>View past orders</li>
          <li>Store multiple addresses</li>
        </ul>
      </div>
    </form>
  );
}

export default Login;
