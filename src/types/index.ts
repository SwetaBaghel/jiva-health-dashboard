// src/types/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'Patient' | 'Nurse' | 'Doctor'; 
  status: 'Active' | 'Inactive';
  userType: 'Normal User' | 'Support Staff' | 'Admin User';
  joinedDate: string;
  lastActiveDate: string;
  appointmentsCount: number;
  avatarColor: string;
}