import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <meta name="Challenge" content="No es solo una ecommerce, es LA Ecommerce" />
        <title>Frontend challenge</title>
      </Head>

      <h1 className="text-2xl font-bold">Hola Mundo</h1>
    </div>
  )
}
