import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-ecommerce-site-demo.cloudfunctions.net/api",
  // "http://localhost:9000/ecommerce-site-demo/us-central1/api",
});

export default instance;
