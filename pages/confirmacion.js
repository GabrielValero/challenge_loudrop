import Head from 'next/head'

import ConfirmPage from '../src/components/Pages/ConfirmPage'

export default function Confirm(){
  return(
    <div className="pt-24 pb-60">
      <Head>
        <meta name="Challenge" content="No es solo una ecommerce, es LA Ecommerce" />
        <title>Confirmar</title>
      </Head>

      <ConfirmPage/>

    </div>
  )
}
