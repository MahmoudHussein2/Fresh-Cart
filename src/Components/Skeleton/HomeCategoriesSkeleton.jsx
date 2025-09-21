import React from 'react';

export default function HomeCategoriesSkeleton() {
  const skeletonCount = 6;

  return (
    <section className="px-2 py-4 relative">
      <div className="container">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: skeletonCount }).map((_, idx) => (
            <div
              key={idx}
              className="card flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg w-32 animate-pulse"
            >
              <div className="size-16 rounded-full bg-gray-200 mb-2" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center mt-4">
        <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
        <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
      </div>
    </section>
  );
}
