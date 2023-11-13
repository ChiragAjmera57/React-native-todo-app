import React, { useEffect, useState } from "react";
import { createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from "react-native";
import { Initial } from "../component/Initial";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const isLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value) {
        setState((prevState) => ({
          ...prevState,
          token: value,
        }));
      }
    } catch (e) {
      console.log(e, "error while AsyncStorage");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    isLogin();
  }, []);

  const [store, setState] = useState({
    token: null,
    setToken: setToken,
    logOut:logOut,
    singleTodo:{},
    setSingleTodo:setSingleTodo,
  });

   function setSingleTodo(data) {
    setState((prevState) => ({
      ...prevState,
      singleTodo: data,
    }));
  }

  async function setToken(newToken) {
    setState((prevState) => ({
      ...prevState,
      token: newToken,
    }));
    try {
      await AsyncStorage.setItem('token', newToken);
    } catch (e) {
      console.log(e, "error while AsyncStorage");
    }
  }
  async function logOut() {
    setState((prevState) => ({
      ...prevState,
      token: null,
    }));
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      console.log(e, "error while AsyncStorage");
    }
  }

  if (loading) {
    return <Initial />
  }

  return (
    <AuthContext.Provider value={{ store }}>
      {children}
    </AuthContext.Provider>
  );
};
