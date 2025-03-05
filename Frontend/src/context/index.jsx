import { createContext, useState } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("randomUser");

  return (
    <>
      <authContext.Provider value={{ user }}>{children}</authContext.Provider>
    </>
  );
};

export default AuthProvider;
