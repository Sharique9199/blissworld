import React, { createContext, useContext, useEffect, useState } from 'react'
export const UserContext = createContext();
export const AuthContext = ({ children }) => {
  const [auth, setAuth] = useState({ username: '', email: '', token: null });
  useEffect(() => {
    const localAuth = JSON.parse(localStorage.getItem('blissworldAuth'));
    if (localAuth) {
      setAuth(localAuth);
    }
  }, [auth.username])
  return (
    <UserContext.Provider value={[auth, setAuth]}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext);


