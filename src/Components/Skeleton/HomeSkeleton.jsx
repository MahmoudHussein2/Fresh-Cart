import React from "react";

export default function HomeSkeleton() {
  return (
    <>
      <PageMetaData
        title="Home Page | FreshCart"
        description="Discover fresh deals and best-selling products on FreshCart – your ultimate online grocery destination."
        keywords="FreshCart, grocery, deals, fresh food, online shopping, offers"
        author="Mahmoud Hussein"
      />

      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeDeals />
      <HomeFeaturedProducts />
    </>
  );
}
