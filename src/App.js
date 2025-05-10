// src/App.js
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        {/* 1) Home siempre público */}
        <Route path="/" element={<Home />} />

        {/* 2) Login solo si no estás autenticado */}
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />

        {/* 3) Registro solo si no estás autenticado */}
        <Route
          path="/registro"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Registro />}
        />

        {/* 4) Cualquier otra ruta vuelve a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
