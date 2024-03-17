import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="bg-white"></div>
    </>
  );
}

export default App;
