import React, {useState} from 'react'

import SearchIcon from '../Atoms/SearchIcon'
import useProducts from '../../hooks/useProducts'

export default function SearchFieldMobile(){
  const {searchProduct} = useProducts()
  const [active, setActive] = useState(false)

  const onChange = (e)=>{
    
    searchProduct({name: e.target.value})
  }

  return(
    <div className="flex items-center rounded-full relative overflow-hidden" >
      <input className={`h-10 pl-4 pr-12 w-60 rounded-full border-2 border-slate-200 duration-300 ${active ? "translate-x-0" : "translate-x-full"}`}
        type="text" placeholder="Buscar" onChange={onChange} onBlur={()=>setActive(false)}/>

      <div className="absolute right-0">
        <SearchIcon active={active} setActive={setActive}/>
      </div>
    </div>
  )
}
