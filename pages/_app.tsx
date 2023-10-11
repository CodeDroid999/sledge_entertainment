import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/custom.css'
import '../styles/font-awesome.min.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
