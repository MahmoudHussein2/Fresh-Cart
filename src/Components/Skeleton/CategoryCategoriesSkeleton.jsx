import React from "react";

export default function CategoryCategoriesSkeleton() {
  const skeletonCount = 6;

  return (
    <>
      <section className="px-2 py-4">
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="h-8 w-48 bg-gray-200 rounded mb-2 animate-pulse" />
              <div className="h-4 w-72 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
          <div className="grid xl:grid-cols-6 grid-cols-2 py-8 gap-6">
            {Array.from({ length: skeletonCount }).map((_, idx) => (
              <div
                key={idx}
                className="card flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg animate-pulse"
              >
                <div className="size-16 rounded-full bg-gray-200 mb-2" />
                <div className="h-4 w-20 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
