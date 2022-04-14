import Head from 'next/head'

import ProductsList from '../src/components/Organisms/ProductsList'

export default function Home() {

  return (
    <div className="min-h-screen pt-24">
      <Head>
        <meta name="Challenge" content="No es solo una ecommerce, es LA Ecommerce" />
        <title>Frontend challenge</title>
      </Head>

      <ProductsList/>

    </div>
  )
}
