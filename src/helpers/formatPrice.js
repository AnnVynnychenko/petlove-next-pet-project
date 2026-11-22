export const formatPrice = price => {
  const numericPrice = Number(price);

  if (!numericPrice || Number.isNaN(numericPrice)) return '';

  return `$${numericPrice.toFixed(2)}`;
};
