import data from '../../database.json';
// console.log('data.products', data.products)
export default function reducer(state = data.products, action) {
  switch (action.type) {
    case '@@resource/ADD_RESOURCE': {
      return [...state, action.payload]
    }
    default: {
      return state;
    }
  }
} 