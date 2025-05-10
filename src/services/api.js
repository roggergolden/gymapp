// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/apiRest',  // coincide con tu context-path
});

export default api;
