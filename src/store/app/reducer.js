import data from '../../database.json';

export default function reducer(state = data.app, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
} 