import { useContext, useState } from "react";
import { AuthContext, AuthContextDispatcher } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState("");

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
