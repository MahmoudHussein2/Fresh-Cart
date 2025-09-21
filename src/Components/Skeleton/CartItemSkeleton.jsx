import React from "react";

export default function CartItemSkeleton() {
  return (
    <div className="cartItem py-6 grid grid-cols-12 gap-4 gap-y-6 animate-pulse">
      <div className="left col-span-12 md:col-span-6 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="cartImg shrink-0">
            <div className="w-20 h-20 bg-gray-200 rounded-lg" />
          </div>
          <div className="cartDetails flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
            <div className="flex items-center gap-4">
              <div className="h-4 w-16 bg-gray-200 rounded" />
              <div className="h-4 w-8 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 px-4 flex justify-between items-center py-6">
        <div className="flex items-center rounded-lg overflow-hidden border border-gray-300 w-fit">
          <div className="w-10 h-10 bg-gray-200 flex items-center justify-center" />
          <div className="min-w-[48px] h-10 bg-gray-200 flex items-center justify-center border-x border-gray-300" />
          <div className="w-10 h-10 bg-gray-200 flex items-center justify-center" />
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap">
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>
        <div className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded" />
      </div>
    </div>
  );
}
