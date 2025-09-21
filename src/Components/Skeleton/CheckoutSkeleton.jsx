import React from "react";

export default function CheckoutSkeleton() {
  return (
    <>
     
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
          <form className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="bg-white shadow-xl rounded-lg p-6 space-y-6">
                  <div className="h-6 w-40 bg-gray-200 rounded mb-4 animate-pulse" />
                  <div className="flex flex-col gap-4">
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-lg p-6 space-y-4">
                <div className="h-6 w-40 bg-gray-200 rounded mb-4 animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-lg p-6 lg:col-span-4 space-y-4">
              <div className="h-6 w-32 bg-gray-200 rounded mb-4 animate-pulse" />
              <div className="border-b max-h-48 overflow-auto space-y-3 border-gray-300 pb-3 px-2">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="size-12 bg-gray-200 rounded-md shrink-0 animate-pulse" />
                    <div className="flex flex-col min-w-0 gap-1">
                      <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                      <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse ms-auto" />
                  </div>
                ))}
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </li>
                <li className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </li>
                <li className="flex justify-between">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </li>
                <li className="flex justify-between font-semibold border-t pt-3 border-gray-300">
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </li>
              </ul>
              <div className="flex flex-col gap-3 py-4">
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="space-y-2">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-gray-200 rounded-full animate-pulse" />
                  <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex gap-2 text-xl">
                  <div className="h-8 w-14 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-14 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-14 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-14 bg-gray-200 rounded animate-pulse" />
                  <div className="h-8 w-14 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
