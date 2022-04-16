import React, {useContext} from 'react'
import Link from 'next/link'

import ProductContext from '../../context/ProductContext'
import Card from './Card'
import CartEmpty from '../Atoms/CartEmpty'
import PrimaryButton from '../Atoms/PrimaryButton'

export default function CartModal({setActive, active}){

  const {cartProductsList} = useContext(ProductContext)

  return(
    <div className={`modal flex flex-col absolute right-0 top-16 w-[95vw] sm:w-96  h-72 bg-white rounded-3xl  border-4 duration-300 ${!active && "opacity-0"}`}>
      <div className="h-3/4 overflow-hidden overflow-y-auto rounded-3xl sroll-modify">
        {cartProductsList?.length > 0 ? cartProductsList.map((product)=> <Card product={product} cart={true} key={product.id}/>)
          : <CartEmpty/>
        }
      </div>
      <div className="w-full p-3 flex justify-center items-center">
        <PrimaryButton link="/confirmacion"/>
      </div>
      <style jsx>{`
        .modal{
          border-color: rgba(46, 123, 240, 0.26);
          ${!active ? "transform: translateY(-150%)" : ""}
        }
        .sroll-modify::-webkit-scrollbar, .sroll-modify::-webkit-scrollbar-thumb{
          display: none;
        }
      `}</style>
    </div>
  )
}
