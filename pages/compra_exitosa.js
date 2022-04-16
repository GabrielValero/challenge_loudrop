import Head from 'next/head'
import Compra_Exitosa from '../src/components/Pages/Compra_Exitosa'

export default function compra_exitosa(){
  return(
    <div className="pt-24 pb-60">
      <Head>
        <meta name="Challenge" content="No es solo una ecommerce, es LA Ecommerce" />
        <title>Compra Exitosa</title>
      </Head>

      <Compra_Exitosa/>

    </div>

  )
}
