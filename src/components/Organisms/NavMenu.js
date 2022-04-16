import React, {useContext, useEffect, useState} from 'react'

import SearchField from '../Molecules/SearchField'
import CartSection from '../Molecules/CartSection'

import useProducts from '../../hooks/useProducts'

export default function NavMenu(){
  const {initialProducts} = useProducts()

  useEffect(()=>{
    initialProducts()
  },[])

  return(
    <nav className="fixed h-16 sm:h-20 z-10 bg-white w-full flex items-center justify-end px-3 sm:px-10">
      <div className="flex">
        <SearchField/>
        <CartSection/>
      </div>
    </nav>
  )
}
