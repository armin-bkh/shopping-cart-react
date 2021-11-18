import { useContext, useState, useEffect } from "react";
import { AuthContext, AuthContextDispatcher } from "./AuthContext";

const LOCAL_STORAGE_AUTH = "AuthData";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(()=> {
    setAuth(JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH)));
  }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_AUTH, JSON.stringify(auth));
  }, [auth])

  return (
    <AuthContext.Provider value={auth}>
      <AuthContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthContextDispatcher.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispatcher);
