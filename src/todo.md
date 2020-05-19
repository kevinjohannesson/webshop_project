// actions:
// Shopping cart::
- adding a product
- remove a product

// selectors:
// database of products:
- select product by id
- select product by name

- select all products and display them

- filter by tag
- sort by: price, popularity ( paramterized selector? )

// maybe:
is shopping cart a state, if so do we create a new reducer

shoppingcart = {
  total: total_price,
  all_items: [ array of item id's and totals? { itemID: number, quantitiy: number} ]
}