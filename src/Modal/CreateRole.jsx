import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import rolekey from "../assets/rolekey.svg";
import SuccessModal from "./SuccessModal";
import { useNavigate } from "react-router-dom";

function CreateRole({
  // showCreateRole,
  setShowCreateRole,
  showSuccessModal,
  setShowSuccessModal,
}) {
  const [formData, setFormData] = useState({
    roleName: "",
    lastName: "",
    description: "",
    permissions: [],
  });

  const [showDetails, setShowDetails] = useState(true);
  const [showPermissions, setShowPermissions] = useState(false);

  const allPermissions = ["View dashboard", "Edit users", "Manage settings"];
  const navigate = useNavigate();

  const togglePermission = (perm) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm],
    }));
  };

  const selectAllPermissions = () => {
    setFormData((prev) => ({
      ...prev,
      permissions: allPermissions,
    }));
  };

  const deselectAllPermissions = () => {
    setFormData((prev) => ({
      ...prev,
      permissions: [],
    }));
  };

  const isFormValid =
    formData.roleName && formData.lastName && formData.description;

  const handleCreate = (e) => {
    e.preventDefault();
    setShowSuccessModal(true);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    setShowCreateRole(false);
    navigate("/dashboard/roles", {
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

      <h3 className="text-[#101828] font-semibold text-2xl py-4">
        Create a role
      </h3>

      <div>
        <div
          onClick={() => setShowDetails(!showDetails)}
          className="flex justify-between bg-[#141414] rounded-xl py-2.5 px-5 text-white mb-4 cursor-pointer"
        >
          <p>Details</p>
          {showDetails ? <ChevronUp /> : <ChevronDown />}
        </div>

        {showDetails && (
          <div className="mb-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role name
              </label>
              <input
                type="text"
                value={formData.roleName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    roleName: e.target.value,
                  }))
                }
                placeholder="e.g. Finance"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
              />
            </div>

            <div>
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
                placeholder="e.g. Adeniyi"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                placeholder="Type a description"
                className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#B5B4B4]"
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <div
          onClick={() => setShowPermissions(!showPermissions)}
          className="flex justify-between bg-[#141414] rounded-xl py-2.5 px-5 text-white mb-4 cursor-pointer"
        >
          <p>Permissions</p>
          {showPermissions ? <ChevronUp /> : <ChevronDown />}
        </div>

        {showPermissions && (
          <div className="mb-4 space-y-3">
            <div className="flex items-center gap-4 mb-2">
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  onChange={selectAllPermissions}
                  checked={
                    formData.permissions.length === allPermissions.length
                  }
                />
                Select all
              </label>

              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  onChange={deselectAllPermissions}
                  checked={formData.permissions.length === 0}
                />
                Deselect all
              </label>
            </div>

            {allPermissions.map((perm) => (
              <label
                key={perm}
                className="flex items-center gap-2 text-sm text-gray-800"
              >
                <input
                  type="checkbox"
                  checked={formData.permissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                />
                {perm}
              </label>
            ))}
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
        message="You have successfully created a new role."
        onDone={handleSuccessDone}
      />
    </div>
  );
}

export default CreateRole;
