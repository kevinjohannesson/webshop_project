import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'
import { selectProducts, selectFilteredProducts } from '../store/product/selectors';
import { useSelector } from 'react-redux';
import FilterAndSort from './FilterAndSort';

const List = styled.div`
min-height: 400px;
border: 2px solid black;
border-radius: 5px;

display: flex;
flex-direction: row;
`

export default function ProductContainer() {

  const allProducts = useSelector(selectProducts);
  // console.log(allProducts)
  const filtered = useSelector(selectFilteredProducts('clean'))
  console.log('filtered', filtered)
  // const filterProducts = () => {

  // }

  return (
    <React.Fragment>
      <FilterAndSort />
      <List>
        {
          allProducts.map( product => 
            <ProductCard 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              ID={product.id} 
              tags={product.tags}
              popularity={product.bought}
              img={product.img}
            /> )
        }
      </List>
    </React.Fragment>
  )
}
