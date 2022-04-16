import React, {useContext} from 'react'
import Link from 'next/link'

import ProductContext from '../../context/ProductContext'
import Card from '../Molecules/Card'
import PrimaryButton from '../Atoms/PrimaryButton'

export default function ConfirmPage(){
  const {cartProductsList} = useContext(ProductContext)

  return(
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-[354px] md:max-w-full md:flex-row md:justify-around">
        <div className="w-full p-2  flex flex-col items-center justify-center max-w-[354px] md:w-1/2 md:h-full md:mr-20">
          <div className="w-1/2">
            <img className="w-full h-full object-contain" src={"/assets/shopping.svg"} alt="imagen comprando"/>
          </div>
          <h2 className="text-primaryColor mt-5">CONFIRMACIÓN</h2>
          <p className="text-secondaryColor font-bold text-xl mb-5">Productos: {cartProductsList.length}</p>
          <PrimaryButton link="/compra_exitosa"/>
          <Link href="/"><a className="border-2 border-inactiveIconColor rounded-xl w-36 h-10 mt-3 flex items-center justify-center">Volver</a></Link>
        </div>
        <div>
          <div className="h-[30rem] md:overflow-hidden md:overflow-y-auto sroll-modify">
            {cartProductsList?.length > 0 && cartProductsList.map((product)=> <Card product={product} cart={true} key={product.id}/>)}
          </div>
        </div>
      </div>
      <style jsx>{`
        .sroll-modify::-webkit-scrollbar, .sroll-modify::-webkit-scrollbar-thumb{
          display: none;
        }
      `}</style>
    </div>
  )
}
