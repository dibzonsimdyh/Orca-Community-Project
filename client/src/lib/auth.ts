import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: process.env.NODE_ENV === 'production' 
    ? process.env.REACT_APP_API_URL || ''
    : 'http://localhost:5000',
  fetchOptions: {
    cache: 'no-store',
  },
});

export const { signIn, signOut, useSession } = authClient;