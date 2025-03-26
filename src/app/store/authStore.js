import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,

  initializeAuth: () => {
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    if (username && userId && role) {
      set({ isLoggedIn: true });
    }
  },

  login: (data) => {
    localStorage.setItem("username", data.username);
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("role", data.role);
    set({ isLoggedIn: true });
  },

  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;
