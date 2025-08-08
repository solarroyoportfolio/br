# Copilot Instructions para BACKROOM

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Descripción del Proyecto

Este es un proyecto Next.js con TypeScript y Tailwind CSS que replica la funcionalidad de un sistema de calendario de tareas llamado BACKROOM.

## Características Principales

1. **Sistema de Login**: Múltiples usuarios con diferentes permisos (sol, maia, clau, fran, geor)
2. **Dashboard Principal**: Selección de meses del año
3. **Páginas de Calendario**: Tablas interactivas para cada mes
4. **Gestión de Tareas**: Agregar marcas (x) en las celdas de las tablas
5. **Categorización por Usuario**: Diferentes colores para cada tipo de usuario

## Estructura de Usuarios

- **sofi**: Color azul (table-primary)
- **clau**: Color azul (table-primary) 
- **magui**: Color amarillo (table-warning)
- **Backroom**: Color amarillo (table-warning)

## Tecnologías

- Next.js 14+ con App Router
- TypeScript
- Tailwind CSS
- React Hooks para estado
- Local Storage para persistencia

## Estilo y UX

- Usar colores consistentes con el diseño original
- Mantener la funcionalidad de hover y interactividad
- Responsive design
- Fuente Poppins como principal
- Icons de Font Awesome cuando sea necesario

## Convenciones de Código

- Componentes en PascalCase
- Hooks personalizados con prefijo 'use'
- Tipos TypeScript con sufijo 'Type' o 'Interface'
- Archivos de utilidades en camelCase
