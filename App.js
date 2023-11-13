import React from "react";
import { Main } from "./main/Main";
import { AuthProvider } from "./Context/AuthContext";


const App = () => {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
