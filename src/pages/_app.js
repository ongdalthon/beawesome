import AppLayout from '~/@components/templates/AppLayout'
import GlobalStyle from '~/@styles/GlobalStyle'
import '@styles/font.css'
import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <GlobalStyle />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  )
}
