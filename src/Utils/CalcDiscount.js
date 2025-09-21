export function calculateDiscountPercentage(price, priceAfterDiscount) {
  const discount = ((price - priceAfterDiscount) / price) * 100;
  return discount.toFixed(0);
}
