import React from 'react'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { PizzaProvider } from 'context/Pizza'
import { PointsProvider } from 'context/Points'
import '../public/css/reset.css'
import '../public/css/fonts.css'

import theme from 'theme'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <PizzaProvider>
          <PointsProvider>
            <CssBaseline />
            <Component {...pageProps} />
          </PointsProvider>
        </PizzaProvider>
      </MuiThemeProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  const { req } = ctx

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
  }
}

export default App
