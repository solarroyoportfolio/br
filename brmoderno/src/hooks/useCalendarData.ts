'use client';

import { useState, useEffect } from 'react';
import { CalendarData, MonthData } from '@/types';
import { initialAugust2025 } from '@/data/users';

export const useCalendarData = () => {
  const [calendarData, setCalendarData] = useState<CalendarData>({});

  useEffect(() => {
    // Cargar datos desde localStorage
    const savedData = localStorage.getItem('backroom-calendar');
    if (savedData) {
      try {
        setCalendarData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error parsing calendar data:', error);
        // Si hay error, inicializar con datos por defecto
        const defaultData = { '2025-08': initialAugust2025 };
        setCalendarData(defaultData);
        localStorage.setItem('backroom-calendar', JSON.stringify(defaultData));
      }
    } else {
      // Si no hay datos guardados, inicializar con agosto 2025
      const defaultData = { '2025-08': initialAugust2025 };
      setCalendarData(defaultData);
      localStorage.setItem('backroom-calendar', JSON.stringify(defaultData));
    }
  }, []);

  const getMonthData = (year: number, month: string): MonthData | undefined => {
    const key = `${year}-${month.padStart(2, '0')}`;
    return calendarData[key];
  };

  const updateTaskWeek = (
    year: number,
    month: string,
    taskId: string,
    week: string,
    value: string
  ) => {
    const key = `${year}-${month.padStart(2, '0')}`;
    const monthData = calendarData[key];
    
    if (!monthData) return;

    const updatedTasks = monthData.tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          weeks: {
            ...task.weeks,
            [week]: value
          }
        };
      }
      return task;
    });

    const updatedMonthData = {
      ...monthData,
      tasks: updatedTasks
    };

    const updatedCalendarData = {
      ...calendarData,
      [key]: updatedMonthData
    };

    setCalendarData(updatedCalendarData);
    localStorage.setItem('backroom-calendar', JSON.stringify(updatedCalendarData));
  };

  const createMonth = (year: number, month: string, monthName: string, weeks: string[]) => {
    const key = `${year}-${month.padStart(2, '0')}`;
    
    const newMonthData: MonthData = {
      month: monthName,
      year,
      weeks,
      tasks: [] // Empezar con tareas vacías
    };

    const updatedCalendarData = {
      ...calendarData,
      [key]: newMonthData
    };

    setCalendarData(updatedCalendarData);
    localStorage.setItem('backroom-calendar', JSON.stringify(updatedCalendarData));
  };

  return {
    calendarData,
    getMonthData,
    updateTaskWeek,
    createMonth
  };
};
