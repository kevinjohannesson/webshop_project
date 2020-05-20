import data from '../../database.json';
// console.log('data.products', data.products)
export default function reducer(state = data.products, action) {
  switch (action.type) {
    case 'CHANGE_FILTER':{
      return {
        ...state,
        filters: toggle( state.filters, action.payload )
      }
    }
    case 'CHANGE_SORTING_METHOD':{
      return {
        ...state,
        sort: action.payload
      }
    }
    default: {
      return state;
    }
  }
} 

function toggle(list, element) {
  if (list.includes(element)) {
    return list.filter(el => el !== element);
  } else {
    return [...list, element];
  }
}