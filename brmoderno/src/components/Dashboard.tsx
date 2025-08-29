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

  // ...existing code...
  const monthRoutes: Record<string, string> = {
    enero: '/calendar/2025/01',
    febrero: '/calendar/2025/02',
    marzo: '/calendar/2025/03',
    abril: '/calendar/2025/04',
    mayo: '/calendar/2025/05',
    junio: '/calendar/2025/06',
    julio: '/calendar/2025/07',
    agosto: '/calendar/2025/08',
    septiembre: '/calendar/2025/09',
    octubre: '/calendar/2025/10',
    noviembre: '/calendar/2025/11',
    diciembre: '/calendar/2025/12',
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Header */}
      <header className="bg-gray-900 text-white p-4 shadow-lg w-full">
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
      <main className="flex flex-col items-center w-full px-4 py-8">
        <div className="text-center mb-12 w-full">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Calendario {currentYear}
          </h2>
          <p className="text-lg text-gray-600">
            Selecciona un mes para ver y editar las tareas
          </p>
        </div>

        {/* Months Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl w-full justify-center mx-auto">
          {months.map((month) => (
            <Link
              key={month.value}
              href={`/calendar/${currentYear}/${month.value.padStart(2, '0')}`}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 overflow-hidden flex flex-col items-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 w-full flex flex-col items-center">
                  <Calendar className="h-8 w-8 text-white mb-2" />
                  <h3 className="text-white font-semibold text-center">
                    {month.name}
                  </h3>
                </div>
                <div className="p-6 w-full flex flex-col items-center">
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
        <div className="mt-16 text-center w-full flex justify-center">
          <div className="bg-gray-50 rounded-xl p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sistema de Gestión de Tareas
            </h3>
            <p className="text-gray-600 mb-6">
              Organiza y rastrea todas las tareas del equipo BACKROOM de manera eficiente
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2"></div>
                <p className="font-semibold text-blue-800">Maia</p>
                <p className="text-blue-600">Encargada principal</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2"></div>
                <p className="font-semibold text-blue-800">Sami</p>
                <p className="text-blue-600">Encargada principal</p>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2"></div>
                <p className="font-semibold text-blue-800">Sol</p>
                <p className="text-blue-600">Encargada principal</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
