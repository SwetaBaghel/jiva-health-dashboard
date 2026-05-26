// src/mockData.ts
import { User } from './types';

export const initialUsers: User[] = [
  {
    id: "EL",
    name: "Eva Lopez",
    email: "eva.lopez@email.com",
    phone: "+1 (555) 555-5555",
    role: "Patient",
    status: "Active",
    userType: "Normal User",
    joinedDate: "2025-07-18",
    lastActiveDate: "2026-03-21",
    appointmentsCount: 8,
    avatarColor: "#2563eb" // Royal Blue
  },
  {
    id: "CS",
    name: "Cecilia Smith",
    email: "cecilia.smith@email.com",
    phone: "+1 (555) 333-3333",
    role: "Patient",
    status: "Inactive",
    userType: "Normal User",
    joinedDate: "2024-05-22",
    lastActiveDate: "2025-12-30",
    appointmentsCount: 5,
    avatarColor: "#059669" // Emerald Green
  },
  {
    id: "DK",
    name: "David Kim",
    email: "david.kim@hospital.org",
    phone: "+1 (555) 444-4444",
    role: "Nurse",
    status: "Active",
    userType: "Support Staff",
    joinedDate: "2022-11-03",
    lastActiveDate: "2026-03-22",
    appointmentsCount: 30,
    avatarColor: "#dc2626" // Crimson Red
  }
];