const axios = require("axios");

const baseUrl = "https://api.assemblyai.com/v2";
const instance = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  headers: {
    authorization: process.env.REACT_APP_CLIENT_KEY,
    "Content-Type": "application/json", 
  },
});

export default instance;
