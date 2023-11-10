import React from "react";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { ComponentPop } from "./component/ComponentPop";
import { Dashboard } from "./pages/Dashboard";
import { NavigationContainer } from '@react-navigation/native';
import { Home } from "./pages/Home";
import { TodoList } from "./pages/TodoList";
import { Setting } from "./pages/Setting";

const App = () => {
  return (
    // <Login />
   
    <NavigationContainer>
     {/* <Signup /> */}
     {/* <Home></Home> */}
     {/* <Setting /> */}
     <Home />
     {/* <TodoList /> */}
    </NavigationContainer>
    // <ComponentPop />
  );
};


export default App;
