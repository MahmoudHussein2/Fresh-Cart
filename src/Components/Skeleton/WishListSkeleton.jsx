import React from 'react';
import WishListItemSkeleton from './WishListItemSkeleton';

export default function WishListSkeleton() {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-12 gap-4 gap-y-6 py-6">
            <div className="left col-span-12 lg:col-span-8 p-4 items-start border-2 border-gray-200 rounded-lg">
              <div className="border-b-2 border-gray-500/50 mb-6">
                <div className="h-8 w-48 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-4 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
              </div>
              <div className="space-y-4">
                <WishListItemSkeleton />
                <WishListItemSkeleton />
                <WishListItemSkeleton />
              </div>
            </div>

            <div className="right col-span-12 lg:col-span-4 px-4 py-6 shadow-2xl bg-white rounded-lg self-start border-2 border-gray-200">
              <div className="space-y-6 w-full">
                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
                  <div className="h-6 w-40 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="flex gap-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
                  <div className="h-6 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="space-y-3">
                    {[...Array(2)].map((_, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <div>
                          <div className="h-4 w-24 bg-gray-200 rounded mb-1 animate-pulse" />
                          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                        </div>
                        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-4 space-y-4">
                  <div className="h-6 w-40 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-48 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mt-2">
                    <div className="h-10 w-3/4 bg-gray-200 animate-pulse" />
                    <div className="h-10 w-20 bg-gray-200 animate-pulse" />
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
