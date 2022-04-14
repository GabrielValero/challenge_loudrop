import React, {useContext, useEffect, useState} from 'react'

import Card from '../Molecules/Card'

import ProductContext from '../../context/ProductContext'
import useProducts from '../../hooks/useProducts'

export default function ProductsList(){

  const {products, setProducts, productList} = useContext(ProductContext)
  const {initialProducts} = useProducts()

  useEffect(()=>{
    initialProducts()
  },[])
  useEffect(()=>{
    console.log(productList);
    setProducts(productList)
  }, [productList])

  return(
    <div className="flex flex-col sm:flex-row flex-wrap justify-center">
      {products.length > 0 ? products.map((product)=> <Card product={product} key={product.id}/>) : productList.map((product)=> <Card product={product} key={product.id}/>)}
    </div>
  )
}
