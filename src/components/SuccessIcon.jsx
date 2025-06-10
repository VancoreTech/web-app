import React from "react";

const SuccessIcon = ({ 
  width = 24, 
  height = 24, 
  fill = "#6A6767", 
  className = "" 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 18 18"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M7.06255 14.8898L2.53442 10.3617L4.59797 8.29818L7.06255 10.7701L14.2667 3.55859L16.3303 5.62214L7.06255 14.8898Z" 
        fill={fill}
      />
    </svg>
  );
};

export default SuccessIcon;