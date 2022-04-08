import '../styles/globals.css'
import Head from 'next/head'

import {ProductContext} from '../src/context/ProductContext'

import Footer from '../src/components/Organisms/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <ProductContext>
      <Head>
        <meta chartset="utf-8"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </ProductContext>
  )
}

export default MyApp
