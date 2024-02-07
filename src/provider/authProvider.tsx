import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';

import { getToken, login, logout } from '../service';

interface AuthContextProps {
  token?: string | null;
  setToken?: (newToken: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({});

const AuthProvider = ({ children }: PropsWithChildren<AuthContextProps>) => {
  const [token, setToken_] = useState(getToken());

  const setToken = (newToken: string) => {
    setToken_(newToken);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      login(token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      logout();
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
