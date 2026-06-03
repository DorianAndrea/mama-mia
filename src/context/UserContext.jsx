import { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const login = async (email, password) => {
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    setToken(data.token);
    setEmail(data.email);
  };

  const register = async (email, password) => {
    const response = await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    setToken(data.token);
    setEmail(data.email);
  };

  const logout = () => {
    setToken("");
    setEmail("");
  };
  const getProfile = async () => {
    const response = await fetch("http://localhost:5001/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    setEmail(data.email);
  };
  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
