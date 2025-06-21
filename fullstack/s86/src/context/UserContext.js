import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
    email: "",
  });

  const unsetUser = () => {
    setUser({
      id: null,
      isAdmin: null,
      email: "",
    });
    setToken(null);
    localStorage.clear();
  };

  const fetchUser = async () => {
    if (!token) return unsetUser();

    try {
      const res = await axios.get(`https://movieapp-api-lms1.onrender.com/users/details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser({
        id: res.data.user_id,
        isAdmin: res.data.user.isAdmin,
        email: res.data.user.email,
      });
    } catch (error) {
      console.error("Failed to fetch user:", error);
      unsetUser();
    }
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      fetchUser();
    } else {
      localStorage.removeItem("token");
      unsetUser();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        unsetUser,
        token,
        setToken,
        fetchUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
