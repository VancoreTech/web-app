import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Banknote, Copy, History, Share2, Volume2 } from "lucide-react";
import Navbar from "../components/Navbar";
import { referralHistoryData } from "../data/data";

const TotalEarned = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1606_11688)">
        <path
          d="M38.9229 47.401H9.44375C4.55905 47.401 0.599998 43.442 0.599998 38.5573V9.07812C0.599998 4.19343 4.55905 0.234375 9.44375 0.234375H38.9229C43.8076 0.234375 47.7667 4.19343 47.7667 9.07812V38.5573C47.7667 43.442 43.8076 47.401 38.9229 47.401Z"
          fill="#F6F8FA"
        />
        <path
          d="M24.1833 19.3969C23.3088 19.3969 22.4538 19.6562 21.7267 20.1421C20.9995 20.628 20.4327 21.3186 20.0981 22.1266C19.7634 22.9346 19.6758 23.8237 19.8464 24.6814C20.017 25.5392 20.4382 26.3271 21.0566 26.9455C21.675 27.5639 22.4629 27.985 23.3207 28.1557C24.1784 28.3263 25.0675 28.2387 25.8755 27.904C26.6835 27.5693 27.3741 27.0026 27.86 26.2754C28.3459 25.5482 28.6052 24.6933 28.6052 23.8187C28.6052 22.646 28.1393 21.5213 27.3101 20.692C26.4808 19.8627 25.3561 19.3969 24.1833 19.3969ZM24.1833 26.4719C23.6586 26.4719 23.1456 26.3163 22.7093 26.0247C22.273 25.7332 21.933 25.3189 21.7322 24.8341C21.5314 24.3493 21.4788 23.8158 21.5812 23.3012C21.6836 22.7865 21.9362 22.3138 22.3073 21.9427C22.6783 21.5717 23.1511 21.319 23.6657 21.2166C24.1804 21.1142 24.7138 21.1668 25.1986 21.3676C25.6834 21.5684 26.0978 21.9084 26.3893 22.3448C26.6809 22.7811 26.8365 23.294 26.8365 23.8187C26.8365 24.5224 26.5569 25.1972 26.0594 25.6948C25.5618 26.1924 24.887 26.4719 24.1833 26.4719ZM36.5646 15.8594H11.8021C11.5675 15.8594 11.3426 15.9526 11.1767 16.1184C11.0109 16.2843 10.9177 16.5092 10.9177 16.7437V30.8937C10.9177 31.1283 11.0109 31.3532 11.1767 31.5191C11.3426 31.6849 11.5675 31.7781 11.8021 31.7781H36.5646C36.7991 31.7781 37.0241 31.6849 37.1899 31.5191C37.3558 31.3532 37.449 31.1283 37.449 30.8937V16.7437C37.449 16.5092 37.3558 16.2843 37.1899 16.1184C37.0241 15.9526 36.7991 15.8594 36.5646 15.8594ZM31.4407 30.0094H16.9259C16.629 29.0052 16.0856 28.0912 15.3451 27.3507C14.6046 26.6103 13.6907 26.0668 12.6865 25.7699V21.8676C13.6907 21.5707 14.6046 21.0272 15.3451 20.2868C16.0856 19.5463 16.629 18.6323 16.9259 17.6281H31.4407C31.7377 18.6323 32.2811 19.5463 33.0216 20.2868C33.762 21.0272 34.676 21.5707 35.6802 21.8676V25.7699C34.676 26.0668 33.762 26.6103 33.0216 27.3507C32.2811 28.0912 31.7377 29.0052 31.4407 30.0094ZM35.6802 19.9905C34.6194 19.5344 33.7739 18.6889 33.3178 17.6281H35.6802V19.9905ZM15.0488 17.6281C14.5927 18.6889 13.7472 19.5344 12.6865 19.9905V17.6281H15.0488ZM12.6865 27.647C13.7472 28.1031 14.5927 28.9486 15.0488 30.0094H12.6865V27.647ZM33.3178 30.0094C33.7739 28.9486 34.6194 28.1031 35.6802 27.647V30.0094H33.3178Z"
          fill="#666D80"
        />
      </g>
      <defs>
        <clipPath id="clip0_1606_11688">
          <rect
            width="47.1667"
            height="47.1667"
            fill="white"
            transform="translate(0.599998 0.234375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const TotalInvitees = () => {
  return (
    <svg
      width="45"
      height="45"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1606_11698)">
        <path
          d="M38.9062 47.401H9.42706C4.54237 47.401 0.583313 43.442 0.583313 38.5573V9.07812C0.583313 4.19343 4.54237 0.234375 9.42706 0.234375H38.9062C43.7909 0.234375 47.75 4.19343 47.75 9.07812V38.5573C47.75 43.442 43.7909 47.401 38.9062 47.401Z"
          fill="#F6F8FA"
        />
        <path
          d="M34.3967 19.2473L14.9338 13.2778C14.6704 13.2009 14.3927 13.1865 14.1227 13.2355C13.8527 13.2845 13.5978 13.3956 13.3782 13.5601C13.1586 13.7246 12.9802 13.938 12.8573 14.1833C12.7343 14.4286 12.6701 14.6992 12.6698 14.9736V30.8923C12.6698 31.3614 12.8561 31.8113 13.1879 32.143C13.5196 32.4747 13.9694 32.6611 14.4385 32.6611C14.6077 32.6611 14.776 32.6369 14.9382 32.5892L24.1667 29.757V30.8923C24.1667 31.3614 24.353 31.8113 24.6847 32.143C25.0164 32.4747 25.4663 32.6611 25.9354 32.6611H29.4729C29.942 32.6611 30.3919 32.4747 30.7236 32.143C31.0553 31.8113 31.2417 31.3614 31.2417 30.8923V27.587L34.3967 26.6197C34.7618 26.51 35.0821 26.2858 35.3102 25.9803C35.5383 25.6748 35.6621 25.3041 35.6635 24.9228V20.9431C35.6619 20.562 35.5379 20.1915 35.3098 19.8862C35.0818 19.5809 34.7617 19.357 34.3967 19.2473ZM24.1667 27.9076L14.4385 30.8923V14.9736L24.1667 17.9583V27.9076ZM29.4729 30.8923H25.9354V29.2142L29.4729 28.1286V30.8923ZM33.8948 24.9228H33.8826L25.9354 27.3637V18.5022L33.8826 20.9343H33.8948V24.9139V24.9228Z"
          fill="#666D80"
        />
      </g>
      <defs>
        <clipPath id="clip0_1606_11698">
          <rect
            width="47.1667"
            height="47.1667"
            fill="white"
            transform="translate(0.583313 0.234375)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const ReferralHistory = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.14271 12.1883C8.14271 11.9537 8.23588 11.7288 8.40173 11.5629C8.56759 11.3971 8.79253 11.3039 9.02708 11.3039H19.6396C19.8741 11.3039 20.0991 11.3971 20.2649 11.5629C20.4308 11.7288 20.524 11.9537 20.524 12.1883C20.524 12.4228 20.4308 12.6478 20.2649 12.8136C20.0991 12.9795 19.8741 13.0727 19.6396 13.0727H9.02708C8.79253 13.0727 8.56759 12.9795 8.40173 12.8136C8.23588 12.6478 8.14271 12.4228 8.14271 12.1883ZM9.02708 16.6102H19.6396C19.8741 16.6102 20.0991 16.517 20.2649 16.3511C20.4308 16.1853 20.524 15.9603 20.524 15.7258C20.524 15.4912 20.4308 15.2663 20.2649 15.1004C20.0991 14.9346 19.8741 14.8414 19.6396 14.8414H9.02708C8.79253 14.8414 8.56759 14.9346 8.40173 15.1004C8.23588 15.2663 8.14271 15.4912 8.14271 15.7258C8.14271 15.9603 8.23588 16.1853 8.40173 16.3511C8.56759 16.517 8.79253 16.6102 9.02708 16.6102ZM25.8302 6.88203V23.6852C25.8301 23.8359 25.7915 23.9841 25.7181 24.1157C25.6446 24.2473 25.5387 24.358 25.4105 24.4372C25.2822 24.5164 25.1358 24.5615 24.9853 24.5682C24.8347 24.5749 24.6849 24.543 24.5501 24.4756L21.4083 22.9047L18.2666 24.4756C18.1437 24.537 18.0082 24.5691 17.8708 24.5691C17.7334 24.5691 17.5979 24.537 17.4751 24.4756L14.3333 22.9047L11.1916 24.4756C11.0687 24.537 10.9332 24.5691 10.7958 24.5691C10.6584 24.5691 10.5229 24.537 10.4001 24.4756L7.25833 22.9047L4.11659 24.4756C3.98179 24.543 3.83199 24.5749 3.68141 24.5682C3.53083 24.5615 3.38446 24.5164 3.25621 24.4372C3.12796 24.358 3.02207 24.2473 2.94861 24.1157C2.87514 23.9841 2.83654 23.8359 2.83646 23.6852V6.88203C2.83646 6.41293 3.02281 5.96304 3.35451 5.63134C3.68622 5.29963 4.1361 5.11328 4.60521 5.11328H24.0615C24.5306 5.11328 24.9804 5.29963 25.3122 5.63134C25.6439 5.96304 25.8302 6.41293 25.8302 6.88203ZM24.0615 6.88203H4.60521V22.2547L6.86257 21.1249C6.98544 21.0634 7.12094 21.0314 7.25833 21.0314C7.39572 21.0314 7.53122 21.0634 7.65409 21.1249L10.7958 22.6969L13.9376 21.1249C14.0604 21.0634 14.1959 21.0314 14.3333 21.0314C14.4707 21.0314 14.6062 21.0634 14.7291 21.1249L17.8708 22.6969L21.0126 21.1249C21.1354 21.0634 21.2709 21.0314 21.4083 21.0314C21.5457 21.0314 21.6812 21.0634 21.8041 21.1249L24.0615 22.2547V6.88203Z"
        fill="#BA80F6"
      />
    </svg>
  );
};

const Step1 = () => {
  return (
    <svg
      width="45"
      height="46"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8163 34.7424C13.7673 35.7914 11.9344 35.7932 10.8854 34.7405C10.3609 34.2179 10.0718 33.5192 10.0718 32.776C10.0718 32.0328 10.3609 31.336 10.8854 30.8096L19.0456 22.6494C17.9391 22.1212 16.7326 21.8154 15.4705 21.8154C13.2447 21.8154 11.1485 22.6828 9.57322 24.2581L6.95262 26.8787C5.37544 28.454 4.50993 30.5483 4.50993 32.776C4.50993 35.0037 5.37914 37.0998 6.95076 38.6733C8.52609 40.2486 10.6204 41.116 12.8499 41.116C15.0757 41.116 17.1719 40.2486 18.7472 38.6733L21.3678 36.0527C22.945 34.4774 23.8105 32.3831 23.8105 30.1554C23.8105 28.8933 23.5028 27.6868 22.9765 26.5803L14.8163 34.7424Z"
        fill="url(#paint0_linear_1707_14410)"
      />
      <path
        d="M38.976 6.65069C37.4007 5.07536 35.3064 4.20801 33.0768 4.20801C30.851 4.20801 28.7549 5.07536 27.1796 6.65069L24.559 9.2713C22.9818 10.8466 22.1163 12.9409 22.1163 15.1686C22.1163 16.4307 22.4239 17.6372 22.9503 18.7436L27.0202 14.6737C27.2778 14.4161 31.1105 10.5834 31.1105 10.5834C31.635 10.059 32.3337 9.76984 33.0768 9.76984C33.82 9.76984 34.5169 10.059 35.0432 10.5853C35.5677 11.1079 35.8568 11.8066 35.8568 12.5498C35.8568 13.293 35.5677 13.9899 35.0432 14.5162C35.0432 14.5162 31.2198 18.3396 30.9529 18.6065L26.883 22.6764C27.9895 23.2046 29.196 23.5104 30.4581 23.5104C32.6839 23.5104 34.7801 22.643 36.3554 21.0677L38.976 18.4471C40.5532 16.8718 41.4187 14.7775 41.4187 12.5498C41.4168 10.3203 40.5476 8.22417 38.976 6.65069Z"
        fill="url(#paint1_linear_1707_14410)"
      />
      <g opacity="0.35">
        <path
          d="M16.0134 32.3907C15.3017 32.3907 14.5901 32.1202 14.047 31.5771C12.961 30.4911 12.961 28.7323 14.047 27.6462L27.0203 14.6729C28.1064 13.5869 29.8652 13.5869 30.9512 14.6729C32.0373 15.759 32.0373 17.5178 30.9512 18.6038L17.9779 31.5771C17.4368 32.1202 16.7251 32.3907 16.0134 32.3907Z"
          fill="url(#paint2_linear_1707_14410)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1707_14410"
          x1="14.1602"
          y1="21.8154"
          x2="14.1602"
          y2="41.116"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B90AEE" />
          <stop offset="1" stopColor="#6A0688" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1707_14410"
          x1="31.7675"
          y1="4.20801"
          x2="31.7675"
          y2="23.5104"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B90AEE" />
          <stop offset="1" stopColor="#6A0688" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1707_14410"
          x1="22.4991"
          y1="13.8584"
          x2="22.4991"
          y2="32.3907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B90AEE" />
          <stop offset="1" stopColor="#6A0688" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Step2 = () => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.35"
        d="M30.58 43.5105H15.7534C12.6825 43.5105 10.1935 41.0215 10.1935 37.9505V8.29728C10.1935 5.22632 12.6825 2.7373 15.7534 2.7373H30.58C33.651 2.7373 36.14 5.22632 36.14 8.29728V37.9505C36.14 41.0215 33.651 43.5105 30.58 43.5105Z"
        fill="url(#paint0_linear_1707_14419)"
      />
      <path
        d="M26.8733 36.0986C26.5286 36.0986 19.8047 36.0986 19.46 36.0986C18.437 36.0986 17.6067 36.9289 17.6067 37.952C17.6067 38.975 18.437 39.8053 19.46 39.8053C19.8047 39.8053 26.5286 39.8053 26.8733 39.8053C27.8964 39.8053 28.7266 38.975 28.7266 37.952C28.7266 36.9289 27.8964 36.0986 26.8733 36.0986Z"
        fill="url(#paint1_linear_1707_14419)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1707_14419"
          x1="23.1667"
          y1="2.7373"
          x2="23.1667"
          y2="43.5105"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B90AEE" />
          <stop offset="1" stopColor="#6A0688" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1707_14419"
          x1="23.1667"
          y1="36.0986"
          x2="23.1667"
          y2="39.8053"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B90AEE" />
          <stop offset="1" stopColor="#6A0688" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Step3 = () => {
  return (
    <svg
      width="132"
      height="23"
      viewBox="0 0 132 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.46667 0.846725C34.4792 25.0335 86.025 33.7185 130.621 0.84657"
        stroke="url(#paint0_linear_1707_14437)"
        strokeWidth="1.15833"
        strokeLinecap="round"
        strokeDasharray="3.47 3.47"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1707_14437"
          x1="13.6292"
          y1="15.9094"
          x2="129.463"
          y2="15.9094"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1C2C48" stopOpacity="0" />
          <stop offset="1" stopColor="#096CED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const Referrals = () => {
  // Sample stats
  const totalEarned = 10000;
  const totalInvitees = 20;

  return (
    <div className="pb-10 bg-[#F9FAFB]">
      <div className="mx-auto space-y-6">
        <Navbar />

        <div className="flex items-center justify-between px-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Referrals</h1>
            <p className="text-sm text-gray-600">
              Track your referral activity here
            </p>
          </div>
        </div>

        <div className="bg-white py-4 px-4 mx-4 rounded-lg">
          <div className="p-2 space-y-6">
            <div className="border border-[#E3E0E0] rounded-lg px-6 py-4 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white flex ">
                  <div className="mr-3">
                    <TotalEarned />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">Total Earned</span>
                    <div className="text-xl font-semibold text-gray-900">
                      ₦{totalEarned.toLocaleString()}.00
                    </div>
                  </div>
                </div>

                <div className="bg-white flex border-l-2 border-[#F6F8FA] pl-6">
                  <div className="mr-3">
                    <TotalInvitees />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">
                      Total Invitees
                    </span>
                    <div className="text-xl font-semibold text-gray-900">
                      {totalInvitees}
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl border border-[#E3E0E0] p-6 flex flex-col md:flex-row justify-between items-center relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, #D9A2EA 0%, #B230D9 100%)",
                }}
              >
                {/*Referral code*/}
                <div className="z-10 flex-1">
                  <div className="text-[#FFFFFFE5] text-sm font-light mb-4">
                    Share your referral code
                  </div>
                  <div className="flex items-center mb-4 gap-3">
                    <span className="text-xl md:text-xl font-semibold text-white break-all">
                      susansheiduref453727/vancore
                    </span>
                    <Copy className="text-white bg-[#FFFFFF33] rounded-lg p-2 cursor-pointer w-8 h-8" />
                    <Share2 className="text-white bg-[#FFFFFF33] rounded-lg p-2 cursor-pointer w-8 h-8" />
                  </div>
                </div>
                <img
                  src="/coin.png"
                  alt="coins"
                  className="absolute right-6 bottom-0 h-28 w-auto z-0 pointer-events-none select-none"
                  style={{ maxWidth: "140px" }}
                />
              </div>

              {/* Referral History Button */}
              <div className="w-fit bg-[#BA80F61A] p-2 rounded-lg">
                <Link
                  to="/dashboard/referral-history"
                  className="flex items-center text-[#BA80F6] "
                >
                  <ReferralHistory />
                  <span className="text-sm font-medium ml-1">
                    Referral History
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-white mt-4 p-6 border border-[#E3E0E0] rounded-lg">
              <div className="mb-6">
                <div className="text-lg font-medium mb-1">How to earn</div>
                <div className="text-gray-500 text-base">
                  Refer your friends and earn using your referral code.
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-20">
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="mb-2">
                    {/* Step 1 SVG */}
                    <Step1 />
                  </span>
                  <div className="font-medium text-gray-900 mb-1 text-sm">
                    Invite your friend to join Vancore using your referral code
                  </div>
                </div>
                {/* Connecting SVG after Step 1 */}
                <span className="hidden md:block">
                  <svg
                    width="131"
                    height="23"
                    viewBox="0 0 131 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.662537 22.2988C33.675 -1.888 85.2209 -10.573 129.817 22.2989"
                      stroke="url(#paint0_linear_1707_14436)"
                      strokeWidth="1.15833"
                      strokeLinecap="round"
                      strokeDasharray="3.47 3.47"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1707_14436"
                        x1="12.825"
                        y1="7.2361"
                        x2="128.658"
                        y2="7.2361"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#1C2C48" stopOpacity="0" />
                        <stop offset="1" stopColor="#096CED" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="mb-2">
                    {/* Step 2 SVG */}
                    <Step2 />
                  </span>
                  <div className="font-medium text-gray-900 mb-1 text-sm">
                    Your friend signs up using your referral code
                  </div>
                </div>
                {/* Connecting SVG after Step 2 */}
                <span className="hidden md:block">
                  <Step3 />
                </span>
                <div className="flex flex-col items-center text-center flex-1">
                  <span className="mb-2">
                    {/* Step 3 SVG */}
                    <svg
                      width="45"
                      height="46"
                      viewBox="0 0 45 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26.307 19.4184C25.8326 19.4184 25.3581 19.2368 24.9967 18.8754C24.2721 18.1507 24.2721 16.9794 24.9967 16.2548L26.307 14.9445C27.0076 14.2439 27.938 13.8584 28.9276 13.8584H30.0137C30.0137 11.8142 31.6761 10.1518 33.7203 10.1518V8.29845C33.7203 6.25423 35.3828 4.5918 37.427 4.5918H39.2803C40.3034 4.5918 41.1336 5.42023 41.1336 6.44512C41.1336 7.47001 40.3034 8.29845 39.2803 8.29845H37.427V10.1518C37.427 12.196 35.7646 13.8584 33.7203 13.8584C33.7203 15.9026 32.0579 17.5651 30.0137 17.5651H28.9276L27.6173 18.8754C27.2559 19.2368 26.7815 19.4184 26.307 19.4184Z"
                        fill="url(#paint0_linear_1707_14426)"
                      />
                      <path
                        opacity="0.35"
                        d="M27.5948 31.1047L14.6215 18.1314C13.8969 17.4067 12.7256 17.4067 12.0009 18.1314C11.3708 18.7615 11.3226 19.7178 11.7915 20.4369L6.09625 36.0567C5.28449 38.2826 7.44362 40.4417 9.66946 39.63L25.2911 33.9347C25.5969 34.1349 25.9343 34.2683 26.2864 34.2683C26.7608 34.2683 27.2353 34.0867 27.5967 33.7253C28.3176 33.0025 28.3176 31.8293 27.5948 31.1047Z"
                        fill="url(#paint1_linear_1707_14426)"
                      />
                      <path
                        d="M32.7936 41.6586C34.3289 41.6586 35.5736 40.414 35.5736 38.8786C35.5736 37.3433 34.3289 36.0986 32.7936 36.0986C31.2583 36.0986 30.0136 37.3433 30.0136 38.8786C30.0136 40.414 31.2583 41.6586 32.7936 41.6586Z"
                        fill="url(#paint2_linear_1707_14426)"
                      />
                      <path
                        d="M40.2068 21.2719C41.7422 21.2719 42.9868 20.0272 42.9868 18.4919C42.9868 16.9566 41.7422 15.7119 40.2068 15.7119C38.6715 15.7119 37.4268 16.9566 37.4268 18.4919C37.4268 20.0272 38.6715 21.2719 40.2068 21.2719Z"
                        fill="url(#paint3_linear_1707_14426)"
                      />
                      <path
                        d="M6.84707 17.5639C8.38241 17.5639 9.62706 16.3192 9.62706 14.7839C9.62706 13.2485 8.38241 12.0039 6.84707 12.0039C5.31172 12.0039 4.06708 13.2485 4.06708 14.7839C4.06708 16.3192 5.31172 17.5639 6.84707 17.5639Z"
                        fill="url(#paint4_linear_1707_14426)"
                      />
                      <path
                        d="M27.2332 8.29728C28.7686 8.29728 30.0132 7.05264 30.0132 5.51729C30.0132 3.98195 28.7686 2.7373 27.2332 2.7373C25.6979 2.7373 24.4532 3.98195 24.4532 5.51729C24.4532 7.05264 25.6979 8.29728 27.2332 8.29728Z"
                        fill="url(#paint5_linear_1707_14426)"
                      />
                      <path
                        d="M12.405 4.5918C10.8704 4.5918 9.62683 5.83723 9.62683 7.37179C9.62683 8.90634 10.8723 10.1518 12.4068 10.1518H13.8691C15.6205 10.1518 17.0401 11.5714 17.0401 13.3228V15.7118C17.0401 16.7348 17.8704 17.5651 18.8935 17.5651C19.9165 17.5651 20.7468 16.7348 20.7468 15.7118V12.0051C20.7468 7.9111 17.4275 4.5918 13.3335 4.5918H12.405Z"
                        fill="url(#paint6_linear_1707_14426)"
                      />
                      <path
                        d="M41.1334 31.4668C41.1334 33.0014 39.888 34.245 38.3535 34.245C36.8189 34.245 35.5735 32.9995 35.5735 31.465V30.0027C35.5735 28.2513 34.1538 26.8317 32.4024 26.8317H30.0135C28.9904 26.8317 28.1602 26.0014 28.1602 24.9783C28.1602 23.9553 28.9904 23.125 30.0135 23.125H33.7201C37.8141 23.125 41.1334 26.4443 41.1334 30.5383V31.4668Z"
                        fill="url(#paint7_linear_1707_14426)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1707_14426"
                          x1="32.7934"
                          y1="4.5918"
                          x2="32.7934"
                          y2="19.4184"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1707_14426"
                          x1="17.0294"
                          y1="17.5879"
                          x2="17.0294"
                          y2="39.8046"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_1707_14426"
                          x1="32.7936"
                          y1="36.0986"
                          x2="32.7936"
                          y2="41.6586"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_1707_14426"
                          x1="40.2068"
                          y1="15.7119"
                          x2="40.2068"
                          y2="21.2719"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_1707_14426"
                          x1="6.84707"
                          y1="12.0039"
                          x2="6.84707"
                          y2="17.5639"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_1707_14426"
                          x1="27.2332"
                          y1="2.7373"
                          x2="27.2332"
                          y2="8.29728"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_1707_14426"
                          x1="15.1868"
                          y1="4.5918"
                          x2="15.1868"
                          y2="17.5651"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_1707_14426"
                          x1="34.6468"
                          y1="23.125"
                          x2="34.6468"
                          y2="34.245"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#B90AEE" />
                          <stop offset="1" stopColor="#6A0688" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="font-medium text-gray-900 mb-1 text-sm">
                    Your friend completes their sign up successfully
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referrals;
