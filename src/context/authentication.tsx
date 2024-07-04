import React, {
  Context,
  FunctionComponent,
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext: Context<any> = createContext(null);

const fakeAuth = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<string> => {
  return new Promise((rs) => {
    setTimeout(() => {
      rs(`${username}-${password}`);
    });
  });
};

const AuthProvider: FunctionComponent<{ children: any }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const token = await fakeAuth({ username, password });
      setToken(token);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  const value = {
    token,
    logout: handleLogout,
    login: handleLogin,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
