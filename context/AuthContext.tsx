import React, { createContext, useContext, useState } from 'react';
//
// 👇 tipo del usuario
type User = {
  id: number;
  nombre: string;
  apellidos: string;
  username: string;
} 

// 👇 tipo del contexto
type AuthContextType = {
  user: User | null;
  setUser:(user: User | null) => void;
};

// 👇 crear contexto con tipo
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 👇 hook seguro
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }

  return context;
};