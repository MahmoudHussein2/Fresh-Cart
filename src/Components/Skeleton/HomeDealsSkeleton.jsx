import React from 'react';

export default function HomeDealsSkeleton() {
  return (
    <>
      <section>
        <div className="container p-7">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-8 w-48 bg-gray-200 rounded mb-3 animate-pulse" />
              <div className="lg:flex items-center gap-2">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="Counter flex gap-2">
                  <div className="size-7 bg-gray-200 rounded-md animate-pulse" />
                  <span className="h-4 w-2 bg-gray-200 rounded animate-pulse" />
                  <div className="size-7 bg-gray-200 rounded-md animate-pulse" />
                  <span className="h-4 w-2 bg-gray-200 rounded animate-pulse" />
                  <div className="size-7 bg-gray-200 rounded-md animate-pulse" />
                </div>
              </div>
            </div>
            <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="rounded-xl shadow-xl overflow-hidden relative animate-pulse bg-white">
                <div className="bg-gray-200 lg:h-40 h-32 w-full" />
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
      </section>
    </>
  );
}
