import '../styles/globals.css'
import '../css/forms.css'
import "react-datepicker/dist/react-datepicker.css";
import {wrapper} from '../store'
import Layout from '../components/layouts';
import Head from 'next/head'

function MyApp({ Component, pageProps}) {
  return (
        <>
            <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <title>Money transfer</title>
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </>
          )
}

export default wrapper.withRedux(MyApp);
