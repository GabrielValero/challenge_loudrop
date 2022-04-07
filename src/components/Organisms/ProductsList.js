import React, {useCallback} from 'react'

import Card from '../Molecules/Card'

import productsList from '../../config/products'

function ProductsList(){
  return(
    <div className="flex flex-col sm:flex-row flex-wrap justify-center">
      {productsList.map((product)=> <Card product={product}/>)}
    </div>
  )
}

export default React.memo(ProductsList)
