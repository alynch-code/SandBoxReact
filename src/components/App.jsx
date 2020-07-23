import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const App = () => {
  if (isLoggedIn) {
    return <h1>Hello</h1>;
  } else return <Login />;
};

export default App;
