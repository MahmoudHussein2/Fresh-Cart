import React from "react";

export default function PageMetaData({
  title = "FreshCart",
  description = "Discover fresh deals and best-selling products on FreshCart",
  keywords = "FreshCart, grocery, deals, fresh food, online shopping, offers",
  author = "Mahmoud Osman",
}) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </>
  );
}
