import '../styles/globals.css'
import List  from '../components/Menu'
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from '../components/header';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return ( 
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
