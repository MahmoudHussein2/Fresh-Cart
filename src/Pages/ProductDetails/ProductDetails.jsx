import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import RelatedProducts from "../../Components/RelatedProducts/RelatedProducts";

import { useParams } from "react-router";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";
import ProductDetailsSkeleton from "../../Components/Skeleton/ProductDetailsSkeleton";
import UseProductDetails from "../../Hooks/UseProductDetails";

export function ProductDetails() {
  const { id } = useParams();
  const { isLoading, productDetails, isError, error } = UseProductDetails(id);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <>
      <PageMetaData
        title={productDetails.title}
        description={productDetails.description}
      />
      <ProductInfo productDetails={productDetails} />

      <RelatedProducts productDetails={productDetails} />
    </>
  );
}

export default ProductDetails;
