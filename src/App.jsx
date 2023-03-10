import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Background from "./components/background/Background";
import Characters from "./components/characters/Characters";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Characters />
      <Background />
    </div>
  );
}

export default App;
