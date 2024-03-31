import "./App.css";
import { Sidebar } from "./Sidebar";
import Header from "./components/Header";
import Overview from "./components/Overview";
import { Payout } from "./components/payout";
import { Transactions } from "./components/Transactions";
import OrderPanel from "./OrderPanel";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="flex flex-col flex-grow bg-[#F2F2F2]">
          <Header />
          <Overview />
          <Payout />
          <Transactions />
          <OrderPanel />
        </div>
      </div>
    </>
  );
}

export default App;
