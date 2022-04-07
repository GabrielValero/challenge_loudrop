import '../styles/globals.css'
import Head from 'next/head'

import {ThemeContext} from '../src/context/ThemeContext'

import Footer from '../src/components/Organisms/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeContext>
      <Head>
        <meta chartset="utf-8"/>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </ThemeContext>
  )
}

export default MyApp
