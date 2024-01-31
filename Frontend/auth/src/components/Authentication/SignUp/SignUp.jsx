import React, { useState } from "react";

import { signUp } from "../../../apiCalls/Authentication/auth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const Navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    name: "",
    password: "",
    countryCode: "",
    phoneNumber: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await signUp(input);
      console.log(response);
      // alert("Request submitted successfully");
      // Navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  // console.log(`hello from signUp`);
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
            type="text"
            name="name"
            placeholder="name"
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
          <input
            type="number"
            name="countryCode"
            placeholder="countryCode"
            onChange={(e) => {
              handleChange(e);
            }}
          ></input>
          <input
            type="number"
            name="phoneNumber"
            placeholder="phoneNumber"
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
