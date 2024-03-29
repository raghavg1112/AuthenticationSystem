import React, { useState } from "react";
import axios from "axios";

export default function ChangePassword() {
  const [input, setInput] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const newInput = { ...input };
    newInput[e.target.name] = e.target.value;
    setInput(newInput);
  };

  const sendchangerequest = async (e) => {
    let sendOtp = await axios.post(
      "http://localhost:5000/user/auth/forgotPassword",
      {
        email: input.email,
      }
    );
    console.log(sendOtp);
  };

  return (
    <>
      <div>
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <button
          onClick={(e) => {
            sendchangerequest(e);
          }}
        />
      </div>
    </>
  );
}
