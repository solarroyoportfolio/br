'use client';

import { useAuth } from '@/hooks/useAuth';
import Login from '@/components/Login';
import Dashboard from '@/components/Dashboard';

export default function Home() {
  const { isAuthenticated, currentUser, login, logout } = useAuth();

  if (!isAuthenticated || !currentUser) {
    return <Login onLogin={login} />;
  }

  return <Dashboard user={currentUser} onLogout={logout} />;
}
