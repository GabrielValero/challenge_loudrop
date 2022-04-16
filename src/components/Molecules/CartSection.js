import React, {useState} from 'react'

import CartIcon from '../Atoms/CartIcon'
import CartModal from './CartModal'

export default function CartSection(){
  const [active, setActive] = useState(false)

  const handleFunction = ()=>{
    setActive(!active)
  }

  return(
    <div className="relative">
      <div className={`ml-3 ${active ? "text-primaryColor" : "text-inactiveIconColor"}`} onClick={handleFunction}>
        <CartIcon active={active}/>
      </div>
      <CartModal active={active} setActive={setActive}/>
    </div>
  )
}
