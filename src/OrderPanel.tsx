import OrderTextBox from "./components/OrderTextbox";
import { OrderTransaction } from "./components/OrderTransaction";

export default function OrderPanel() {
  return (
    <>
      <div className="ml-6 bg-white mt-6 mr-8">
        <OrderTransaction />
      </div>
    </>
  );
}
