import React from 'react'

import ProductContainer from '../components/ProductContainer';
import FilterAndSort from '../components/FilterAndSort';

export default function HomePage() {

  return (
    <div>
      <FilterAndSort />
      <ProductContainer />
    </div>
  )
} 
