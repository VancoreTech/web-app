import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Check, LucideUser2, Users2 } from "lucide-react";
import important from "../assets/important.svg";
import SuccessModal from "../Modal/SuccessModal";
import ConnectAppModal from "../Modal/ConnectAppModal";
import { Link } from "react-router-dom";

const Switch = ({ checked, onCheckedChange, disabled }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={`
        relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
        transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${checked ? "bg-blue-600" : "bg-gray-200"}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <span
        className={`
          pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 
          transition duration-200 ease-in-out
          ${checked ? "translate-x-5" : "translate-x-0"}
        `}
      />
    </button>
  );
};

function PaymentsMethods() {
  const [payer, setPayer] = useState("me");

  const [methods, setMethods] = useState([
    {
      id: "paystack",
      name: "Paystack",
      // icon:
      description: "Receive naira payments online with Paystack",
      isConnected: false,
      availability: "Not connected",
    },
    {
      id: "stripe",
      name: "Stripe",
      description: "Receive naira payments online with Stripe",
      isConnected: false,
      availability: "Coming soon",
    },
  ]);

  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  function handleConnect(method) {
    setSelectedMethod(method);
    setIsConnectModalOpen(true);
  }

  const handleConnectConfirm = () => {
    if (selectedMethod) {
      setMethods((prev) =>
        prev.map((app) =>
          app.id === selectedMethod.id ? { ...app, isConnected: true } : app
        )
      );

      setIsConnectModalOpen(false);
      setIsSuccessModalOpen(true);
    }
  };

  const handleToggleConnection = (id) => {
    setMethods((prev) =>
      prev.map((method) =>
        method.id === id
          ? { ...method, isConnected: !method.isConnected }
          : method
      )
    );
  };

  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    setSelectedMethod(null);
  };
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-[#242424] text-2xl font-semibold mb-2">
          Payment Methods
        </h2>
        <p className="text-[#666667] text-sm">
          Set up suitable payment methods for your business
        </p>

        <div className="mt-9">
          <h3 className="font-semibold text-lg text-[#444444]">
            Transaction charges configuration
          </h3>
          <p className="text-sm text-[#666667]">
            Who pays for the transaction fees? This affects all of the active
            payments methods below.
          </p>
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={() => setPayer("me")}
              className={`flex items-center pr-4 pl-2 py-2 rounded-lg border transition-colors ${
                payer === "me"
                  ? "bg-blue-50 border-blue-300 text-blue-700"
                  : "bg-gray-50 border-gray-300 text-gray-600"
              }`}
            >
              <LucideUser2 className="h-5 w-5 mb-[0.15rem] mr-1" />
              Myself
              <div
                className={`w-4 h-4 rounded-full border-2 ml-10 ${
                  payer === "me"
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300"
                }`}
              >
                {payer === "me" && (
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                )}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setPayer("users")}
              className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                payer === "users"
                  ? "bg-blue-50 border-blue-300 text-blue-700"
                  : "bg-gray-50 border-gray-300 text-gray-600"
              }`}
            >
              <Users2 className="w-4 h-4 mr-2" />
              My customers
              <div
                className={`w-4 h-4 rounded-full border-2 ml-2 ${
                  payer === "users"
                    ? "border-blue-600 bg-blue-600"
                    : "border-gray-300"
                }`}
              >
                {payer === "users" && (
                  <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                )}
              </div>
            </button>
          </div>
          <p className="flex mt-2 items-center text-[#666667] text-sm">
            <img src={important} alt="" className="w-4 mr-1" />
            {payer === "me" ? "You" : "Your customers"} will pay the transaction
            charges.
          </p>
          <div className="grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center text-white`}
                  >
                    {/* {getAppIcon(app.id)} */}
                  </div>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
                <div className="flex items-center justify-between border-t border-[#EBEBEB] pt-4 ">
                  {!method.isConnected ? (
                    <div className="flex items-center border border-[#EBEBEB] text-gray-600 rounded-md px-2 hover:bg-blue-700 hover:text-white transition-colors">
                      <Link className="w-4 h-4 " />
                      <button
                        onClick={() => handleConnect(method)}
                        className="py-2 px-2 text-xs font-medium"
                      >
                        Connect
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-green-600">
                      <Check className="w-4 h-4" />
                      <span className="text-sm font-medium">Connected</span>
                    </div>
                  )}
                  <Switch
                    checked={method.isConnected}
                    onCheckedChange={() => handleToggleConnection(method.id)}
                    disabled={!method.isConnected}
                  />
                </div>
              </div>
            ))}
          </div>
          <ConnectAppModal
            isOpen={isConnectModalOpen}
            onClose={() => setIsConnectModalOpen(false)}
            onConnect={handleConnectConfirm}
            app={selectedMethod}
          />

          {/* Success Modal */}
          <SuccessModal
            isOpen={isSuccessModalOpen}
            title="Success!"
            message={`${selectedMethod?.name} has been successfully connected to your account.`}
            onDone={handleSuccessClose}
            buttonText="Done"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentsMethods;
