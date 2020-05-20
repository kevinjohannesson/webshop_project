export const selectProducts = reduxState => reduxState.products;

export const selectAllTags = reduxState => 
  reduxState.products.map( product => [...product.tags])
    .reduce((a, b) => [...a, ...b], [])
      .filter((tag, index, arr) => arr.indexOf(tag) === index);

export const selectFilteredProducts = tag => reduxState => {
  if(tag === 'none') return reduxState.products;
  else return reduxState.products.filter( 
                product => product.tags.includes( tag ) );
}

export const selectProduct = (productId) => (reduxState) => {
  return reduxState.products.find(
    (product) => product.id === productId
  );
};
