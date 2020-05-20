export const selectProducts = reduxState => reduxState.products;

export const selectAllTags = reduxState => 
  reduxState.products.list.map( product => [...product.tags])
    .reduce((a, b) => [...a, ...b], [])
      .filter((tag, index, arr) => arr.indexOf(tag) === index);

export const selectFilteredProducts = tag => reduxState => {
  if(tag === 'none') return reduxState.products;
  else return reduxState.products.filter( 
                product => product.tags.includes( tag ) );
}

export const selectProduct = (productId) => (reduxState) => {
  return reduxState.products.list.find(
    (product) => product.id === productId
  );
};

export const selectFilterMethod = state => state.products.filters;

export const isFilterActive = filter => state => state.products.filters.includes(filter);


export const selectFilteredAndSortedProducts = reduxState => {
  return reduxState.products.list
    .filter( product => 
      product.tags.some( tag => 
        reduxState.products.filters.includes( tag  ) || reduxState.products.filters.length === 0 )
    ).sort( (product_a, product_b) => {
        const sortMethod = reduxState.products.sort;
        if( sortMethod === 'none') return 0;
        else return product_a[sortMethod] - product_b[sortMethod]; 
    })
}