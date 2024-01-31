import axios from "axios";

const baseUrl = "http://localhost:5000/user/auth";

export const login = async (data) => {
  console.log(data);
  const { email, password } = data;

  try {
    let response = await axios.post(`${baseUrl}/login`, {
      email: email,
      password: password,
    });

    return response.data;
  } catch (err) {
    throw { success: "false", message: err };
  }
};

export const signUp = async (data) => {
  console.log(`checking input from auth.js api calls file`);

  const { email, name, password, countryCode, phoneNumber } = data;
  console.log(name, " ", email);
  try {
    let response = await axios.post(`${baseUrl}/signUp`, {
      email: email,
      password: password,
      name: name,
      countryCode: countryCode,
      phoneNumber: phoneNumber,
    });
    return response.data;
  } catch (err) {
    throw { success: "false", message: err };
  }
};

// module.exports = { login, signUp };
