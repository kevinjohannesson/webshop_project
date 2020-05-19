import data from '../../database.json';

export default function reducer(state = data, action) {
  switch (action.type) {
    case '@@resource/ADD_RESOURCE': {
      return [...state, action.payload]
    }
    default: {
      return state;
    }
  }
} 