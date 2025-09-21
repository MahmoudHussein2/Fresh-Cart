import React from 'react';

export default function RelatedProductSkeleton() {
  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="flex gap-3 justify-center items-center">
              <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
              <div className="size-10 rounded-full bg-gray-200 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div key={idx} className="rounded-xl shadow-xl overflow-hidden relative animate-pulse bg-white">
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
                      <div className="h-8 w-8 bg-gray-200 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
