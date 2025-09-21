import HomeCategories from "../../Components/HomeCategories/HomeCategories";
import HomeDeals from "../../Components/HomeDeals/HomeDeals";
import HomeFeaturedProducts from "../../Components/HomeFeaturedProducts/HomeFeaturedProducts";
import HomeFeatures from "../../Components/HomeFeatures/HomeFeatures";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";

export default function Home() {
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
