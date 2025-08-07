# BACKROOM - Sistema de Gestión de Tareas

Un sistema moderno de calendario y gestión de tareas construido con Next.js, TypeScript y Tailwind CSS.

## 🚀 Características

- **Sistema de Autenticación**: Login con múltiples usuarios
- **Dashboard Interactivo**: Navegación intuitiva por meses
- **Calendarios Mensuales**: Tablas organizadas por categorías de usuarios
- **Gestión de Tareas**: Marcar tareas con diferentes estados (vacío, x, xx)
- **Persistencia Local**: Los datos se guardan en localStorage
- **Diseño Responsivo**: Funciona en dispositivos móviles y desktop
- **Interfaz Moderna**: Diseñada con Tailwind CSS y componentes personalizados

## 👥 Usuarios del Sistema

- **Sol**: Tipo sofi (tabla azul)
- **Maia**: Tipo magui (tabla amarilla)  
- **Clau**: Tipo clau (tabla azul)
- **Fran**: Tipo sofi (tabla azul)
- **Geor**: Tipo magui (tabla amarilla)

## 🛠️ Tecnologías

- [Next.js 14](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- [Tailwind CSS](https://tailwindcss.com/) - Estilos utilitarios
- [Lucide React](https://lucide.dev/) - Iconos
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Gestión de estado

## 🚦 Comenzar

### Requisitos previos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

1. Instala las dependencias
```bash
npm install
```

2. Ejecuta el servidor de desarrollo
```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📱 Uso

1. **Login**: Utiliza uno de los usuarios disponibles (sol, maia, clau, fran, geor)
2. **Dashboard**: Selecciona un mes del año para ver las tareas
3. **Calendario Mensual**: Haz clic en las celdas para marcar tareas
4. **Estados de Tareas**: 
   - Vacío → x → xx → Vacío (ciclo)

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── calendar/          # Páginas de calendario dinámicas
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página de inicio
├── components/            # Componentes React
│   ├── CalendarTable.tsx  # Tabla de calendario
│   ├── Dashboard.tsx      # Dashboard principal
│   └── Login.tsx          # Componente de login
├── data/                  # Datos y configuración
│   └── users.ts           # Usuarios y datos iniciales
├── hooks/                 # Hooks personalizados
│   ├── useAuth.ts         # Gestión de autenticación
│   └── useCalendarData.ts # Gestión de datos del calendario
└── types/                 # Definiciones de TypeScript
    └── index.ts           # Tipos principales
```

## 🎨 Temas y Estilos

- **Tablas Azules**: Usuarios tipo sofi y clau
- **Tablas Amarillas**: Usuarios tipo magui
- **Fuente**: Poppins (Google Fonts)
- **Colores**: Paleta azul y amarilla según el diseño original

## 📝 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Iniciar servidor de producción
- `npm run lint` - Ejecutar ESLint

---

**#TODOCOMUNICA** 🚀
