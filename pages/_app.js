// pages/_app.js

import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import { useSelector } from "react-redux";
import Head from "next/head";
import { Provider } from 'react-redux';
import store from '../store'; 
import { useEffect } from 'react';
import Preloader from "@/components/preloader/Preloader";
import { AppProps } from "next/app";
import { useRouter } from 'next/router';
import { selectTitle } from "../features/titleSlice"
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const title = useSelector((state) => selectTitle(state, router.pathname));
  const title = 'Vaidik Anushthanam -Book Online Pujas | Puja At Home'

  return (  
    <>  
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
