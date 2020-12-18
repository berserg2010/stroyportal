export const getters = {
  PRODUCTS: (state) => {
    const searchProduct = state.searchProduct

    if (searchProduct === '') {
      return state.products
    } else {
      return state.products.filter((searchProduct) => {
        return searchProduct.toLowerCase()
          .match(state.searchProduct.toLowerCase())
      })
    }
  }
}
