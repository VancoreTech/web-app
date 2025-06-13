import { useState } from "react";
import { X, Info, MessageCircle } from "lucide-react";
import { InstagramIcon1, WhatsappIcon } from "../Pages/ConnectedApps";

// Button Component
const Button = ({
  children,
  variant = "default",
  disabled,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    outline:
      "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Input Component
const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
};

// Label Component
const Label = ({ children, className = "", ...props }) => {
  return (
    <label
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
};

const ConnectAppModal = ({ isOpen, onClose, onConnect, app }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    apiKey: "",
  });

  if (!isOpen || !app) return null;

  const handleConnect = () => {
    // Simulate API call delay
    setTimeout(() => {
      onConnect();
      setCredentials({ username: "", apiKey: "" });
    }, 500);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold text-gray-900">
              Connect {app.name}
            </h3>
            <p className="text-xs text-gray-600">
              Connect your {app.name} account to your business account
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 mt-[-15px]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <Label
              htmlFor="username"
              className="text-sm font-medium text-gray-700"
            >
              {app.id === "instagram"
                ? "Instagram handle"
                : "Business Phone Number"}
            </Label>
            <Input
              id="username"
              type="text"
              value={credentials.username}
              onChange={(e) =>
                setCredentials((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
              placeholder={
                app.id === "instagram"
                  ? "Enter your instagram handle"
                  : "+1234567890"
              }
              className="mt-1 pb-20 pt-4 !bg-[#F6F8FA] border border-[#ECEFF3] rounded-lg"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button variant="outline" onClick={onClose} className="flex-[1]">
            Cancel
          </Button>
          <Button
            onClick={handleConnect}
            disabled={!credentials.username}
            className="flex-[2]"
          >
            Connect {app.name}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectAppModal;
