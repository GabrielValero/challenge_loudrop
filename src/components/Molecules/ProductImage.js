import Recat, {useState} from 'react'
import Image from 'next/image'

import Cart from '../Atoms/Cart'
import DeleteIcon from '../Atoms/DeleteIcon'

export default function ProductImage({product, cart}){

  return(
    <div className={`w-full ${!cart && "sm:relative"}`} style={{color: "#2e7bf0"}}>
      <img src={product.img} alt={product.name}
      className="rounded-xl w-full object-contain"/>
      {cart ? <DeleteIcon product={product}/> : <Cart product={product}/>}
    </div>
  )
}
