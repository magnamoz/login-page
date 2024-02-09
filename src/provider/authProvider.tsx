import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
} from 'react';
import axios from 'axios';

import { getToken, isAuthenticated, login, logout } from '../service';

interface AuthContextProps {
  token?: string | null;
}

export const AuthContext = createContext<AuthContextProps>({});

const AuthProvider = ({ children }: PropsWithChildren<AuthContextProps>) => {
  const token = getToken();

  useEffect(() => {
    if (isAuthenticated()) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      token && login(token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      logout();
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
    }),
    [token],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
