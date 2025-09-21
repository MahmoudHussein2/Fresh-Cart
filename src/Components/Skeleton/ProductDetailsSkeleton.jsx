import React from "react";

export default function ProductDetailsSkeleton() {
  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full h-96 bg-gray-200 rounded-xl animate-pulse" />
        <div className="space-y-6">
          <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-1/2 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-1/2 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-1/3 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="mt-12">
        <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-xl overflow-hidden relative animate-pulse bg-white"
            >
              <div className="bg-gray-200 h-32 w-full" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
                <div className="h-5 w-32 bg-gray-200 rounded" />
                <div className="flex gap-2 items-center">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                  <div className="h-4 w-8 bg-gray-200 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="h-5 w-16 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
