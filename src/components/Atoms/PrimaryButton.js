import Link from 'next/link'

export default function PriamryButton({link, text = "COMPRAR"}){
  return(
    <Link href={link}>
      <a className="flex items-center justify-center w-full h-10 rounded-xl font-bold text-white bg-primaryColor">
        {text}
      </a>
    </Link>
  )
}
