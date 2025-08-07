import { User, MonthData } from '@/types';

export const users: Record<string, User> = {
  sol: { username: 'sol', name: 'Sol', type: 'sofi' },
  maia: { username: 'maia', name: 'Maia', type: 'magui' },
  clau: { username: 'clau', name: 'Clau', type: 'clau' },
  fran: { username: 'fran', name: 'Fran', type: 'sofi' },
  geor: { username: 'geor', name: 'Geor', type: 'magui' },
};

export const months = [
  { name: 'Enero', value: '01' },
  { name: 'Febrero', value: '02' },
  { name: 'Marzo', value: '03' },
  { name: 'Abril', value: '04' },
  { name: 'Mayo', value: '05' },
  { name: 'Junio', value: '06' },
  { name: 'Julio', value: '07' },
  { name: 'Agosto', value: '08' },
  { name: 'Septiembre', value: '09' },
  { name: 'Octubre', value: '10' },
  { name: 'Noviembre', value: '11' },
  { name: 'Diciembre', value: '12' },
];

// Datos de ejemplo para Agosto 2025
export const initialAugust2025: MonthData = {
  month: 'Agosto',
  year: 2025,
  weeks: ['S4/08', 'S11/08', 'S18/08', 'S25/08'],
  tasks: [
    {
      id: '1',
      name: 'APILLI PACK',
      userType: 'sofi',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '2',
      name: 'CAPOROSSI',
      userType: 'sofi',
      weeks: { 'S4/08': '', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '3',
      name: 'GAMBRINUS',
      userType: 'clau',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '4',
      name: 'DIST. APILLI',
      userType: 'clau',
      weeks: { 'S4/08': 'xx', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '5',
      name: 'ON WOK',
      userType: 'magui',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '6',
      name: 'PAUL GOOD FOOD',
      userType: 'magui',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '7',
      name: 'VAIT',
      userType: 'sofi',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '8',
      name: 'CARNES BLANCAS',
      userType: 'magui',
      weeks: { 'S4/08': '', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '9',
      name: 'EDIBA',
      userType: 'magui',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '10',
      name: 'EDIBA ESP',
      userType: 'magui',
      weeks: { 'S4/08': 'x', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '11',
      name: 'GARAGE',
      userType: 'magui',
      weeks: { 'S4/08': '', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '12',
      name: 'OMEGA',
      userType: 'magui',
      weeks: { 'S4/08': 'xx', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '13',
      name: 'SERVICRED',
      userType: 'magui',
      weeks: { 'S4/08': '', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '14',
      name: 'TU CLIMA',
      userType: 'magui',
      weeks: { 'S4/08': '', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    },
    {
      id: '15',
      name: 'REDES BACKROOM',
      userType: 'magui',
      weeks: { 'S4/08': '', 'S11/08': '', 'S18/08': '', 'S25/08': '' }
    }
  ]
};
