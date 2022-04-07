import Image from 'next/image'

import Cart from '../Atoms/Cart'

export default function ProductImage({product}){
  return(
    <div className="sm:relative text-green-400 w-full">
      <img src={product.img} alt={product.name}
      className="rounded-xl w-full object-contain"/>
      <Cart/>
    </div>
  )
}
