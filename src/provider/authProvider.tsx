import React, {
  PropsWithChildren,
  createContext,
  // useContext,
  useEffect,
  useMemo,
  // useState,
} from 'react';
import axios from 'axios';

import { getToken, isAuthenticated, login, logout } from '../service';

interface AuthContextProps {
  token?: string | null;
  //setToken?: (newToken: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({});

const AuthProvider = ({ children }: PropsWithChildren<AuthContextProps>) => {
  // const [token, setToken] = useState(getToken());

  // const setNewToken = (newToken: string) => {
  //   setToken(newToken);
  // };

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

  // const contextValue = useMemo(
  //   () => ({
  //     token,
  //     setNewToken,
  //   }),
  //   [token],
  // );

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

// TODO decidir se uso essa abordagem ou auth service utils
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

export default AuthProvider;
