'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Home } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCalendarData } from '@/hooks/useCalendarData';
import CalendarTable from '@/components/CalendarTable';
import { months } from '@/data/users';

export default function CalendarMonth() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, currentUser } = useAuth();
  const { getMonthData, updateTaskWeek } = useCalendarData();
  
  const [isLoading, setIsLoading] = useState(true);

  const year = parseInt(params.year as string);
  const monthValue = params.month as string;
  
  const monthName = months.find(m => m.value === monthValue)?.name || 'Mes';

  useEffect(() => {
    // Redirigir si no está autenticado
    if (!isAuthenticated) {
      router.push('/');
      return;
    }
    setIsLoading(false);
  }, [isAuthenticated, router]);

  if (isLoading || !isAuthenticated || !currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  const monthData = getMonthData(year, monthValue);

  if (!monthData) {
    // Botón para restaurar datos de ejemplo
    const restoreAugustData = () => {
      const { initialAugust2025 } = require('@/data/users');
      localStorage.setItem('backroom-calendar', JSON.stringify({ '2025-08': initialAugust2025 }));
      window.location.reload();
    };
    return (
      <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <header className="bg-gray-900 text-white p-4 shadow-lg">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Volver</span>
              </Link>
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logobr.png"
                  alt="BACKROOM Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-xl font-bold">BACKROOM</h1>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-300">{currentUser.name}</p>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {monthName} {year} - No disponible
            </h2>
            <p className="text-gray-600 mb-8">
              Este mes aún no tiene datos configurados.
            </p>
            <button
              onClick={restoreAugustData}
              className="inline-flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition-colors font-bold mb-4"
            >
              <span>Restaurar datos de ejemplo (Agosto 2025)</span>
            </button>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Ir al Dashboard</span>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  // Separar tareas por tipo de usuario
  const sofiTasks = monthData.tasks.filter(task => task.userType === 'sofi');
  const clauTasks = monthData.tasks.filter(task => task.userType === 'clau');
  const maguiTasks = monthData.tasks.filter(task => task.userType === 'magui');
  const backroomTasks = monthData.tasks.filter(task => task.name.toLowerCase().includes('backroom'));
  const otherMaguiTasks = maguiTasks.filter(task => !task.name.toLowerCase().includes('backroom'));

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <header className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 hover:text-blue-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span>Volver</span>
            </Link>
            <div className="relative w-8 h-8">
              <Image
                src="/images/logobr.png"
                alt="BACKROOM Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold">BACKROOM</h1>
          </div>
          
          <div className="text-right">
            <p className="text-sm text-gray-300">{currentUser.name}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            {monthName} {year}
          </h2>
          <p className="text-gray-600">#TODOCOMUNICA</p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* Tablas Sofi y Clau */}
          {(sofiTasks.length > 0 || clauTasks.length > 0) && (
            <CalendarTable
              tasks={[...sofiTasks, ...clauTasks]}
              weeks={monthData.weeks}
              userType="sofi"
              onUpdateTask={updateTaskWeek.bind(null, year, monthValue)}
            />
          )}

          {/* Tabla Magui (sin Backroom) */}
          {otherMaguiTasks.length > 0 && (
            <CalendarTable
              tasks={otherMaguiTasks}
              weeks={monthData.weeks}
              userType="magui"
              onUpdateTask={updateTaskWeek.bind(null, year, monthValue)}
            />
          )}

          {/* Tabla Backroom */}
          {backroomTasks.length > 0 && (
            <CalendarTable
              tasks={backroomTasks}
              weeks={monthData.weeks}
              userType="magui"
              onUpdateTask={updateTaskWeek.bind(null, year, monthValue)}
              showLogo={true}
            />
          )}
        </div>
      </main>
    </div>
  );
}
