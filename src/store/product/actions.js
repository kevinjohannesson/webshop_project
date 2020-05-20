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