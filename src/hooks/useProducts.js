import React, {useEffect, useContext} from 'react'

import ProductContext from '../context/ProductContext'

export default function useProducts(){

  const {products, setProducts, productList, setProductList, cartProductsList, setCartProductsList} = useContext(ProductContext)

  const searchProduct = ({name})=>{
    let productListTemp = productList;


    if(name != '' && name){
      const getProduct = productListTemp.filter( product => product.name.toUpperCase().includes(name.toUpperCase()))

      setProducts(getProduct)
    }else if(name.length < 2){
      setProducts(productListTemp)
    }
  }

  const initialProducts = ()=>{
    const temp = JSON.parse(localStorage.getItem('cart'))
    let productListTemp = productList;

    if(temp){
      setCartProductsList(temp)

      productListTemp.map(productItem =>{
        temp.findIndex(cartProduct =>  cartProduct.id == productItem.id) >= 0 && (productItem.cart = true)
        return productItem
      })

      setProductList(productListTemp)
    }

  }

  const addProductToCart = async ({product})=>{
    const temp = JSON.parse(localStorage.getItem('cart'))
    const productListTemp = productList;

    product.cart = true;

    const validation = temp ? temp.findIndex(cartProduct =>  cartProduct.id == product.id) : -1;

    if(validation < 0){
      const newArray = await productListTemp.map(productItem =>{
        productItem.cart = productItem.id == product.id ? true : productItem.cart
        return productItem
      })

      localStorage.setItem('cart', JSON.stringify(temp ? temp.concat(product) : [product]))
      setCartProductsList(prevState => prevState.concat(product))
      setProductList(newArray)
    }



  }

  const deleteProductFromCart = async ({id})=>{
    const temp = JSON.parse(localStorage.getItem('cart'))
    const productListTemp = productList;


    const newArray = await productListTemp.map(productItem =>{
       productItem.cart = productItem.id == id ? false : productItem.cart
      return productItem
    })

    localStorage.setItem('cart', JSON.stringify(temp.filter( product => product.id != id && product)))
    setCartProductsList(prevState => prevState.filter( product => product.id != id && product))
    setProductList(newArray)
  }

  const deleteCart = ()=>{
    const productListTemp = productList;

    productListTemp.map(productItem =>{
      cartProductsList.findIndex(cartProduct =>  cartProduct.id == productItem.id) >= 0 && (productItem.cart = false)
      return productItem
    })

    setProductList(productListTemp)

    localStorage.removeItem("cart")
    setCartProductsList([])
  }

  return{
    searchProduct,
    initialProducts,
    addProductToCart,
    deleteProductFromCart,
    searchProduct,
    deleteCart
  }
}
