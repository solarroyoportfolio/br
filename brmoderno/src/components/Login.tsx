'use client';

import { useState } from 'react';
import Image from 'next/image';
import { LogIn } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string) => boolean;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = onLogin(username.toLowerCase());
    if (!success) {
      setError('Usuario no encontrado');
    }
  };

  const quickLogin = (user: string) => {
    onLogin(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20 shadow-2xl">
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/images/logobr.png"
              alt="BACKROOM Logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">BACKROOM</h1>
          <p className="text-white/80">#TODOCOMUNICA</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-white/90 text-sm font-medium mb-2">
              Usuario
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Ingresa tu usuario"
                required
              />
              <LogIn className="absolute right-3 top-3 h-5 w-5 text-white/50" />
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-2">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Ingresar
          </button>
        </form>

        <div className="mt-8">
          <p className="text-white/70 text-sm text-center mb-4">Acceso rápido:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['sol', 'maia', 'clau', 'fran', 'geor'].map((user) => (
              <button
                key={user}
                onClick={() => quickLogin(user)}
                className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
              >
                {user}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
