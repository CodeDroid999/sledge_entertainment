import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/custom.css'
import 'styles/bootstrap.css';
import 'styles/custom.css';
import 'styles/index.css';
import 'styles/responsive.css';
import $ from "jquery"


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
