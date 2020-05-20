export const selectFilteredAndSortedProducts = reduxState => {
  return reduxState.products
    .filter( product => 
      product.tags.some( tag => 
        reduxState.app.filters.includes( tag  ) || reduxState.app.filters.length === 0 )
    ).sort( (product_a, product_b) => {
        const sortMethod = reduxState.app.sort;
        if( sortMethod === 'none') return 0;
        else return product_a[sortMethod] - product_b[sortMethod]; 
    })
}