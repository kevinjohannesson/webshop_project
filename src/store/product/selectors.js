export const selectProducts = reduxState => reduxState.product.products;

export const selectAllTags = reduxState => 
  reduxState.product.products.map( product => [...product.tags])
    .reduce((a, b) => [...a, ...b], [])
      .filter((tag, index, arr) => arr.indexOf(tag) === index);

export const selectFilteredProducts = tag => reduxState => {
  return reduxState.product.products.filter( 
    product => product.tags.includes( tag ) );
};