'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LogOut, Calendar } from 'lucide-react';
import { User } from '@/types';
import { months } from '@/data/users';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const currentYear = 2025;

  return (
    <div className="min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logobr.png"
                alt="BACKROOM Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">BACKROOM</h1>
              <p className="text-sm text-gray-300">#TODOCOMUNICA</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-300">Bienvenido/a</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Calendario {currentYear}
          </h2>
          <p className="text-lg text-gray-600">
            Selecciona un mes para ver y editar las tareas
          </p>
        </div>

        {/* Months Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {months.map((month) => (
            <Link
              key={month.value}
              href={`/calendar/${currentYear}/${month.value}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                  <Calendar className="h-8 w-8 text-white mx-auto mb-2" />
                  <h3 className="text-white font-semibold text-center">
                    {month.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-center text-sm">
                    {month.name} {currentYear}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Ver tareas
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sistema de Gestión de Tareas
            </h3>
            <p className="text-gray-600 mb-6">
              Organiza y rastrea todas las tareas del equipo BACKROOM de manera eficiente
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2"></div>
                <p className="font-semibold text-blue-800">Sofi & Clau</p>
                <p className="text-blue-600">Tareas principales</p>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg">
                <div className="w-4 h-4 bg-yellow-500 rounded mx-auto mb-2"></div>
                <p className="font-semibold text-yellow-800">Magui</p>
                <p className="text-yellow-600">Tareas secundarias</p>
              </div>
              
              <div className="bg-purple-100 p-4 rounded-lg">
                <div className="w-4 h-4 bg-purple-500 rounded mx-auto mb-2"></div>
                <p className="font-semibold text-purple-800">Backroom</p>
                <p className="text-purple-600">Tareas especiales</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
