import '../styles/globals.css'
import '../styles/app.css'

// aqui eu chamo os css
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
