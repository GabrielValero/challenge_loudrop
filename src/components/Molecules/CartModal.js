import React, {useContext} from 'react'
import ProductContext from '../../context/ProductContext'
import Card from './Card'
import CartEmpty from '../Atoms/CartEmpty'

export default function CartModal({setActive, active}){

  const {cartProductsList} = useContext(ProductContext)

  return(
    <div className={`flex flex-col absolute right-0 top-10 w-96 max-w-3/4 h-72 bg-white rounded-3xl  border-2 duration-300 ${!active && "opacity-0"}`}
      style={{borderColor: "#c7c7d5", transform: !active && "translateY(-150%)"}} onMouseLeave={()=>setActive(false)}>
      <div className="h-3/4 overflow-hidden overflow-y-auto rounded-3xl sroll-modify">
        {cartProductsList?.length > 0 ? cartProductsList.map((product)=> <Card product={product} cart={true} key={product.id}/>)
          : <CartEmpty/>
        }
      </div>
      <div className="w-full p-3 justify-center">
        <button type="button" className="w-full h-10 rounded-xl font-bold text-white bg-primaryColor">BUY</button>
      </div>
    </div>
  )
}
