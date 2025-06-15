
import React from 'react';

const ProfileAvatar = () => {
  return (
    <div className="flex-shrink-0">
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 p-1">
        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
          <div className="text-white text-lg font-bold">VZ</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
