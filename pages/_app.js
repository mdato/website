import Nabvar from '../components/Nabvar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Nabvar />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
