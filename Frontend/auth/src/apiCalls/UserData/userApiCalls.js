import axios from "axios";

axios.defaults.withCredentials = true;
const baseUrl = "http://localhost:5000/user/data";

export const profileView = async (data) => {
  try {
    let response = await axios.get(`${baseUrl}/profileView`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const myCart = async () => {
  try {
    let response = await axios.get(`${baseUrl}/myCart`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};
