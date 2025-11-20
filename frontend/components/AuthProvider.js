import { createContext, useEffect, useState } from 'react';
import API from '../lib/api';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function logout() {
    localStorage.removeItem('token');
    setUser(null);
  }

  async function loadUser() {
    try {
      const res = await API.get('/user/me');
      setUser(res.data);
    } catch {
      logout();
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      loadUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
