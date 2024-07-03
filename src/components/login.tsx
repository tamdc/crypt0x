import React, { useState } from "react";
import { useAuth } from "../context/authentication";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Sign in</button>
      </form>
    </>
  );
};

export default Login;
