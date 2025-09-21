import React from 'react';

export default function CardSkeleton() {
  return (
    <div className="card group rounded-xl shadow-xl overflow-hidden relative hover:shadow-2xl animate-pulse">
      <div>
        <div className="block">
          <div className="bg-gray-200 lg:h-60 h-90 mx-auto w-full" />
        </div>
      </div>
      <div className="cardContent p-4 space-y-3">
        <div>
          <div className="h-4 w-20 bg-gray-200 rounded mb-2" />
          <div className="h-5 w-32 bg-gray-200 rounded" />
        </div>

        <div className="rating flex gap-2 items-center">
          <div className="h-4 w-16 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
          <div className="h-4 w-8 bg-gray-200 rounded" />
        </div>

        <div className="price flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-5 w-16 bg-gray-200 rounded" />
            <div className="h-4 w-10 bg-gray-200 rounded" />
          </div>
          <div className="btn bg-gray-200 p-0 size-8 rounded-full shrink-0" />
        </div>

        <div className="actions absolute top-4 right-4 flex flex-col gap-2">
          <div className="size-8 rounded-full bg-gray-200" />
          <div className="size-8 rounded-full bg-gray-200" />
          <div className="size-8 rounded-full bg-gray-200" />
        </div>

        <div className="badge absolute left-3 top-4 bg-gray-200 text-sm rounded-md px-6 py-2" />
      </div>
    </div>
  );
}
