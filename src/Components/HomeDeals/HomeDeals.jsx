import { Link } from "react-router";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

import { calcTimeLeft } from "../../Utils/CounterDown";

import HomeDealsSkeleton from "../Skeleton/HomeDealsSkeleton";
import useProducts from "../../Hooks/useProducts";

export default function HomeDeals() {
  const { isLoading, products, isError, error } = useProducts();

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    Minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calcTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }

  const Deals = Array.isArray(products)
    ? products.filter((product) => product.priceAfterDiscount).slice(0, 8)
    : [];

  return (
    <>
      <section>
        <div className="container p-7">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-2xl mb-3">Deals of the day</h2>

              <div className="lg:flex items-center gap-2 ">
                <p>Offers ends in :</p>
                <div className="Counter flex gap-2">
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </div>
                  <span> : </span>
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.Minutes).padStart(2, "0")}
                  </div>
                  <span> : </span>
                  <div className="size-7 text-sm bg-gray-900 text-white rounded-md flex justify-center items-center">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>

            <Link className="text-primary-500" to={`/Deals`}>
              View all Deals
            </Link>
          </div>

          {!isLoading && Deals ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
              {Deals.map((product) => {
                return <Card productDetails={product} key={product.id} />;
              })}
            </div>
          ) : (
            <HomeDealsSkeleton />
          )}
        </div>
      </section>
    </>
  );
}
