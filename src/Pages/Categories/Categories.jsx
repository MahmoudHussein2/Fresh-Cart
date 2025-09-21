import CategoryCategories from "../../Components/CategoryCategories/CategoryCategories";
import PageMetaData from "../../Components/PageMetaData/PageMetaData";

import PopularSubCategories from "../../Components/PopularSubCategories/PopularSubCategories";

export default function Categories() {
  return (
    <>
      <PageMetaData title="Categories" />
      <CategoryCategories />
      <PopularSubCategories />
    </>
  );
}
