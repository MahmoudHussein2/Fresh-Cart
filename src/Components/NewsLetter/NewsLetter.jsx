import React from "react";

export default function NewsLetter() {
  return (
    <>
    <section className="bg-primary-100">
      <div class=" py-16 px-4 sm:px-6 lg:px-8 container">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-gray-900">
            Subscribe to our Newsletter
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Stay updated with our latest offers, recipes, and health tips.
          </p>
          <form class="mt-6 flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              class="flex-1 px-4 py-2 form-control"
              required
            />
            <button
              type="submit"
              class="px-6 py-2 bg-primary-600 text-white  rounded-r-md hover:bg-primary-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    </section>


    </>
  );
}
