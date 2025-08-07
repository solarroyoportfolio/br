export interface User {
  username: string;
  name: string;
  type: 'sofi' | 'clau' | 'magui';
}

export interface Task {
  id: string;
  name: string;
  userType: 'sofi' | 'clau' | 'magui';
  weeks: Record<string, string>; // semana -> marca ('x' | 'xx' | '')
}

export interface MonthData {
  month: string;
  year: number;
  weeks: string[];
  tasks: Task[];
}

export interface CalendarData {
  [key: string]: MonthData; // key format: "YYYY-MM"
}

export type UserType = 'sofi' | 'clau' | 'magui';

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}
