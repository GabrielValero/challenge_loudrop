export default function CartEmpty(){
  return(
    <div className="flex flex-col justify-center items-center w-full h-full text-center pt-4">
      <img src={"/assets/CartEmpty.png"} alt="Imagen si el carito esta vacío" className="w-full h-3/4 object-contain"/>
      <p className="font-md text-primaryColor font-bold">!No hay productos¡</p>
    </div>
  )
}
