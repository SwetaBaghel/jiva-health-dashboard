// src/store/useUserStore.ts
import { create } from 'zustand';
import { User } from '../types';
import { initialUsers } from '../mockData';

interface UserStore {
  users: User[];
  searchQuery: string;
  selectedUserId: string | null;
  
  // Actions (Functions jo data ko badlenge)
  setSearchQuery: (query: string) => void;
  setSelectedUserId: (id: string | null) => void;
  toggleUserStatus: (id: string) => void;
  addUser: (user:User)=>void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: initialUsers,
  searchQuery: '',
  selectedUserId: null,

  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setSelectedUserId: (id) => set({ selectedUserId: id }),

  toggleUserStatus: (id) => set((state) => ({
    users: state.users.map((user) => 
      user.id === id 
        ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } 
        : user
    )
  })),

addUser: (newUser)=> set((state)=>({
  users: [newUser, ...state.users]
})),
}));
