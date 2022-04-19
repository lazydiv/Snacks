import '../styles/globals.css'
import List  from '../components/Menu'
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from '../components/header';

function MyApp({ Component, pageProps }) {
  return ( 
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
