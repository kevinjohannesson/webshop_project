export const selectFilteredAndSortedProducts = reduxState => {
  return reduxState.products
    .filter( product => 
      product.tags.some( tag => 
        reduxState.app.filter === tag || reduxState.app.filter === 'none')
    ).sort( (product_a, product_b) => {
        const sortMethod = reduxState.app.sort;
        if( sortMethod === 'none') return 0;
        else return product_a[sortMethod] - product_b[sortMethod]; 
    })
}