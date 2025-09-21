import React from 'react';

export default function WishListItemSkeleton() {
  return (
    <div className="cartItem grid grid-cols-12 border-b border-gray-200 py-5 items-center animate-pulse">
      <div className="col-span-12 md:col-span-6 px-4">
        <div className="flex gap-4 items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-lg shrink-0" />
          <div className="space-y-2">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-5 w-40 bg-gray-200 rounded" />
            <div className="flex items-center gap-2">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-8 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 px-4 mt-4 md:mt-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex items-center gap-2 font-semibold text-center sm:text-start">
            <div className="h-5 w-24 bg-gray-200 rounded" />
            <div className="h-4 w-16 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-3 w-full sm:w-auto justify-center sm:justify-end items-center">
            <div className="h-10 w-28 bg-gray-200 rounded" />
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
