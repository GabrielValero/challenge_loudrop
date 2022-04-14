import React, {useState, useEffect} from 'react'

import productsJson from '../config/products'

const Product = React.createContext('')

export function ProductContext({children}){

  const [productList, setProductList] = useState(productsJson.sort((a,b) => a.name < b.name ? -1 : 1))
  const [cartProductsList, setCartProductsList] = useState([])
  const [products, setProducts] = useState([])

  return(
    <Product.Provider value={{products, setProducts, productList, setProductList, cartProductsList, setCartProductsList}} >
      {children}
    </Product.Provider>
  )
}

export default Product
