import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8000/api/create-user", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      contentType: "application/json",
    });
  };

  return (
    <>
      <h1>register</h1>
      <form onSubmit={register}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button>register</button>
      </form>
    </>
  );
};

export default Register;
