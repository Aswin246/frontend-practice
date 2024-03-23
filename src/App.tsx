import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { Sidebar } from "./Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="flex flex-col">
          <Header />
          <Overview />
        </div>
      </div>
    </>
  );
}

export default App;
