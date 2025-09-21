import { Link } from "react-router";

import { useEffect, useState } from "react";

import { calcTimeLeft } from "../../Utils/CounterDown";

import Card from "../../Components/Card/Card";
import Loading from "../../Components/Loading/Loading";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import useProducts from "../../Hooks/useProducts";

export default function Deals() {
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
    return <Loading />;
  }

  const Deals = Array.isArray(products)
    ? products.filter((product) => product.priceAfterDiscount)
    : [];

  return (
    <>
      <PageMetaData title="Daily Deals" />
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
          </div>

          {!isLoading && Deals ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-6">
              {Deals.map((product) => {
                return <Card productDetails={product} key={product.id} />;
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
