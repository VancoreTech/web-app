import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import arrows from "../assets/arrows.svg";
import ConfirmModal from "../Modal/ConfirmModal";
import SuccessModal from "../Modal/SuccessModal";

function CreateCampaign() {
  const [formData, setFormData] = useState({
    campaignTitle: "",
    channel: "",
    audience: "",
    startDate: "",
    endDate: "",
  });

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleConfirmCampaign = () => {
    console.log("Campaign created successfully", {
      ...formData,
    });
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleSuccessDone = () => {
    setShowSuccessModal(false);
    navigate("/dashboard/campaigns", {
      state: {
        productData: formData,
      },
    });
  };

  return (
    <div>
      <Navbar />

      <div className="mx-auto p-6">
        <div className="flex items-center gap-4">
          <Link
            to="/dashboard/campaigns"
            className="flex items-center mb-4 gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Create campaign
        </h2>

        <form className="w-full rounded-xl mx-auto p-6 mt-8 bg-white">
          <h3 className="text-[#0a6dee] text-xl flex items-center gap-2 mb-6">
            <img src={arrows} alt="" />
            Campaign Details
          </h3>

          <div className="w-full flex flex-col">
            <label htmlFor="title">Campaign title</label>

            <input
              type="text"
              placeholder="Enter campaign title"
              value={formData.campaignTitle}
              className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4] "
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  campaignTitle: e.target.value,
                }))
              }
            />
          </div>
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="title">Channel</label>

            <div className="relative inline-block w-full">
              <select
                name="channel"
                id="channel"
                value={formData.channel}
                className="w-full bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, channel: e.target.value }))
                }
              >
                <option value="">Select channel</option>
                <option value="">Channel 1</option>
                <option value="">Channel 2</option>
                <option value="">Channel 3</option>
              </select>

              <ChevronDown className="absolute inset-y-0 top-5 right-4 pointer-events-none" />
            </div>
          </div>
          <div className="w-full flex flex-col mt-5">
            <label htmlFor="title">Choose audience</label>

            <div className="relative inline-block w-full">
              <select
                name="channel"
                id="channel"
                value={formData.audience}
                className="w-full bg-[#ECEFF3]
                  px-4 py-3 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, audience: e.target.value }))
                }
              >
                <option value="">Select preferred audience</option>
                <option value="">Audience 1</option>
                <option value="">Audience 2</option>
                <option value="">Audience 3</option>
              </select>

              <ChevronDown className="absolute inset-y-0 top-5 right-4 pointer-events-none" />
            </div>
          </div>

          <div className="flex mt-5 justify-between">
            <div className="flex flex-col w-6/12 mr-3 gap-0">
              <label htmlFor="start-date">Start date</label>

              <input
                type="date"
                name="start-date"
                value={formData.startDate}
                id="start-date"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4] "
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    startDate: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex flex-col w-6/12 ml-4">
              <label htmlFor="end-date">End Date</label>

              <input
                type="date"
                name="end-date"
                value={formData.endDate}
                id="end-date"
                className="bg-[#ECEFF3]
                  px-4 py-2.5 pr-4 appearance-none border-solid border-2
                  border-[#EBEBEB] rounded-lg mt-1 placeholder:text-[#B5B4B4]"
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, endDate: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end pt-10 pb-2  gap-5">
            <button
              className="bg-white text-black px-12 py-2 text-sm font-semibold rounded-lg border border-[#ECEFF3]"
              //   onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setShowConfirmModal(!showConfirmModal)}
              //   disabled={isDisabled}
              className="bg-[#0A6DEE] text-white px-12 py-2 text-sm font-semibold rounded-lg"
            >
              Proceed
            </button>
          </div>
        </form>

        <ConfirmModal
          isOpen={showConfirmModal}
          title="Confirm action"
          message="Are you sure you want to create this campaign?"
          onConfirm={handleConfirmCampaign}
          //   onCancel={handleCancelConfirm}
        />

        <SuccessModal
          isOpen={showSuccessModal}
          title="Success"
          message="You have successfully created this campaign."
          onDone={handleSuccessDone}
        />
      </div>
    </div>
  );
}

export default CreateCampaign;
