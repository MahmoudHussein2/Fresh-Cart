import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router";
import Loading from "../Loading/Loading";


import CategoryCategoriesSkeleton from "../Skeleton/CategoryCategoriesSkeleton";
import useCategories from "../../Hooks/useCategories";

export default function CategoryCategories() {
  const { isLoading, categories, isError, error } = useCategories();

  if (isLoading) {
    return <CategoryCategoriesSkeleton />;
  }

  return (
    <>
      <section className="px-2 py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="lg:text-2xl text-base font-bold text-gray-600">
                Shop By Categories
              </h2>
              <span className="text-sm font-bold text-gray-600">
                Browse Our wide selection of Products by Category
              </span>
            </div>
          </div>
          {!isLoading && categories ? (
            <div className="grid xl:grid-cols-6 grid-cols-2 py-8 gap-6 ">
              {categories.map((category) => {
                return (
                  <Link
                    key={category._id}
                    to={`Category/${category._id}`}
                    className="card hover:scale-105 transition-all  flex flex-col items-center justify-between gap-2 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl duration-300 cursor-pointer"
                  >
                    <img
                      src={category.image}
                      alt=""
                      className="size-16 rounded-full object-cover"
                    />
                    <h3 className=" font-semibold text-gray-600 ">
                      {category.name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>
    </>
  );
}
