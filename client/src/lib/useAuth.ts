import { useSession } from './auth';

export const useAuth = () => {
  // better-auth's useSession returns { data, isPending, error }
  const { data: sessionData, isPending } = useSession();

  return {
    user: sessionData?.user || null,
    isAuthenticated: !!sessionData?.user,
    isLoading: isPending,
    // Some session shapes nest session info under `session`
    sessionId: sessionData?.session?.id || null,
  };
};