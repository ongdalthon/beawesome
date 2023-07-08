import AppLayout from '~/@components/templates/AppLayout'
import GlobalStyle from '~/@styles/GlobalStyle'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
