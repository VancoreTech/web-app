import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Step7() {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate("/pricing");
  };

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
        <Check className="w-8 h-8 text-white" />
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Congratulations!</h1>
      <p className="text-gray-600 mb-8">You're in! Your registration was completed successfully.</p>

      <button
        onClick={handleProceed}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium"
      >
        Proceed
      </button>
    </div>
  );
}
