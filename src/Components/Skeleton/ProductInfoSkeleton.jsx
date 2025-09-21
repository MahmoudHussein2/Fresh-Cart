import React from 'react';

export default function ProductInfoSkeleton() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 gap-4 gap-y-6 py-6">
          <div className="left col-span-12 lg:col-span-4 p-4">
            <div className="w-full h-96 bg-gray-200 rounded-xl animate-pulse" />
          </div>

          <div className="right col-span-12 lg:col-span-8 p-4 shadow-xl rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="flex space-x-2">
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
              <div className="flex gap-2 items-center">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse" />
            </div>

            <div className="border-y-2 border-gray-300/50 space-y-6 py-6">
              <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse mb-4" />
              <div className="lg:flex lg:flex-row flex flex-col gap-4 items-center lg:gap-6">
                <span className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="flex items-center gap-7 p-2 border-2 border-gray-400/80 rounded-md">
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-6 w-10 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                </div>
                <span className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="lg:flex lg:flex-row flex flex-col gap-3 lg:gap-4 mb-6">
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-100 rounded animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between py-6">
              <div className="featuresCard flex items-center gap-3 bg-gray-100 px-4 py-3 rounded shadow-sm w-full lg:w-auto">
                <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
              <div className="featuresCard flex items-center gap-3 bg-gray-100 px-4 py-3 rounded shadow-sm w-full lg:w-auto">
                <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
