'use client';

import { useState, useEffect } from 'react';
import { AuthState } from '@/types';
import { users } from '@/data/users';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    currentUser: null,
  });

  useEffect(() => {
    // Cargar estado de autenticación desde localStorage
    const savedAuth = localStorage.getItem('backroom-auth');
    if (savedAuth) {
      try {
        const parsed = JSON.parse(savedAuth);
        setAuthState(parsed);
      } catch (error) {
        console.error('Error parsing auth state:', error);
      }
    }
  }, []);

  const login = (username: string): boolean => {
    const user = users[username];
    if (user) {
      const newAuthState = {
        isAuthenticated: true,
        currentUser: user,
      };
      setAuthState(newAuthState);
      localStorage.setItem('backroom-auth', JSON.stringify(newAuthState));
      return true;
    }
    return false;
  };

  const logout = () => {
    const newAuthState = {
      isAuthenticated: false,
      currentUser: null,
    };
    setAuthState(newAuthState);
    localStorage.removeItem('backroom-auth');
  };

  return {
    ...authState,
    login,
    logout,
  };
};
