export const selectFilterMethod = state => state.app.filters;

export const isFilterActive = filter => state => state.app.filters.includes(filter);