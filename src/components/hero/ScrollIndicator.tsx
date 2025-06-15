
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
      <ChevronDown className="text-gray-400" size={32} />
    </div>
  );
};

export default ScrollIndicator;
