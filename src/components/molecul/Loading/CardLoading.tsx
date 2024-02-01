import React from 'react';

const CardLoading = () => {
  return (
    <div className="border border-gray-300 shadow rounded-xl p-4 max-w-sm w-full mx-auto  ">
      <div className="animate-pulse flex flex-col  items-center space-x-4">
        <div className="flex-1 space-y-6 py-1  w-full">
          <div className="h-5 bg-slate-200 rounded w-full"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-5 bg-slate-200 rounded col-span-2"></div>
              <div className="h-5 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-5 bg-slate-200 rounded"></div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <div className="h-5 bg-slate-200 rounded col-span-3"></div>
            <div className="h-5 bg-slate-200 rounded col-span-2"></div>
            <div className="h-5 bg-slate-200 rounded col-span-1"></div>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <div className="h-5 bg-slate-200 rounded col-span-4"></div>
            <div className="h-5 bg-slate-200 rounded col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
