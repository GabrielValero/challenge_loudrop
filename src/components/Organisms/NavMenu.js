import SearchField from '../Molecules/SearchField'
import CartSection from '../Molecules/CartSection'


export default function NavMenu(){
  return(
    <nav className="fixed h-16 sm:h-20 z-10 bg-white w-full flex justify-between items-center px-3 sm:px-10">
      <div className="h-full flex items-center">
        <img src={"/assets/Logo.png"} alt={"Logo"} className="h-7 object-contain"/>
      </div>
      <div className="flex items-center">
        <SearchField/>
        <CartSection/>
      </div>
    </nav>
  )
}
