import React from 'react';
import CartItemSkeleton from './CartItemSkeleton';

export default function CartSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 gap-y-6 py-6">
            <div className="left col-span-12 lg:col-span-8 p-4 items-start border-2 border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="h-6 w-40 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-10 w-28 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="space-y-6">
                <CartItemSkeleton />
                <CartItemSkeleton />
                <CartItemSkeleton />
              </div>
            </div>
            <div className="right col-span-12 lg:col-span-4 px-4 py-6 shadow-2xl bg-white rounded-lg self-start border-2 border-gray-200">
              <div className="h-6 w-32 bg-gray-200 rounded mb-3 animate-pulse" />
              <ul className="space-y-3 border-b-2 mb-4 border-gray-500/50">
                <li>
                  <div className="h-4 w-40 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </li>
                <li>
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                </li>
                <li>
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2" />
                  <div className="h-4 w-10 bg-gray-200 rounded animate-pulse" />
                </li>
              </ul>
              <div className="flex items-center justify-between font-bold mb-4">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex flex-col gap-3 py-6">
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-100 rounded animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="featuresCard flex items-center gap-3 px-4 py-3 rounded bg-gray-100 w-full lg:w-auto">
                  <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
                <div className="featuresCard flex items-center gap-3 bg-gray-100 px-4 py-3 rounded w-full lg:w-auto">
                  <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
                    <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
