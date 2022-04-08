import React, {useState, useEffect} from 'react'

import products from '../config/products'

const Product = React.createContext('')

export function ProductContext({children}){

  const [productList, setProductList] = useState(products.sort((a,b) => a.name < b.name ? -1 : 1))
  const [cartProductsList, setCartProductsList] = useState([])

  return(
    <Product.Provider value={{productList, setProductList, cartProductsList, setCartProductsList}} >
      {children}
    </Product.Provider>
  )
}

export default Product
