import Loading from "../../Components/Loading/Loading";
import useBrands from "../../Hooks/UseBrands";

export default function Brands() {
  const { isLoading, brands, isError, error } = useBrands();

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <p className="text-center py-10 text-red-500">Error: {error?.message}</p>
    );
  if (!brands || brands.length === 0)
    return <p className="text-center py-10 text-gray-500">No brands found.</p>;

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand._id}
              className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-3 rounded-full border-4 border-primary-500 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h3 className="text-base font-semibold text-gray-700 group-hover:text-primary-600">
                {brand.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
