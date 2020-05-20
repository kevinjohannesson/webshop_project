export const selectProducts = (reduxState) => reduxState.product.products;

export const selectAllTags = (reduxState) =>
  reduxState.product.products
    .map((product) => [...product.tags]) // colect all the tags arrays
    .reduce((a, b) => [...a, ...b], []) // combine them to 1 array
    .filter((tag, index, arr) => arr.indexOf(tag) === index); // filter duplicate items

export const selectFilteredProducts = (tag) => (reduxState) => {
  return reduxState.product.products.filter((product) =>
    product.tags.includes(tag)
  );
};

export const selectProduct = (productId) => (reduxState) => {
  return reduxState.product.products.find(
    (product) => product.id === productId
  );
};
