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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-6">
      <div className="bg-white/30 backdrop-blur-lg rounded-2xl px-10 py-12 w-full max-w-md border border-white/30 shadow-2xl flex flex-col items-center">
        <div className="text-center flex flex-col justify-center items-center mb-10">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src="/images/logobr.png"
              alt="BACKROOM Logo"
              fill
              className="object-contain"
            />
          </div>
         
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center">
          
            <div className="w-full flex flex-col items-center justify-center mb-6 gap-4 text-start">
                <label htmlFor="username" className=" text-white/90 text-base font-medium mb-4 text-left">
              Usuario
            </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
                className="w-full max-w-xs px-5 py-3 bg-white/40 border border-white/50 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
                placeholder="Ingresa tu usuario"
                required
              />
              <LogIn className="absolute right-6 top-3 h-6 w-6 text-white/50" />
            </div>
            {error && (
              <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full max-w-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow mb-10"
          >
            Ingresar
          </button>
        </form>

        <div className='flex flex-col justify-center items-center pt-10'>
           <h1 className="text-4xl font-bold text-white mb-2 tracking-wide">BACKROOM</h1>
          <p className="text-white/80 text-base">#TODOCOMUNICA</p>
        </div>
      </div>
    </div>
  );
}
