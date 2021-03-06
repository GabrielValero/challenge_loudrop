import React, {useState, useEffect} from 'react'

import useProducts from '../../hooks/useProducts'

export default function Cart({product}){
  const {addProductToCart, deleteProductFromCart} = useProducts()

  const [active, setActive] = useState(product.cart || false)

  const handleOnClick = ()=>{
    active ? deleteProductFromCart({id: product.id}) : addProductToCart({product})
  }
  useEffect(()=>{
    setActive(product.cart)
  },[product.cart])
  return(
    <div className="absolute top-3 right-3 text-primaryColor" onClick={handleOnClick}>
      {
        active ?
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0392 21 20.5305 21 20V9.00003C21 8.73481 20.8946 8.48046 20.7071 8.29292C20.5196 8.10538 20.2652 8.00003 20 8.00003H17V7.22303C17 4.61403 15.097 2.27803 12.5 2.02503C11.8049 1.95594 11.103 2.03313 10.4395 2.25163C9.77599 2.47013 9.16557 2.8251 8.64752 3.2937C8.12946 3.76231 7.71524 4.33417 7.43149 4.9725C7.14774 5.61082 7.00076 6.30148 7 7.00003V8.00003H4C3.73478 8.00003 3.48043 8.10538 3.29289 8.29292C3.10536 8.48046 3 8.73481 3 9.00003V20C3 20.5305 3.21071 21.0392 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22ZM17 10V12H15V10H17ZM9 7.00003C9 5.34603 10.346 4.00003 12 4.00003C13.654 4.00003 15 5.34603 15 7.00003V8.00003H9V7.00003ZM7 10H9V12H7V10Z"/>
        </svg>
        :
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 22H19C20.103 22 21 21.103 21 20V9C21 8.73478 20.8946 8.48043 20.7071 8.29289C20.5196 8.10536 20.2652 8 20 8H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V20C3 21.103 3.897 22 5 22ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V8H9V7ZM5 10H7V12H9V10H15V12H17V10H19L19.002 20H5V10Z"/>
        </svg>
      }
    </div>

  )
}
