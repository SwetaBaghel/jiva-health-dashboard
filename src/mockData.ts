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
    appointmentsCount: 2,
    avatarColor: "#2563eb",
    appointments: [
      { id: "A1", date: "2026-03-10", time: "10:00 AM", doctorName: "Dr. Sharma", type: "General Checkup", status: "Completed" },
      { id: "A2", date: "2026-04-05", time: "02:30 PM", doctorName: "Dr. Patel", type: "Dental Consultation", status: "Upcoming" }
    ],
    payments: [
      { id: "P1", date: "2026-03-10", amount: 120, service: "Consultation Fee", status: "Paid" },
      { id: "P2", date: "2026-04-01", amount: 45, service: "Lab Report", status: "Paid" }
    ],
    familyMembers: [
      { id: "F1", name: "Marco Lopez", relation: "Spouse", age: 32 },
      { id: "F2", name: "Sofia Lopez", relation: "Daughter", age: 6 }
    ]
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
    appointmentsCount: 1,
    avatarColor: "#059669",
    appointments: [
      { id: "A3", date: "2025-12-15", time: "09:15 AM", doctorName: "Dr. Verma", type: "Eye Checkup", status: "Completed" }
    ],
    payments: [
      { id: "P3", date: "2025-12-15", amount: 150, service: "Eye Surgery Consultation", status: "Paid" }
    ],
    familyMembers: []
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
    appointmentsCount: 0,
    avatarColor: "#dc2626",
    appointments: [],
    payments: [],
    familyMembers: [
      { id: "F3", name: "Ji-Woo Kim", relation: "Mother", age: 58 }
    ]
  }
];