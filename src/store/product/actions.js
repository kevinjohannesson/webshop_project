import axios from "axios"


export const changeFilter = filter => {
  return {
    type: 'CHANGE_FILTER',
    payload: filter
  }
}

export const changeSortingMethod = sortingMethod => {
  return {
    type: 'CHANGE_SORTING_METHOD',
    payload: sortingMethod
  }
}

export const fetchedProducts = products => {
  return {
    type: 'PRODUCTS_FETCHED',
    payload: products
  }
}

export const fetchAllProducts = async (dispatch, getState) => {
  axios.get('https://my-json-server.typicode.com/kevinjohannesson/webshop_project/products')
    .then(function (response) {
      // handle success
      console.log(response);
      // dispatch( fetchedProducts(response.data))
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })   
  
}