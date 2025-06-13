import React from 'react';
import { Check, X } from 'lucide-react';

const ConnectionStatusIndicator = ({ isConnected }) => {
  return (
    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
      isConnected 
        ? 'bg-green-50 text-green-600 border border-green-200' 
        : 'bg-gray-50 text-gray-500 border border-gray-200'
    }`}>
      {isConnected ? (
        <>
          <Check className="w-3 h-3" />
          <span>Connected</span>
        </>
      ) : (
        <>
          <X className="w-3 h-3" />
          <span>Not connected</span>
        </>
      )}
    </div>
  );
};

export default ConnectionStatusIndicator;
