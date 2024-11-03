import Input from "./Input.jsx";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation.js";
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {
    enteredValue: emailValue,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: isEmailInvalid,
  } = useInput("", (value) => {
    return isEmail(value) && isNotEmpty(value);
  });

  const {
    enteredValue: passwordValue,
    handleChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: isPasswordInvalid,
  } = useInput("", (value) => {
    return hasMinLength(value, 6);
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (isEmailInvalid || isPasswordInvalid) {
      console.log("something is wrong.Please check them.");
      return;
    }

    console.log(passwordValue,emailValue);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          error={
            isEmailInvalid && <p>Email is invalid.Please enter a valid email</p>
          }
        />
        <Input
          label="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          value={passwordValue}
          onChange={handlePasswordChange}
          error={
            isPasswordInvalid && (
              <p>Password is invalid.Please enter a valid password</p>
            )
          }
        />
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
