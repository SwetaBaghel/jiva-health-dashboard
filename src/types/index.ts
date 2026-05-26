// src/types/index.ts

export interface Appointment {
  id: string;
  date: string;
  time: string;
  doctorName: string;
  type: string;
  status: 'Completed' | 'Upcoming' | 'Cancelled';
}

export interface Payment {
  id: string;
  date: string;
  amount: number;
  service: string;
  status: 'Paid' | 'Pending' | 'Failed';
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  age: number;
}

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
  // Naye fields jo humne sub-tabs ke liye jode hain:
  appointments: Appointment[];
  payments: Payment[];
  familyMembers: FamilyMember[];
}