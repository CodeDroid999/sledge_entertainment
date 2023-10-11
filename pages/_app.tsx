import { AppProps } from 'next/app'
import '../styles/index.css'
import '../styles/custom.css'
import 'styles/bootstrap.css';
import 'styles/custom.css';
import 'styles/font-awesome.min.css';
import 'styles/index.css';
import 'styles/responsive.css';


export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
