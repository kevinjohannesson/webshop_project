import data from '../../database.json';

export default function reducer(state = data.cart, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
} 