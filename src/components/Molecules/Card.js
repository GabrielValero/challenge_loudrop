import React, {useMemo} from 'react'

import ProductImage from './ProductImage'

export default function Card({product, cart = false}){

  return cart ? (
    <div className="flex relative items-start rounded-3xl my-3 mx-2  p-2 border-slate-100 border-0 bg-white">
      <div className="w-24">
        <ProductImage product={product} cart={cart}/>
      </div>
      <div className="w-full h-full min-h-10 pl-5 pr-5 py-2">
        <div className="w-full" style={{color: "#455367"}}>
          <h3 className="text-lg font-bold">{product.price}$</h3>
          <h2 className="">{product.name.slice(0,20)}{product.name.length > 20 && "..."}</h2>
        </div>
      </div>
    </div>
  )
  :
  (
    <div className="flex relative items-start rounded-3xl my-3 mx-2  p-2 border-slate-100 border-0 sm:w-52 sm:flex-col bg-white">
      <div className="w-3/4 sm:w-full">
        <ProductImage product={product}/>
      </div>
      <div className="w-full h-full min-h-10 pl-5 pr-3 py-2 sm:pt-2 sm:px-2 sm:py-0">
        <div className="w-full sm:flex sm:flex-row-reverse sm:justify-between">
          <h3 className="text-lg font-bold sm:text-md sm:ml-3">{product.price}$</h3>
          <h2 className="sm:text-md">{product.name.slice(0,20)}{product.name.length > 20 && "..."}</h2>
        </div>
        <p className="text-sm pt-3 sm:hidden">{product.description.slice(0,60)}{product.description.length > 60 && "..."}</p>
      </div>
    </div>
  )
}
