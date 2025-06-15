import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import rolekey from "../assets/rolekey.svg";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";

function CreateUser({
  //   showCreateRole,
  setShowCreateRole,
  showSuccessModal,
  setShowSuccessModal,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: [],
  });

  const [showDetails, setShowDetails] = useState(true);

  const allRoles = ["Admin", "Staff", "Manager"];
  const navigate = useNavigate();

  const togglePermission = (perm) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  const isFormValid =
    formData.firstName && formData.lastName && formData.email && formData.role;

  const handleCreate = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    setShowCreateRole(false);
    navigate("/dashboard/users", {
      state: {
        roleData: formData,
      },
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-[600px] p-6">
      <div className="flex justify-between ">
        <img src={rolekey} alt="role icon" />
        <X
          className="text-[#667085] cursor-pointer"
          onClick={() => setShowCreateRole(false)}
        />
      </div>

      <h3 className="text-[#101828] font-semibold text-2xl py-4">Add user</h3>

      <div>
        <div
          onClick={() => setShowDetails(!showDetails)}
          className="flex justify-between bg-[#141414] rounded-xl py-2.5 px-5 text-white mb-4 cursor-pointer"
        >
          <p>User details</p>
          {showDetails ? <ChevronUp /> : <ChevronDown />}
        </div>

        {showDetails && (
          <div>
            <div className="flex mt-5 justify-between">
              <div className="flex flex-col w-6/12 mr-3 gap-0 mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }))
                  }
                  placeholder="Enter first name"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
                />
              </div>

              <div className="flex flex-col w-6/12 mr-3 gap-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }))
                  }
                  placeholder="Enter last name"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                placeholder="Enter email"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                className="w-full bg-[#f6f8fa] px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
                name="role"
                id="role"
              >
                {allRoles.map((role, index) => (
                  <option key={index} value={formData.role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-4 mt-6">
        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700">
          Cancel
        </button>
        <button
          type
          className={`px-4 py-2 rounded-lg text-white ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!isFormValid}
          onClick={handleCreate}
        >
          Create
        </button>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        title="Success"
        message="You have successfully created a new user."
        onDone={handleSuccessDone}
      />
    </div>
  );
}

export default CreateUser;
