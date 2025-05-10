// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#222',
    color: '#fff',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 100,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '1.5rem',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(/gym-hero.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    textAlign: 'center',
    color: '#fff',
    paddingTop: '4rem',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    textShadow: '0 2px 6px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    textShadow: '0 1px 4px rgba(0,0,0,0.5)',
  },
  heroButton: {
    padding: '0.75rem 2rem',
    backgroundColor: '#e67e22',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logo}>GymPro</div>
        <ul style={styles.navList}>
          <li style={styles.navItem} onClick={() => navigate('/')}>
            Inicio
          </li>
          <li style={styles.navItem} onClick={() => navigate('/servicios')}>
            Servicios
          </li>
          <li style={styles.navItem} onClick={() => navigate('/planes')}>
            Planes
          </li>
          <li style={styles.navItem} onClick={() => navigate('/contacto')}>
            Contacto
          </li>
          <li style={styles.navItem} onClick={() => navigate('/login')}>
            Iniciar Sesión
          </li>
        </ul>
      </header>

      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Bienvenido a GymPro</h1>
        <p style={styles.heroSubtitle}>Tu mejor versión comienza aquí</p>
        <button
          style={styles.heroButton}
          onClick={() => navigate('/login')}
        >
          Inicia Sesión
        </button>
      </section>
    </div>
  );
}
