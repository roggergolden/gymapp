// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url(/gym-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: '4rem',
  },
  form: {
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    width: '360px',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#2c3e50',
  },
  field: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#34495e',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #bdc3c7',
    fontSize: '1rem',
  },
  error: {
    color: '#e74c3c',
    marginBottom: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#e67e22',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  footer: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
  link: {
    color: '#27ae60',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.message ||
        'Error en inicio de sesión';
      setError(msg);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Iniciar Sesión</h2>
        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={styles.field}>
          <label style={styles.label}>Contraseña</label>
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Entrar
        </button>
        <div style={styles.footer}>
          ¿No tienes cuenta?{' '}
          <span style={styles.link} onClick={() => navigate('/registro')}>
            Regístrate
          </span>
        </div>
      </form>
    </div>
  );
}
