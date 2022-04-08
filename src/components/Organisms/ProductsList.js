import React, {useContext, useEffect, useState} from 'react'

import Card from '../Molecules/Card'

import ProductContext from '../../context/ProductContext'

export default function ProductsList(){

  const {productList, setProductList, setCartProductsList} = useContext(ProductContext)
  const [products, setProducts] = useState()


  useEffect(()=>{
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
    setProducts(productListTemp)

    //console.log("Lista de productos", productListTemp);
    //console.log("Lista de productos en el carrito", temp);
  },[])

  return(
    <div className="flex flex-col sm:flex-row flex-wrap justify-center">
      {products && products.map((product)=> <Card product={product} key={product.id}/>)}
    </div>
  )
}
