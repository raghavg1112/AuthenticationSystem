import React, { useEffect, useState } from "react";

import { profileView } from "../../../apiCalls/UserData/userApiCalls";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const Navigate = useNavigate();
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      let response = await profileView();
      alert(`successfully fetched data`);
      // Function to decode the JWT token
      function decodeToken(token) {
        // Split the token into its three parts: header, payload, and signature
        const parts = token.split(".");

        // Decode the payload (second part)
        const payload = JSON.parse(atob(parts[1]));

        return payload;
      }

      // Retrieve the JWT token from the cookie
      const cookieToken = document.cookie
        .split("; ")
        .find((row) => row.startsWith("jwt="))
        .split("=")[1];

      // Decode the JWT token and access its payload
      const payload = decodeToken(cookieToken);

      // Now you can access properties of the payload
      console.log(`printing token's payload`, payload);
    } catch (err) {
      alert(err);
      Navigate("/login");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>profile</h1>
      </div>
    </>
  );
}
