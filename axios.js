import axios from "axios";

const baseURL = `http://localhost:5000/api`;

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`,
  headers: {
    'Content-Type': 'multipart/form-data', // Set proper Content-Type header for file upload
  },
});

export default instance;