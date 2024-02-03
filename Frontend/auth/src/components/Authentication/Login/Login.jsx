import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../apiCalls/Authentication/auth";

export default function Login() {
  const Navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await login(input);
      console.log(response);
      alert("successfully");

      Navigate("/profile");
    } catch (err) {
      alert(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  console.log(document.cookie.jwt);
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>

          <button type="submit"></button>
        </form>
      </div>
    </>
  );
}
