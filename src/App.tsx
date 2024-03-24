import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import { Sidebar } from "./Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import { Payout } from "./components/payout";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="flex flex-col flex-grow bg-[#F2F2F2]">
          <Header />
          <Overview />
          <Payout />
        </div>
      </div>
    </>
  );
}

export default App;
