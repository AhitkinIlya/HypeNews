import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import Head from 'next/head'
import { theme } from '../theme'
import { Header } from '../components/Header'

import '../styles/globals.css'
import 'macro-css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>HypeNews</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  )
}

export default MyApp
