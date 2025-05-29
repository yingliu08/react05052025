import { useState, useRef } from "react";

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  function handleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (!email && !password) {
      setError("Please enter email and password");
      emailRef.current?.focus();
      return;
    }
    if (!email) {
      setError("Please enter email ");
      emailRef.current?.focus();
      return;
    }
    if (!password) {
      setError("Please enter password ");
      passwordRef.current?.focus();
      return;
    }
    setError("");
    console.log("Logging in with", "email:", email, "password:", password);
  }
  return (
    <div>
      <h2 style={{ color: "blue" }}>Login Form</h2>
      <form>
        <label>
          Email:
          <input type="text" ref={emailRef} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
        </label>
        <br />
        <button onClick={handleLogin}>Login</button>
        <p>{error}</p>
      </form>
    </div>
  );
}
