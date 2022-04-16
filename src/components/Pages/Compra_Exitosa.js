import React, {useContext, useEffect} from 'react'

import ProductContext from '../../context/ProductContext'
import PrimaryButton from '../Atoms/PrimaryButton'

import useProducts from '../../hooks/useProducts'

export default function Compra_Exitosa(){
  const {cartProductsList} = useContext(ProductContext)
  const {deleteCart} = useProducts()

  useEffect(()=>{
    deleteCart()
  }, [])

  return(
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-3/4 sm:w-96">
        <img className="w-full h-full object-contain" src={"/assets/orderComplete.svg"} alt="Imagen de orden exitosa"/>
      </div>
      <div className="w-[80%] text-center mt-10 sm:w-96">
        <h2 className="text-primaryColor text-3xl mb-5">COMPRA EXITOSA</h2>
        <PrimaryButton link={"/"} text={"Volver"}/>
      </div>
    </div>
  )
}
