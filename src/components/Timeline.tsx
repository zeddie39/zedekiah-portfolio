
import React from 'react';
import { timelineData } from '@/data/timeline';

const Timeline = () => {
  return (
    <div className="relative border-l-2 border-purple-400/30 ml-6 pl-8 space-y-12 py-4">
      {timelineData.map((item, index) => {
        const { icon: Icon } = item;
        return (
          <div key={index} className="relative">
            <div className="absolute -left-[45px] top-1 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center ring-8 ring-slate-900">
              <Icon className="text-white" size={24} />
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <p className="text-gray-400 mb-2">{item.date}</p>
              <h3 className="text-white font-bold text-xl mb-1">{item.title}</h3>
              <p className={`${item.category === 'Experience' ? 'text-blue-400' : 'text-purple-400'} font-semibold`}>{item.subtitle}</p>
              <ul className="text-gray-300 mt-3 space-y-1 text-sm list-disc list-inside">
                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
