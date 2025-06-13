import React, { useState } from "react";
import { Check, Instagram, Link, MessageCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import SuccessModal from "../Modal/SuccessModal";
import ConnectAppModal from "../Modal/ConnectAppModal";
import ConnectionStatusIndicator from "../components/ConnectionStatusIndicator";

// Switch Component
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

export const TwitterIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1297_7413"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="28"
        height="28"
      >
        <path d="M0 0H28V28H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1297_7413)">
        <path
          d="M22.05 1.3125H26.344L16.964 12.0605L28 26.6885H19.36L12.588 17.8185L4.848 26.6885H0.55L10.582 15.1885L0 1.3145H8.86L14.972 9.4205L22.05 1.3125ZM20.54 24.1125H22.92L7.56 3.7545H5.008L20.54 24.1125Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

export const InstagramIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4375 0H6.5625C2.93813 0 0 2.93813 0 6.5625V21.4375C0 25.0619 2.93813 28 6.5625 28H21.4375C25.0619 28 28 25.0619 28 21.4375V6.5625C28 2.93813 25.0619 0 21.4375 0Z"
        fill="url(#paint0_radial_1297_7425)"
      />
      <path
        d="M21.4375 0H6.5625C2.93813 0 0 2.93813 0 6.5625V21.4375C0 25.0619 2.93813 28 6.5625 28H21.4375C25.0619 28 28 25.0619 28 21.4375V6.5625C28 2.93813 25.0619 0 21.4375 0Z"
        fill="url(#paint1_radial_1297_7425)"
      />
      <path
        d="M14.001 3.0625C11.0306 3.0625 10.6577 3.07552 9.49113 3.12856C8.32672 3.18194 7.53189 3.36623 6.83648 3.63672C6.11702 3.91606 5.50681 4.2898 4.89891 4.89792C4.29045 5.50594 3.91672 6.11614 3.6365 6.83528C3.36525 7.53091 3.18073 8.32606 3.12834 9.48992C3.07617 10.6566 3.0625 11.0296 3.0625 14.0001C3.0625 16.9706 3.07563 17.3423 3.12856 18.5089C3.18216 19.6733 3.36645 20.4681 3.63672 21.1635C3.91628 21.883 4.29002 22.4932 4.89814 23.1011C5.50594 23.7095 6.11614 24.0842 6.83506 24.3635C7.53102 24.634 8.32595 24.8183 9.49014 24.8717C10.6568 24.9247 11.0294 24.9377 13.9997 24.9377C16.9704 24.9377 17.3421 24.9247 18.5087 24.8717C19.6731 24.8183 20.4688 24.634 21.1647 24.3635C21.8839 24.0842 22.4932 23.7095 23.1009 23.1011C23.7093 22.4932 24.083 21.883 24.3633 21.1638C24.6321 20.4681 24.8167 19.6731 24.8714 18.5091C24.9238 17.3425 24.9375 16.9706 24.9375 14.0001C24.9375 11.0296 24.9238 10.6568 24.8714 9.49014C24.8167 8.32573 24.6321 7.53102 24.3633 6.83561C24.083 6.11614 23.7093 5.50594 23.1009 4.89792C22.4925 4.28958 21.8841 3.91584 21.1641 3.63683C20.4668 3.36623 19.6715 3.18183 18.5071 3.12856C17.3404 3.07552 16.969 3.0625 13.9976 3.0625H14.001ZM13.0198 5.03355C13.311 5.03311 13.636 5.03355 14.001 5.03355C16.9214 5.03355 17.2675 5.04405 18.4207 5.09644C19.4871 5.14522 20.0659 5.32339 20.4515 5.47312C20.9619 5.67131 21.3258 5.90833 21.7084 6.29125C22.0912 6.67406 22.3281 7.03861 22.5269 7.54906C22.6766 7.93406 22.855 8.51288 22.9036 9.57928C22.956 10.7323 22.9673 11.0786 22.9673 13.9976C22.9673 16.9166 22.956 17.263 22.9036 18.4159C22.8548 19.4823 22.6766 20.0611 22.5269 20.4462C22.3287 20.9567 22.0912 21.3201 21.7084 21.7027C21.3256 22.0855 20.9622 22.3225 20.4515 22.5208C20.0664 22.6711 19.4871 22.8489 18.4207 22.8977C17.2677 22.95 16.9214 22.9614 14.001 22.9614C11.0805 22.9614 10.7343 22.95 9.58136 22.8977C8.51495 22.8484 7.93614 22.6703 7.55027 22.5205C7.03992 22.3222 6.67527 22.0853 6.29245 21.7025C5.90964 21.3197 5.67273 20.956 5.474 20.4454C5.32427 20.0602 5.14587 19.4814 5.09731 18.415C5.04492 17.262 5.03442 16.9157 5.03442 13.9949C5.03442 11.074 5.04492 10.7296 5.09731 9.57655C5.14609 8.51014 5.32427 7.93133 5.474 7.54578C5.6723 7.03533 5.90964 6.67078 6.29256 6.28797C6.67548 5.90516 7.03992 5.66814 7.55037 5.46952C7.93592 5.31912 8.51495 5.14139 9.58136 5.09239C10.5903 5.04678 10.9814 5.03311 13.0198 5.03081V5.03355ZM19.8394 6.84961C19.1148 6.84961 18.5269 7.43695 18.5269 8.16167C18.5269 8.88628 19.1148 9.47417 19.8394 9.47417C20.564 9.47417 21.1519 8.88628 21.1519 8.16167C21.1519 7.43706 20.564 6.84917 19.8394 6.84917V6.84961ZM14.001 8.38316C10.8991 8.38316 8.38414 10.8981 8.38414 14.0001C8.38414 17.1021 10.8991 19.6159 14.001 19.6159C17.103 19.6159 19.6171 17.1021 19.6171 14.0001C19.6171 10.8982 17.1028 8.38316 14.0008 8.38316H14.001ZM14.001 10.3542C16.0145 10.3542 17.6469 11.9864 17.6469 14.0001C17.6469 16.0136 16.0145 17.646 14.001 17.646C11.9875 17.646 10.3552 16.0136 10.3552 14.0001C10.3552 11.9864 11.9874 10.3542 14.001 10.3542Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1297_7425"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.4375 30.1565) rotate(-90) scale(27.7501 25.8098)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1297_7425"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-4.69011 2.01698) rotate(78.681) scale(12.4044 51.1315)"
        >
          <stop stopColor="#3771C8" />
          <stop offset="0.128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const InstagramIcon1 = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
        fill="url(#paint0_radial_1297_7452)"
      />
      <path
        d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
        fill="url(#paint1_radial_1297_7452)"
      />
      <path
        d="M24.0017 5.25C18.9096 5.25 18.2704 5.27231 16.2705 5.36325C14.2744 5.45475 12.9118 5.77069 11.7197 6.23438C10.4863 6.71325 9.44025 7.35394 8.39813 8.39644C7.35506 9.43875 6.71438 10.4848 6.234 11.7176C5.769 12.9101 5.45269 14.2733 5.36287 16.2684C5.27344 18.2685 5.25 18.9079 5.25 24.0002C5.25 29.0925 5.2725 29.7296 5.36325 31.7295C5.45513 33.7256 5.77106 35.0882 6.23438 36.2803C6.71362 37.5137 7.35431 38.5598 8.39681 39.6019C9.43875 40.6449 10.4848 41.2871 11.7172 41.766C12.9103 42.2297 14.2731 42.5456 16.2688 42.6371C18.2689 42.7281 18.9075 42.7504 23.9994 42.7504C29.0921 42.7504 29.7292 42.7281 31.7291 42.6371C33.7253 42.5456 35.0893 42.2297 36.2824 41.766C37.5152 41.2871 38.5597 40.6449 39.6015 39.6019C40.6446 38.5598 41.2851 37.5137 41.7656 36.2809C42.2265 35.0882 42.543 33.7253 42.6367 31.7299C42.7266 29.73 42.75 29.0925 42.75 24.0002C42.75 18.9079 42.7266 18.2689 42.6367 16.2688C42.543 14.2727 42.2265 12.9103 41.7656 11.7182C41.2851 10.4848 40.6446 9.43875 39.6015 8.39644C38.5586 7.35356 37.5156 6.71288 36.2812 6.23456C35.0859 5.77069 33.7226 5.45456 31.7265 5.36325C29.7264 5.27231 29.0897 5.25 23.9959 5.25H24.0017ZM22.3196 8.62894C22.8189 8.62819 23.376 8.62894 24.0017 8.62894C29.0081 8.62894 29.6014 8.64694 31.5784 8.73675C33.4065 8.82038 34.3988 9.12581 35.0597 9.3825C35.9347 9.72225 36.5586 10.1286 37.2144 10.785C37.8707 11.4413 38.2768 12.0662 38.6175 12.9412C38.8742 13.6012 39.18 14.5935 39.2633 16.4216C39.3531 18.3983 39.3726 18.9919 39.3726 23.9959C39.3726 28.9999 39.3531 29.5937 39.2633 31.5701C39.1796 33.3983 38.8742 34.3905 38.6175 35.0507C38.2778 35.9258 37.8707 36.5488 37.2144 37.2047C36.5582 37.8609 35.9351 38.2671 35.0597 38.607C34.3995 38.8648 33.4065 39.1695 31.5784 39.2531C29.6017 39.3429 29.0081 39.3624 24.0017 39.3624C18.9951 39.3624 18.4016 39.3429 16.4252 39.2531C14.5971 39.1688 13.6048 38.8633 12.9433 38.6066C12.0684 38.2667 11.4433 37.8606 10.7871 37.2043C10.1308 36.5481 9.72469 35.9246 9.384 35.0492C9.12731 34.389 8.8215 33.3968 8.73825 31.5686C8.64844 29.592 8.63044 28.9984 8.63044 23.9912C8.63044 18.984 8.64844 18.3936 8.73825 16.4169C8.82188 14.5888 9.12731 13.5966 9.384 12.9356C9.72394 12.0606 10.1308 11.4356 10.7873 10.7794C11.4437 10.1231 12.0684 9.71681 12.9435 9.37631C13.6044 9.1185 14.5971 8.81381 16.4252 8.72981C18.1549 8.65162 18.8252 8.62819 22.3196 8.62425V8.62894ZM34.0104 11.7422C32.7683 11.7422 31.7604 12.7491 31.7604 13.9914C31.7604 15.2336 32.7683 16.2414 34.0104 16.2414C35.2526 16.2414 36.2604 15.2336 36.2604 13.9914C36.2604 12.7493 35.2526 11.7414 34.0104 11.7414V11.7422ZM24.0017 14.3711C18.6842 14.3711 14.3728 18.6825 14.3728 24.0002C14.3728 29.3179 18.6842 33.6272 24.0017 33.6272C29.3194 33.6272 33.6292 29.3179 33.6292 24.0002C33.6292 18.6827 29.319 14.3711 24.0013 14.3711H24.0017ZM24.0017 17.7501C27.4534 17.7501 30.2518 20.5481 30.2518 24.0002C30.2518 27.4519 27.4534 30.2503 24.0017 30.2503C20.55 30.2503 17.7518 27.4519 17.7518 24.0002C17.7518 20.5481 20.5498 17.7501 24.0017 17.7501Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1297_7452"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.75 51.6969) rotate(-90) scale(47.5716 44.2453)"
        >
          <stop stop-color="#FFDD55" />
          <stop offset="0.1" stop-color="#FFDD55" />
          <stop offset="0.5" stop-color="#FF543E" />
          <stop offset="1" stop-color="#C837AB" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1297_7452"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-8.04019 3.45769) rotate(78.681) scale(21.2648 87.654)"
        >
          <stop stop-color="#3771C8" />
          <stop offset="0.128" stop-color="#3771C8" />
          <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 14C28 6.26806 21.7319 0 14 0C6.26806 0 0 6.26806 0 14C0 20.9877 5.11963 26.7797 11.8125 27.8299V18.0469H8.25781V14H11.8125V10.9156C11.8125 7.40687 13.9027 5.46875 17.1006 5.46875C18.6322 5.46875 20.2344 5.74219 20.2344 5.74219V9.1875H18.4691C16.7299 9.1875 16.1875 10.2667 16.1875 11.3739V14H20.0703L19.4496 18.0469H16.1875V27.8299C22.8804 26.7797 28 20.9879 28 14Z"
        fill="#1877F2"
      />
      <path
        d="M19.4496 18.0469L20.0703 14H16.1875V11.3739C16.1875 10.2666 16.7299 9.1875 18.4691 9.1875H20.2344V5.74219C20.2344 5.74219 18.6322 5.46875 17.1005 5.46875C13.9027 5.46875 11.8125 7.40688 11.8125 10.9156V14H8.25781V18.0469H11.8125V27.8299C12.5361 27.9433 13.2675 28.0002 14 28C14.7325 28.0002 15.4639 27.9433 16.1875 27.8299V18.0469H19.4496Z"
        fill="white"
      />
    </svg>
  );
};

export const WhatsappIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_2807_25701)">
        <path
          d="M48 35.8192C48 36.0822 47.9918 36.6493 47.9753 37.0932C47.9342 38.1699 47.8521 39.5589 47.7205 40.1918C47.5233 41.1452 47.2356 42.0411 46.8493 42.789C46.3973 43.6767 45.8219 44.4658 45.1315 45.1479C44.4493 45.8301 43.6603 46.4055 42.7726 46.8575C42.0247 47.2438 41.1205 47.5315 40.1589 47.7288C39.5342 47.8521 38.1534 47.9425 37.0849 47.9753C36.6411 47.9918 36.074 48 35.811 48H12.1726C11.9096 48 11.3425 47.9918 10.8986 47.9753C9.82192 47.9342 8.43288 47.8521 7.8 47.7205C6.84658 47.5233 5.95069 47.2356 5.20274 46.8493C4.31507 46.3973 3.52603 45.8219 2.84384 45.1315C2.16164 44.4493 1.5863 43.6603 1.13425 42.7726C0.747945 42.0247 0.460274 41.1205 0.263014 40.1589C0.139726 39.5342 0.0493151 38.1534 0.0164384 37.0849C0.00821918 36.6493 0 36.0822 0 35.8192V12.1808C0 11.9178 0.00821918 11.3507 0.0246575 10.9068C0.0657534 9.83014 0.147945 8.4411 0.279452 7.80822C0.476712 6.85479 0.764384 5.9589 1.15068 5.21096C1.60274 4.32329 2.17808 3.53425 2.86027 2.85205C3.54247 2.16986 4.33151 1.59452 5.21918 1.14247C5.96712 0.756164 6.87123 0.468493 7.83288 0.271233C8.45753 0.147945 9.83836 0.0575342 10.9068 0.0246575C11.3507 0.00821918 11.9178 0 12.1808 0H35.8192C36.0822 0 36.6493 0.00821918 37.0932 0.0246575C38.1699 0.0657534 39.5589 0.147945 40.1918 0.279452C41.1452 0.476712 42.0411 0.764384 42.789 1.15068C43.6767 1.60274 44.4658 2.17808 45.1479 2.86849C45.8301 3.55068 46.4055 4.33973 46.8575 5.2274C47.2438 5.97534 47.5315 6.87945 47.7288 7.8411C47.8521 8.46575 47.9425 9.84658 47.9753 10.9151C47.9918 11.3589 48 11.926 48 12.189V35.8192Z"
          fill="url(#paint0_linear_2807_25701)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M36.6246 11.4883C33.3945 8.25817 29.0959 6.47461 24.5178 6.47461C15.0822 6.47461 7.41369 14.1513 7.40547 23.5787C7.40547 26.5952 8.19451 29.5376 9.6904 32.1267L7.26575 40.9952L16.3397 38.6198C18.8383 39.9842 21.6493 40.6993 24.5178 40.6993H24.526C33.9534 40.6993 41.6301 33.0226 41.6383 23.5952C41.6383 19.0171 39.8548 14.7184 36.6246 11.4883ZM24.526 37.8061C21.9699 37.8061 19.463 37.1157 17.2849 35.8253L16.7671 35.5212L11.3836 36.9349L12.8219 31.691L12.4849 31.1568C11.063 28.8965 10.3068 26.2746 10.3068 23.5869C10.3068 15.7458 16.6931 9.36776 24.5342 9.36776C28.3315 9.36776 31.9068 10.8472 34.5863 13.5349C37.274 16.2226 38.7534 19.7979 38.7452 23.5952C38.737 31.428 32.3589 37.8061 24.526 37.8061ZM32.326 27.1623C31.8986 26.9486 29.7945 25.913 29.4082 25.7732C29.0137 25.6335 28.7342 25.5595 28.4466 25.9869C28.1589 26.4143 27.3452 27.376 27.0904 27.6637C26.8438 27.9513 26.589 27.9842 26.1616 27.7705C25.7342 27.5568 24.3534 27.1047 22.726 25.65C21.452 24.5157 20.5973 23.1184 20.3507 22.691C20.1041 22.2637 20.326 22.0335 20.5397 21.8198C20.7288 21.6308 20.9671 21.3184 21.1808 21.0719C21.3945 20.8253 21.4685 20.6445 21.6082 20.3568C21.7479 20.0691 21.6822 19.8226 21.5753 19.6089C21.4685 19.3952 20.6137 17.291 20.2603 16.4363C19.9151 15.6061 19.5616 15.713 19.2986 15.7047C19.052 15.6883 18.7644 15.6883 18.4767 15.6883C18.189 15.6883 17.7288 15.7952 17.3342 16.2226C16.9397 16.65 15.8383 17.6856 15.8383 19.7897C15.8383 21.8938 17.3671 23.9239 17.5808 24.2116C17.7945 24.4993 20.5973 28.8143 24.8877 30.6637C25.9068 31.1075 26.7041 31.3705 27.3288 31.5678C28.3562 31.8965 29.2849 31.8472 30.0246 31.7404C30.8466 31.6171 32.5562 30.7048 32.9096 29.7102C33.263 28.7157 33.263 27.8527 33.1562 27.6801C33.0329 27.4828 32.7534 27.376 32.326 27.1623Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2807_25701"
          x1="24.0018"
          y1="48.0037"
          x2="24.0018"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#25CF43" />
          <stop offset="1" stop-color="#61FD7D" />
        </linearGradient>
        <clipPath id="clip0_2807_25701">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const VancoreIcon = () => {
  return (
    <svg
      width="50"
      height="15"
      viewBox="0 0 50 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.29742 2.93994C3.12893 2.42382 4.60267 1.91746 6.11733 1.63439C6.5984 1.54471 7.31085 1.92418 7.71134 2.30547C9.45066 3.95815 10.7254 5.5663 12.9238 7.51609C13.7205 4.1247 16.7962 5.35888 18.9037 3.94229C18.5373 6.25202 18.2321 8.14324 17.9433 10.0375C17.5471 12.6608 12.5605 14.2592 10.9922 12.6999C7.81452 9.54152 4.67349 6.34292 1.29742 2.93994Z"
        fill="url(#paint0_linear_1292_7392)"
      />
      <path
        d="M10.9922 12.699C12.5606 14.2583 17.5471 12.6569 17.9433 10.0366C18.2303 8.14541 18.5386 6.25419 18.9037 3.94141C16.7962 5.35799 13.7205 4.12443 12.9238 7.5152C12.6808 8.83113 12.5972 10.8645 10.9922 12.699Z"
        fill="url(#paint1_linear_1292_7392)"
      />
      <path
        d="M25.8486 4.90234L23.9365 9.96593H23.0061L21.094 4.90234H21.9292L23.4749 9.16308L25.0134 4.90234H25.8486Z"
        fill="#141414"
      />
      <path
        d="M29.4597 8.16638V9.96853H28.713V9.47071C28.42 9.81479 27.9365 10.0344 27.387 10.0344C26.376 10.0344 25.6361 9.25108 25.6361 8.1676C25.6361 7.08411 26.4346 6.30078 27.5482 6.30078C28.6617 6.30078 29.4597 7.08289 29.4597 8.16638ZM28.713 8.16638C28.713 7.46358 28.2295 6.95112 27.5531 6.95112C26.8766 6.95112 26.4029 7.46358 26.4029 8.16638C26.4029 8.86918 26.8864 9.38164 27.5531 9.38164C28.2197 9.38164 28.713 8.8765 28.713 8.16638Z"
        fill="#141414"
      />
      <path
        d="M30.2076 7.86012C30.2076 6.93037 30.8743 6.30078 31.8487 6.30078C32.823 6.30078 33.5037 6.93037 33.5037 7.86012V9.96975H32.7498V7.86012C32.7498 7.29642 32.3981 6.92305 31.856 6.92305C31.3139 6.92305 30.9622 7.29642 30.9622 7.86012V9.96975H30.2076V7.86012Z"
        fill="#141414"
      />
      <path
        d="M36.0978 10.0344C34.9842 10.0344 34.171 9.25109 34.171 8.1676C34.171 7.08411 34.9842 6.30078 36.0978 6.30078C37.0788 6.30078 37.8627 6.95966 37.9726 7.86012H37.2107C37.16 7.603 37.021 7.37163 36.8179 7.20591C36.6147 7.04019 36.36 6.95051 36.0978 6.95234C35.4262 6.95234 34.9378 7.4648 34.9378 8.1676C34.9378 8.8704 35.4213 9.38286 36.0978 9.38286C36.3612 9.38617 36.6175 9.29719 36.8221 9.13136C37.0268 8.96554 37.1668 8.73334 37.218 8.47508H37.9732C37.8627 9.38286 37.0788 10.0344 36.0978 10.0344Z"
        fill="#141414"
      />
      <path
        d="M42.3023 8.1676C42.3023 9.25109 41.4964 10.0344 40.3829 10.0344C39.2693 10.0344 38.4567 9.25109 38.4567 8.1676C38.4567 7.08411 39.2699 6.30078 40.3829 6.30078C41.4958 6.30078 42.3023 7.08411 42.3023 8.1676ZM39.226 8.1676C39.226 8.87772 39.7089 9.38286 40.3755 9.38286C41.0422 9.38286 41.5355 8.87772 41.5355 8.1676C41.5355 7.45748 41.052 6.95234 40.3755 6.95234C39.6991 6.95234 39.226 7.4648 39.226 8.1676Z"
        fill="#141414"
      />
      <path
        d="M42.9689 9.97027V7.75815C42.9689 6.87965 43.5696 6.36719 44.6099 6.36719V6.99678C44.0531 6.99678 43.7235 7.28229 43.7235 7.82404V9.97027H42.9689Z"
        fill="#141414"
      />
      <path
        d="M48.6831 8.40187H45.6043C45.6995 9.00218 46.1684 9.41946 46.7911 9.41946C47.3039 9.41946 47.7435 9.09735 47.8827 8.66542H48.6446C48.4395 9.46339 47.6678 10.0344 46.7838 10.0344C45.6702 10.0344 44.8571 9.25109 44.8571 8.1676C44.8571 7.08411 45.6702 6.30078 46.7838 6.30078C47.8973 6.30078 48.6959 7.08411 48.7032 8.17492C48.7038 8.25104 48.697 8.32703 48.6831 8.40187ZM45.6306 7.82352H47.9822C47.8601 7.2891 47.3888 6.91573 46.7954 6.91573C46.5259 6.90939 46.2625 6.99629 46.0498 7.16171C45.8371 7.32714 45.6881 7.56093 45.6281 7.82352H45.6306Z"
        fill="#141414"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1292_7392"
          x1="10.1002"
          y1="13.313"
          x2="10.1002"
          y2="1.62158"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DC85F6" />
          <stop offset="0.64" stopColor="#8D79F6" />
          <stop offset="1" stopColor="#6673F6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1292_7392"
          x1="14.9476"
          y1="3.94141"
          x2="14.9476"
          y2="13.3127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44DFFE" />
          <stop offset="0.13" stopColor="#42D9FD" />
          <stop offset="0.32" stopColor="#3DC8FC" />
          <stop offset="0.52" stopColor="#35ACFA" />
          <stop offset="0.75" stopColor="#2985F6" />
          <stop offset="0.99" stopColor="#1B53F2" />
          <stop offset="1" stopColor="#1A51F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Main Component
const ConnectedApps = () => {
  const [apps, setApps] = useState([
    {
      id: "instagram",
      name: "Instagram",
      description: "Connect Instagram to sync your business account",
      isConnected: false,
    },
    {
      id: "whatsapp",
      name: "WhatsApp",
      description: "Connect WhatsApp Business API for customer messaging",
      isConnected: false,
    },
  ]);

  const [selectedApp, setSelectedApp] = useState(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleConnect = (app) => {
    setSelectedApp(app);
    setIsConnectModalOpen(true);
  };

  // handleDisconnect function
const handleDisconnect = (app) => {
  setApps((prev) =>
    prev.map((appItem) =>
      appItem.id === app.id ? { ...appItem, isConnected: false } : appItem
    )
  );
};

  const handleConnectConfirm = () => {
    if (selectedApp) {
      // Update the app to connected state
      setApps((prev) =>
        prev.map((app) =>
          app.id === selectedApp.id ? { ...app, isConnected: true } : app
        )
      );

      // Close connect modal and open success modal
      setIsConnectModalOpen(false);
      setIsSuccessModalOpen(true);
    }
  };

  const handleToggleConnection = (appId) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === appId ? { ...app, isConnected: !app.isConnected } : app
      )
    );
  };

  const handleSuccessClose = () => {
    setIsSuccessModalOpen(false);
    setSelectedApp(null);
  };

  const getAppIcon = (appId) => {
    switch (appId) {
      case "instagram":
        return <InstagramIcon1 className="" />;
      case "whatsapp":
        return <WhatsappIcon className="" />;
      default:
        return <div className="w-7 h-7" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div>
        <Navbar />

        <div className="mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-xl font-semibold text-gray-900 mb-2">
              Connected apps
            </h1>
            <p className="text-xs text-gray-600">
              Supercharge your business with the tools you use everyday
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#F0E6FF] to-[#EDE2FF] border border-purple-200 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    New integrations are here
                  </h3>
                  <p className="text-sm text-gray-600">
                    Supercharge your business with the right tools you use
                    everyday
                  </p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="relative w-80 h-32">
                {/* Top Row */}
                {/* X-Twitter - Top Left */}
                <div className="absolute top-0 left-3 bg-white flex items-center justify-center rounded-lg p-2 shadow-sm">
                  <TwitterIcon />
                </div>

                {/* Instagram - Top Center */}
                <div className="absolute top-[-5px] left-1/2 transform -translate-x-1/2 bg-white flex items-center justify-center rounded-lg p-2 shadow-sm">
                  <InstagramIcon />
                </div>

                {/* Facebook - Top Right */}
                <div className="absolute top-0 right-3 bg-white flex items-center justify-center rounded-lg p-2 shadow-sm">
                  <FacebookIcon  />
                </div>

                {/* Bottom Row - Center */}
                {/* Vancore - Bottom Center */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white flex items-center justify-center rounded-lg px-2 py-4 shadow-sm">
                  <VancoreIcon />
                </div>

                {/* Connecting Lines */}
                {/* Connecting Line 1 - From Instagram to Vancore (vertical) */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                  <img src="/Vector-3.png" alt="Connecting Line 1" />
                </div>

                {/* Connecting Line 2 - From X to Vancore (diagonal left) */}
                <div className="absolute top-12 left-8">
                  <img src="/Vector-1.png" alt="Connecting Line 2" />
                </div>

                {/* Connecting Line 3 - From Facebook to Vancore (diagonal right) */}
                <div className="absolute top-12 right-8">
                  <img src="/Vector-4.png" alt="Connecting Line 3" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${app.color} flex items-center justify-center text-white`}
                  >
                    {getAppIcon(app.id)}
                  </div>
                  <ConnectionStatusIndicator isConnected={app.isConnected} />
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                <div className="flex items-center justify-between border-t border-[#EBEBEB] pt-4 ">
                  {!app.isConnected ? (
                    <div className="flex items-center border border-[#EBEBEB] text-gray-600 rounded-md px-2 hover:bg-blue-700 hover:text-white transition-colors">
                      <Link className="w-4 h-4 " />
                      <button
                        onClick={() => handleConnect(app)}
                        className="py-2 px-2 text-xs font-medium"
                      >
                        Connect
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center border border-[#E10000] text-[#E10000] rounded-md px-2 hover:shadow-md transition-shadow">
                      <Link className="w-4 h-4 text-[#E10000]" />
                      <button
                        onClick={() => handleDisconnect(app)}
                        className="py-2 px-2 text-xs font-medium border-[#E10000]"
                      >
                        Disconnect
                      </button>
                    </div>
                  )}
                  <Switch
                    checked={app.isConnected}
                    onCheckedChange={() => handleToggleConnection(app.id)}
                    disabled={!app.isConnected}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect App Modal */}
        <ConnectAppModal
          isOpen={isConnectModalOpen}
          onClose={() => setIsConnectModalOpen(false)}
          onConnect={handleConnectConfirm}
          app={selectedApp}
        />

        {/* Success Modal */}
        <SuccessModal
          isOpen={isSuccessModalOpen}
          title="Success!"
          message={`You have successfully connected your ${selectedApp?.name} to your business account.`}
          onDone={handleSuccessClose}
          buttonText="Done"
        />
      </div>
    </div>
  );
};

export default ConnectedApps;