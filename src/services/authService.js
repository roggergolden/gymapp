// src/services/authService.js
import api from './api';

export const register = (usuario) =>
  api.post('/usuarios/register', usuario);

export const login = (credentials) =>
  api.post('/auth/login', credentials); // ajusta el endpoint cuando lo tengas
