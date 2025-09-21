import React from "react";
import HomeFeaturedProducts from "../../Components/HomeFeaturedProducts/HomeFeaturedProducts";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";

export default function FeaturedProducts() {
  return (
    <>
      <PageMetaData title="Featured Products" />

      <HomeFeaturedProducts />
    </>
  );
}
