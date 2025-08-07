'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Task, UserType } from '@/types';

interface CalendarTableProps {
  title?: string;
  tasks: Task[];
  weeks: string[];
  userType: UserType;
  onUpdateTask: (taskId: string, week: string, value: string) => void;
  showLogo?: boolean;
}

const getUserTypeStyles = (userType: UserType) => {
  switch (userType) {
    case 'sofi':
    case 'clau':
      return {
        headerClass: 'bg-blue-500 text-white',
        cellClass: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
        textClass: 'text-blue-900'
      };
    case 'magui':
      return {
        headerClass: 'bg-yellow-500 text-white',
        cellClass: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
        textClass: 'text-yellow-900'
      };
    default:
      return {
        headerClass: 'bg-gray-500 text-white',
        cellClass: 'bg-gray-50 border-gray-200 hover:bg-gray-100',
        textClass: 'text-gray-900'
      };
  }
};

export default function CalendarTable({ 
  title, 
  tasks, 
  weeks, 
  userType, 
  onUpdateTask, 
  showLogo = false 
}: CalendarTableProps) {
  const styles = getUserTypeStyles(userType);
  const [editingCell, setEditingCell] = useState<string | null>(null);

  const handleCellClick = (taskId: string, week: string, currentValue: string) => {
    const cellKey = `${taskId}-${week}`;
    
    if (editingCell === cellKey) {
      // Si ya estamos editando esta celda, cambiar valor
      let newValue = '';
      if (currentValue === '') newValue = 'x';
      else if (currentValue === 'x') newValue = 'xx';
      else newValue = '';
      
      onUpdateTask(taskId, week, newValue);
      setEditingCell(null);
    } else {
      setEditingCell(cellKey);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 mb-6">
      {title && (
        <div className={`${styles.headerClass} p-3`}>
          <h3 className="font-semibold text-center">{title}</h3>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className={styles.headerClass}>
              <th className="p-3 text-left border-r border-white/20 min-w-[200px]">
                {showLogo && (
                  <div className="flex items-center justify-center relative w-8 h-8 mx-auto">
                    <Image 
                      src="/images/logobr.png" 
                      alt="BACKROOM Logo" 
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {!showLogo && <span>Tarea</span>}
              </th>
              {weeks.map((week, index) => (
                <th 
                  key={week} 
                  className={`p-3 text-center border-r border-white/20 min-w-[100px] ${
                    index === 0 ? 'font-bold' : ''
                  }`}
                >
                  {week}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan={weeks.length + 1} className="p-8 text-center text-gray-500">
                  No hay tareas para mostrar
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className={`p-3 font-semibold ${styles.textClass} border-r border-gray-200`}>
                    {task.name}
                  </td>
                  {weeks.map((week) => {
                    const cellKey = `${task.id}-${week}`;
                    const value = task.weeks[week] || '';
                    const isEditing = editingCell === cellKey;
                    
                    return (
                      <td 
                        key={week}
                        className={`p-3 text-center border-r border-gray-200 cursor-pointer transition-colors duration-200 ${styles.cellClass} ${
                          isEditing ? 'ring-2 ring-blue-500' : ''
                        }`}
                        onClick={() => handleCellClick(task.id, week, value)}
                        title={`Click para editar - Valor actual: ${value || 'vacío'}`}
                      >
                        <div className="min-h-[24px] flex items-center justify-center">
                          {value && (
                            <span className={`font-bold ${styles.textClass} text-lg`}>
                              {value}
                            </span>
                          )}
                          {isEditing && (
                            <div className="absolute bg-white border border-gray-300 rounded p-2 shadow-lg z-10 text-xs text-gray-600">
                              Click para cambiar: vacío → x → xx → vacío
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
