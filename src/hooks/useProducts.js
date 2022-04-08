import React, {useEffect, useContext} from 'react'

import ProductContext from '../context/ProductContext'

export default function useProducts(){

  const {productList, setProductList, cartProductsList, setCartProductsList} = useContext(ProductContext)

  const searchProduct = ({name})=>{
    return name != '' ? productList.filter( product => product.name == name && product) : productList
  }

  const addProductToCart = ({product})=>{
    const temp = JSON.parse(localStorage.getItem('cart'))
    product.cart = true;

    const validation = temp.findIndex(cartProduct =>  cartProduct.id == product.id);

    if(validation < 0){
      localStorage.setItem('cart', JSON.stringify(temp ? temp.concat(product) : [product]))
      setCartProductsList(prevState => prevState.concat(product))
    }
  }

  const deleteProductFromCart = ({id})=>{
    const temp = JSON.parse(localStorage.getItem('cart'))

    localStorage.setItem('cart', JSON.stringify(temp.filter( product => product.id != id && product)))
    setCartProductsList(prevState => prevState.filter( product => product.id != id && product))
  }

  return{
    searchProduct,
    addProductToCart,
    deleteProductFromCart,
    searchProduct
  }
}
