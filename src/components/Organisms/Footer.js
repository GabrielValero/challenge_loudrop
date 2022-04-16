import Link from 'next/link'

import LinkedinIcon from '../Atoms/LinkedinIcon'
import GithubIcon from '../Atoms/GithubIcon'

export default function Footer(){
  return(
    <footer className="py-10 px-8 w-full absolute bottom-0">
      <div>

        <p className="light-text text-center mb-4">Hecho por Gabriel Valero para el <Link href="https://blue-manager-677.notion.site/Frontend-challenge-15c906cc610649a9992697f7800a0939"><a>challenge</a></Link> </p>
        <div className="flex flex-row justify-center">
          <Link href="https://www.linkedin.com/in/gabriel-valero-fd/" >
            <a target="_blank" className="mx-2">
              <LinkedinIcon size={30} color={"#C6CDDA"}/>
            </a>
          </Link>
          <Link href="https://github.com/GabrielValero/challenge_loudrop" >
            <a target="_blank" className="mx-2">
              <GithubIcon size={30} color={"#C6CDDA"}/>
            </a>
          </Link>
        </div>
      </div>

      <style jsx>{`
        footer{
          background: #2D3645;
        }
      `}</style>
    </footer>
  )
}
