"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AuthContextType, User } from "./types";
import { handleApiError } from "@/lib/api/utils";
// import { login as authLogin, getUser } from "@/lib/api/services/auth"; // TODO: Uncomment when real API is ready

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token && token !== "undefined") {
      fetchUser(token).catch(() => logout());
    } else {
      console.warn("No valid token found in localStorage");
      setIsLoading(false);
    }
  }, []);

  // ✅ TODO: Replace this with real `getUser(token)` API call
  const fetchUser = async (token: string) => {
    try {
      if (token === "dummy-token") {
        setUser({
          id: "1",
          name: "Test User",
          email: "test@example.com",
          profilePicture: "",
          status: "authenticated",
          token,
        });
      } else {
        throw new Error("Invalid token");
      }
    } catch (error) {
      console.error("Fetch user error:", handleApiError(error).message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ TODO: Replace this dummy login with real `authLogin()` API call
  const login = async (credentials: { email: string; password: string }) => {
    try {
      const { email, password } = credentials;

      if (email === "test@example.com" && password === "test123") {
        const dummyToken = "dummy-token";
        localStorage.setItem("authToken", dummyToken);
        setUser({
          id: "1",
          name: "Test User",
          email: "test@example.com",
          profilePicture: "",
          status: "authenticated",
          token: dummyToken,
        });
        return true;
      } else {
        throw new Error("Invalid credentials");
      }

      // ✅ When backend is ready:
      // const { data, error } = await authLogin(credentials);
      // if (error) throw new Error(error);
      // localStorage.setItem("authToken", data.token);
      // await fetchUser(data.token);
      // return true;

    } catch (error) {
      console.error("Login error:", handleApiError(error).message);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
