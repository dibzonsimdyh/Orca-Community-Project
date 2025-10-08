import { create } from 'zustand';
import api from '@/services/api';

interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const res = await api.post('/auth/login', { email, password });
      const data = res.data;
      if (data?.token) {
        const user = data.user;
        // Persist token
        localStorage.setItem('token', data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        set({
          user: {
            id: user.id,
            email: user.email,
            name: user.name || user.email?.split('@')[0],
            image: user.image || undefined,
          },
          isAuthenticated: true,
          isLoading: false,
          error: null,
          token: data.token,
        });
        window.location.href = '/';
      } else {
        set({ error: 'Invalid email or password', isLoading: false, user: null, isAuthenticated: false });
      }
    } catch (error) {
  const anyErr: any = error;
  const message = anyErr?.response?.data?.message || (error instanceof Error ? error.message : 'Login failed');
      set({ error: message, isLoading: false, user: null, isAuthenticated: false });
    }
  },
  
  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const res = await api.post('/auth/register', { name, email, password });
      const data = res.data;
      if (data?.token) {
        localStorage.setItem('token', data.token);
        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        set({
          user: {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name || name,
          },
          isAuthenticated: true,
          isLoading: false,
          error: null,
          token: data.token,
        });
        window.location.href = '/auth/sign-in';
      } else {
        set({ error: 'Registration failed. This email may already be registered.', isLoading: false, user: null, isAuthenticated: false });
      }
    } catch (error) {
  const anyErr: any = error;
  const message = anyErr?.response?.data?.message || (error instanceof Error ? error.message : 'Registration failed');
      set({ error: message, isLoading: false, user: null, isAuthenticated: false });
    }
  },
  
  logout: async () => {
    set({ isLoading: true });
    
    try {
      // Clear local token and auth headers
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
      set({ user: null, token: null, isAuthenticated: false, isLoading: false, error: null });
      window.location.href = '/auth/sign-in';
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Logout failed',
        isLoading: false,
      });
    }
  },
  
  clearError: () => set({ error: null }),
}));

export default useAuthStore;